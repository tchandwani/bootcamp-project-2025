import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className={styles.pageTitle}>Trisha Chandwani</h1>
        
        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image 
              src="/me.jpeg" 
              width={400} 
              height={500} 
              alt="Photo of Trisha Chandwani at the beach" 
            />
          </div>
          
          <div className={styles.aboutText}>
            <p>
              My name is <strong>Trisha Chandwani</strong> (she/her) and I am a first year{" "}
              <strong>Computer Science</strong> major at California Polytechnic University State University, San Luis Obispo.
            </p>
          </div>
        </div>
      </main>

      <div className={styles.footer}>
        <footer>
          <p>© 2025 Trisha Chandwani's website | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}