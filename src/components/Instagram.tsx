import { Box, Typography } from "@mui/material";
import instagramLogo from "../../public/images/icons8-instagram-100.png";
import styles from "../styles/Instagram.module.css";

function InstagramFeed() {
  return (
    <div className={styles.instagramFeedContainer} id="insta">
      <Box textAlign="center" mb={7.5}>
        <Typography
          variant="h3"
          component="h3"
          fontFamily='"Paytone One", sans-serif !important'
          sx={{ color: "#0c5245", fontWeight: "bold" }}
          gutterBottom
        >
          Suivez nous sur instagram
        </Typography>
        <a
          href="https://www.instagram.com/lakazdalerie/?utm_source=ig_embed&ig_rid=62fa6b0a-3be5-48b1-b71a-84a2c8edb129"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramLogo}
            alt="Instagram logo"
            style={{
              margin: "20px auto",
              display: "block",
              width: "50px",
              height: "50px",
            }}
          />
        </a>{" "}
      </Box>
      <div className={styles.instagramIframeContainer}>
        <iframe
          src="https://widgets.sociablekit.com/instagram-feed/iframe/25398015'"
          className={styles.instagramIframe}
        ></iframe>
      </div>
    </div>
  );
}

export default InstagramFeed;
