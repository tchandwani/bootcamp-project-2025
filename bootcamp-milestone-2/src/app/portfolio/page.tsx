import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div>
      <main>
        <div className="project">
          <h1 className="page-title">Portfolio</h1>
          <Link href="/">
            <Image 
              src="/home.png" 
              width={500} 
              height={400} 
              alt="A picture of the home page" 
            />
          </Link>
        </div>
        
        <div className="project-details">
          <div className="project-name">
            <p>Personal Website</p>
          </div>
          <div className="project-description">
            <p>Description of Project</p>
            <Link href="/">
              <p>LEARN MORE</p>
            </Link>
          </div>
        </div>
      </main>

      <div className="footer">
        <footer>
          <p>© 2025 Trisha Chandwani's website | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}
