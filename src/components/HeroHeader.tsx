import { Typography } from "@mui/material";
import styles from "../styles/HeroHeader.module.css";

export default function HeroHeader() {
  return (
    <>
      <section className={styles.hero_header_section}>
        <div className={styles.left}>
          <h1>
            La Kazdalerie, <br/> c'est quoi ?
          </h1>
          <p>
            Entre tradition et modernité, La Kazdalerie se veut être une marque originale tout en
            mettant à l’honneur ses origines maghrébines. L’utilisation du Msemen en pain,
            n’a rien d’anodin, il s’agit là de rendre hommage à la cuisine nord-africaine tout en
            faisant découvrir ce joyau culinaire au travers de recettes originales et copieuses.
            Parfois servi au petit-déjeuner ou encore à l’heure du thé, nous pensons que le Msemen
            tire le maximum de son potentiel lorsqu’il sert de base à un sandwich consistant et savoureux.
          </p>
        </div>
        <div className={styles.right}>
          <img src="/images/zack-devanture.jpeg" />
        </div>
      </section>
    </>
  );
}
