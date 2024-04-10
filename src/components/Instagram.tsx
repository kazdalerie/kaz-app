import styles from '../styles/Instagram.module.css';

function InstagramFeed() {
  return (
    <div className={styles.instagramFeedContainer}>
      <h2 className={styles.instagramTitle}>Nous suivre sur Instagram</h2>
      <div className={styles.instagramIframeContainer}>
        <iframe
          src='https://widgets.sociablekit.com/instagram-feed/iframe/25393606'
          className={styles.instagramIframe}
        ></iframe>
      </div>
    </div>
  );
}

export default InstagramFeed;
