import styles from "../styles/Formule.module.css"; // Nom du module CSS modifié

export default function Testimonials() {
  return (
    <>
      <section className={styles.testimonials_section} id="testimonials">
        <div className={styles.testimonials_container}>
          <div className={styles.left}>
            <img src="/images/menuclean.png" />
          </div>
          <div className={styles.right}>
            <h1>L’ambition de la Kazdalerie est de démocratiser ce produit au travers d’une franchise utilisant des produits frais et un savoir-faire unique. </h1>
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
