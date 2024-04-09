import { Box, Typography } from '@mui/material';
import styles from '../styles/Instagram.module.css';

function InstagramFeed() {
  return (
    <div className={styles.instagramFeedContainer} id='insta'>
        <Box textAlign="center" mb={7.5}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ color: "#0c5245", fontWeight: "bold" }}
            gutterBottom
          >
            Suivez nous sur instagram
          </Typography>
        </Box>      <div className={styles.instagramIframeContainer}>
        <iframe
          src='https://widgets.sociablekit.com/instagram-feed/iframe/25393606'
          className={styles.instagramIframe}
        ></iframe>
      </div>
    </div>
  );
}

export default InstagramFeed;
