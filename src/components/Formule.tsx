import styles from "../styles/Formule.module.css"; // Make sure your module CSS is properly referenced

export default function Testimonials() {
  return (
    <>
      <section className={styles.testimonials_section} id="testimonials">
          <div className={styles.button_container}>
            <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className={styles.ubereats_button}>
              Commander sur Uber Eats
            </a>
        </div>
      </section>
    </>
  );
}
