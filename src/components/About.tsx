import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about_section} id="">
        <div className={styles.about_section_container}>
          <div className={styles.left}>
            <img src="/images/zack-msemen.jpeg" />
          </div>
          <div className={styles.right}>
          </div>
        </div>
      </section>
    </>
  );
}
