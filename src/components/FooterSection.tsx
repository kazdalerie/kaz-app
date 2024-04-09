import { Box, TextField, Button, Grid, Container } from "@mui/material";

function FooterSection() {
  return (
    <Box
      sx={{
        bgcolor: "#f3f0ea",
        p: { xs: "80px 30px", md: "80px" },
        display: 'flex', // Added for centering
        alignItems: 'center', // Added for centering
        justifyContent: 'center', // Added for centering
        height: '100vh' // Adjust height to full viewport height
      }}
      id="contact"
    >
      <Container maxWidth="sm"> {/* Changed from false to "sm" to limit the width of the form */}
          <Box display="flex" justifyContent="center" mt={3}>
            <h3
            >
              Envie d'ouvrir une Kazdalerie ?
            </h3>
          </Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Votre réservation a été envoyée !");
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                label="Nom"
                helperText="Veuillez entrer un nom valide"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                label="Prénom"
                type="text"
                helperText="Veuillez entrer un prénom valide"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                type="number"
                helperText="Veuillez entrer un numéro de téléphone valide"
                label="N° de téléphone"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label="Adresse email"
                helperText="Veuillez entrer une adresse email valide"
                required
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label="Message"
                helperText="Veuillez entrer votre message"
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
                helperText="Veuillez entrer vos commentaires"
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
                backgroundColor: "#71A894",
                padding: "20px 24px",
                borderRadius: "46px",
                ":hover": {
                  backgroundColor: "#71A894",
                },
              }}
            >
              Réserver
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default FooterSection;