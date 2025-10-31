import BlogPreview from '../../components/blogPreview';
import blogs from '../blogData';

export default function BlogPage() {
  return (
    <main>
      <h1 className="page-title">My Blog</h1>
      
      <div className="blog-container">
        {blogs.map(blog => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}