import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about_section} id="about">
        <div className={styles.about_section_container}>
          <div className={styles.left}>
            <img src="/images/zack-msemen.jpeg" />
          </div>
          <div className={styles.right}>
            <h1> L’ambition de la Kazdalerie est de démocratiser ce produit au travers d’une franchise utilisant des produits frais et un savoir-faire unique. </h1>
            <p>
              Marocains, Algériens, Tunisiens, tous ont leur propre façon de le faire, 
              et aujourd’hui c’est à la Kazdalerie de tous les rassembler autour de nos recettes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
