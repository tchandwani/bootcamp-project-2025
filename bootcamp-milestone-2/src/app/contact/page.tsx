import ContactForm from '../../components/contactForm';

export default function ContactPage() {
  return (
    <main>
      <h1 className="page-title">Contact Me</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Have a question or want to work together? Send me a message!
      </p>
      <ContactForm />
    </main>
  );
}