import { Box, TextField, Button, Grid, Container, Typography } from "@mui/material";
import styles from "../styles/Footer.module.css";

function FooterSection() {
  return (
    <Box
      sx={{
        bgcolor: "transparant",
        p: { xs: "80px 30px", md: "80px" },
        display: 'flex', // Added for centering
        alignItems: 'center', // Added for centering
        justifyContent: 'center', // Added for centering
        height: '100vh', // Adjust height to full viewport height
        marginTop: '50px', // Added for spacing
      }}
      id="contact"
    >
      <Container maxWidth="sm"> {/* Changed from false to "sm" to limit the width of the form */}
      <Box textAlign="center" mb={7.5}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "#0c5245", fontWeight: "bold" }}
            gutterBottom
          >
            Envie d'ouvrir une Kazdalerie ?
          </Typography>
        </Box>
        <form
          className={styles.main}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Votre message a été envoyée !");
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                label="Nom complet"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                label="N° de téléphone"
                type="number"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label="Adresse email"
                required
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label="Avez-vous un local"
                required
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label="Message"
                required
                fullWidth
                multiline
                rows={4} // Set the number of rows to define the initial textarea height
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label="Commentaires"
                required
                fullWidth
                multiline
                rows={4} // Set the number of rows for the textarea
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#0c5245",
                padding: "20px 24px",
                borderRadius: "46px",
                marginBottom: "100px",
                ":hover": {
                  backgroundColor: "#0c5245",
                },
              }}
            >
              Envoyer
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default FooterSection;