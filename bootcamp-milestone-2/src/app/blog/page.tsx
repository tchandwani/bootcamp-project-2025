import { notFound } from "next/navigation";
import Image from "next/image";
import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";
import Comment from "../../components/comment";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).orFail();

    const commentsArray =
      blog.comments && Array.isArray(blog.comments)
        ? blog.comments.map((comment: any) => ({
            user: String(comment.user),
            comment: String(comment.comment),
            time: new Date(comment.time),
          }))
        : console.log("==================");
console.log("COMMENTS FOUND:", commentsArray.length);
console.log("Comments data:", commentsArray);
console.log("==================");

    console.log("Comments found:", commentsArray.length);

    return {
      title: blog.title,
      slug: blog.slug,
      date: blog.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      description: blog.description,
      image: blog.image,
      imageAlt: blog.imageAlt,
      content: String(blog.content),
      comments: commentsArray,
    };
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlog(slug);

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

          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className={styles.commentsSection}>
            <h2>Comments</h2>
            {blog.comments.length > 0 ? (
              blog.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
