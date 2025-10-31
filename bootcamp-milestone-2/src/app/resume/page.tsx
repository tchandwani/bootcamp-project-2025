import styles from './page.module.css';

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className={styles.sectionTitle}>Resume</h1>
        <a href="/resume.pdf" download className={styles.downloadLink}>
          download resume
        </a>

        <div className={styles.resume}>
          <div className={styles.section}>
            <div className={styles.entry}>
              <section>
                <div className={styles.education}>
                  <h2>Education</h2>
                  <h3>B.S. in Computer Science</h3>
                  <p className={styles.entryInfo}>
                    California Polytechnic University State University, San Luis Obispo | Expected Graduation May 2029
                  </p>
                </div>
              </section>
            </div>

            <div className={styles.entry}>
              <section>
                <div className={styles.experience}>
                  <h2>Experience</h2>
                  <h3>Hack4Impact Software Developer</h3>
                  <p className={styles.entryInfo}>Hack4Impact | October 2025 - present</p>
                  <p className={styles.entryDescription}>- Completed the Hack4Impact bootcamp</p>
                  
                  <h3>Camp Galileo Intern</h3>
                  <p className={styles.entryInfo}>Camp Galileo | Summer 2024, Summer 2025</p>
                  <p className={styles.entryDescription}>
                    - Taught basic STEM lessons and led group activities for children aged 5–10, fostering curiosity and creativity
                  </p>
                  <p className={styles.entryDescription}>
                    - Managed classroom behavior, ensured safety, and maintained a positive learning environment
                  </p>
                  <p className={styles.entryDescription}>
                    - Communicated with parents during pick-up and drop-off, enhancing customer interaction skills
                  </p>
                </div>
              </section>
            </div>

            <section>
              <div className={styles.coursework}>
                <h2>Coursework</h2>
                <ul className={styles.courseList}>
                  <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                  <li>Intro to Computer Science</li>
                  <li>Data Structures</li>
                  <li>Calculus 1, 2, 3</li>
                  <li>Physics C. Mechanics</li>
                  <li>Marketing</li>
                  <li>Principles of Business</li>
                </ul>
              </div>
            </section>

            <div className={styles.entry}>
              <section>
                <div className={styles.project}>
                  <h2>Projects</h2>
                  <h3>Personal Website</h3>
                  <p>Designed and built a personal website using HTML and CSS</p>
                  <p>- Implemented multiple pages using HTML and CSS</p>
                  <p>- Focused on semantic HTML design</p>
                  <p>- Used best practices for Git and GitHub</p>
                </div>
              </section>
            </div>

            <section>
              <div className={styles.skills}>
                <h2>Skills</h2>
                <ul className={styles.skillList}>
                  <li>Semantic HTML5</li>
                  <li>CSS</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>GitHub and Git</li>
                </ul>
              </div>
            </section>
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