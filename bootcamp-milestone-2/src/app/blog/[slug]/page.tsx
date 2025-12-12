import { notFound } from 'next/navigation';
import Image from 'next/image';
import connectDB from '../../../database/db';
import BlogModel from '../../../database/blogSchema';
import type { Blog } from '../../../database/blogSchema';
import Comment from '../../../components/comment';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  await connectDB();
  const blog = await BlogModel.findOne({ slug }).lean() as any;
  if (!blog) {
    notFound();
  }

  return (
    <div>
      <main className={styles.main}>
        <article className={styles.blogPost}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>
            {new Date(blog.date).toLocaleDateString()}
          </p>

          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={700}
            height={400}
            className={styles.blogImage}
          />

          <div 
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <section style={{ marginTop: "2rem" }}>
            <h3>Comments</h3>
            {blog.comments && blog.comments.length > 0 ? (
              blog.comments.map((comment: any, index: number) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p>No comments yet</p>
            )}
          </section>
        </article>
      </main>
    </div>
  );
}