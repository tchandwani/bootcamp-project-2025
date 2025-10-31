import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogs from '../../blogData';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>  // Changed to Promise
};

export default async function BlogPost({ params }: Props) {
  // Await the params
  const { slug } = await params;
  
  // Find the blog post that matches the slug
  const blog = blogs.find((b) => b.slug === slug);

  // If no blog found, show 404
  if (!blog) {
    notFound();
  }

  return (
    <div>
      <main className={styles.main}>
        <article className={styles.blogPost}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>{blog.date}</p>

          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={700}
            height={400}
            className={styles.blogImage}
          />

          <div className={styles.blogContent}>
            <p>{blog.description}</p>

            {/* Add your full blog content here based on the slug */}
            {blog.slug === 'introduction-to-json' && (
              <>
                <h2>What is JSON?</h2>
                <p>JSON (JavaScript Object Notation) is commonly used on the frontend to structure data...</p>
              </>
            )}

            {blog.slug === 'backend-for-beginners' && (
              <>
                <h2>Understanding the Backend</h2>
                <p>The backend is the engine of the website...</p>
              </>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}