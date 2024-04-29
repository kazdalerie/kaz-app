import React from 'react';
import styles from '../styles/Footer.module.css'; // Ajustez le chemin selon l'organisation de vos fichiers

const Footer: React.FC = () => {
  // Obtenez l'année courante
  const currentYear = new Date().getFullYear();
  
  const copyRight = `© ${currentYear}. lakazdalerie. Tous droits réservés.`;
  
  
  const socialNetworks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lakazdalerie/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path d="M7.75 2C4.577 2 2 4.577 2 7.75v8.5C2 19.423 4.577 22 7.75 22h8.5C19.423 22 22 19.423 22 16.25v-8.5C22 4.577 19.423 2 16.25 2h-8.5zM20 16.25c0 2.071-1.679 3.75-3.75 3.75h-8.5A3.753 3.753 0 013 16.25v-8.5C3 5.679 4.679 4 7.75 4h8.5C18.321 4 20 5.679 20 7.75v8.5z"/>
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zM17.25 6.75A1.25 1.25 0 1017.25 9.5 1.25 1.25 0 0017.25 6.75z"/>
        </svg>
      ),
    },
    // Ajoutez d'autres réseaux ici si nécessaire
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          {socialNetworks.map((network, index) => (
            <a key={index} className={styles.socialLink} href={network.url} target="_blank" rel="noopener noreferrer" aria-label={network.name}>
              {network.icon}
            </a>
          ))}
        </div>
      </div>
      <span>{copyRight}</span>
    </div>
  );
};

export default Footer;
