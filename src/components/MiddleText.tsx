import styles from "../styles/MiddleText.module.css";

export default function HeroHeader() {
  return (
    <>
      <section className={styles.hero_header_section} id="about">
        <div className={styles.left}>
          <h2>
            La Kazdalerie, c'est quoi ? <br/>
            Entre tradition et modernité, La Kazdalerie se veut être une marque originale tout en
            mettant à l’honneur ses origines maghrébines. L’utilisation du Msemen en pain,
            n’a rien d’anodin, il s’agit là de rendre hommage à la cuisine nord-africaine tout en
            faisant découvrir ce joyau culinaire au travers de recettes originales et copieuses. <br/>
            Parfois servi au petit-déjeuner ou encore à l’heure du thé, nous pensons que le Msemen
            tire le maximum de son potentiel lorsqu’il sert de base à un sandwich consistant et savoureux.
            L’ambition de la Kazdalerie est de démocratiser ce produit au travers d’une franchise utilisant des produits frais et un savoir-faire unique.               Marocains, Algériens, Tunisiens, tous ont leur propre façon de le faire, 
              et aujourd’hui c’est à la Kazdalerie de tous les rassembler autour de nos recettes.
          </h2>
        </div>
      </section>
    </>
  );
}
