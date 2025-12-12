import Image from 'next/image';
import Link from 'next/link';
import connectDB from '../../database/db';
import ProjectModel, { IComment } from '../../database/projectSchema';

type ProjectData = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  comments: {
    user: string;
    comment: string;
    time: string;
  }[];
};

async function getProjects(): Promise<ProjectData[]> {
  await connectDB();

  try {
    const projects = await ProjectModel.find().orFail();
    return projects.map(project => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
      image: project.image,
      imageAlt: project.imageAlt,
      link: project.link,
      comments: (project.comments || []).map((comment: IComment) => ({
        user: comment.user,
        comment: comment.comment,
        time: comment.time.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        })
      }))
    }));
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main>
        <h1 className="page-title">My Portfolio</h1>
        <div>No projects found.</div>
      </main>
    );
  }

  return (
    <div>
      <main>
        <h1 className="page-title">Portfolio</h1>
        
        {projects.map((project) => (
          <div key={project.slug}>
            <div className="project">
              <Link href={project.link}>
                <Image 
                  src={project.image} 
                  width={500} 
                  height={400} 
                  alt={project.imageAlt} 
                />
              </Link>
            </div>
            
            <div className="project-details">
              <div className="project-name">
                <p>{project.title}</p>
              </div>
              <div className="project-description">
                <p>{project.description}</p>
                <Link href={project.link}>
                  <p>LEARN MORE</p>
                </Link>
              </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section" style={{ marginTop: '20px', marginBottom: '40px' }}>
              <h3>Comments ({project.comments.length})</h3>
              {project.comments.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                project.comments.map((comment, index) => (
                  <div key={index} className="comment" style={{ 
                    border: '1px solid #ddd', 
                    padding: '10px', 
                    marginBottom: '10px',
                    borderRadius: '5px'
                  }}>
                    <p><strong>{comment.user}</strong></p>
                    <p>{comment.comment}</p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>{comment.time}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </main>

      <div className="footer">
        <footer>
          <p>© 2025 Trisha Chandwani's website | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}