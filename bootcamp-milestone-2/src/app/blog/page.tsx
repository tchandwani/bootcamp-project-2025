import BlogPreview from '../../components/blogPreview';
import connectDB from '../../database/db';
import Blog from '../../database/blogSchema';

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // Convert MongoDB documents to plain objects and format the date
    return blogs.map(blog => ({
      title: blog.title,
      slug: blog.slug,
      date: blog.date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      description: blog.description,
      image: blog.image,
      imageAlt: blog.imageAlt,
    }));
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <main>
        <h1 className="page-title">My Blog</h1>
        <div className="blog-container">
          <p>No blogs found.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1 className="page-title">My Blog</h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}