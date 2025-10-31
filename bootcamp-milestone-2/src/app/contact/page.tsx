import styles from './page.module.css';
export default function Contact() {
  return (
    <div>
      <main>
        <h1 className={styles.pageTitle}>Contact Page</h1>

        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email"
            required
          />

          <label htmlFor="comments">Message</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Message"
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </main>

      <div className={styles.footer}>
        <footer>
          <p>© 2025 Trisha Chandwani's website | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}