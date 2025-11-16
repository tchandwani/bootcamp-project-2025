import Image from 'next/image';
import Link from 'next/link';
import connectDB from '../../database/db';
import Project from '../../database/projectSchema';

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().orFail();
    return projects.map(project => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
      image: project.image,
      imageAlt: project.imageAlt,
      link: project.link,
    }));
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

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