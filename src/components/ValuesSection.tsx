import { Container, Box, Typography, Paper, CssBaseline } from "@mui/material";

function ValuesSection() {
  const values = [
    {
      logo: "/icons/foodcart.png",
      title:
        "Une marque de street-food maghrébine autour du traditionnel msemen",
      description: "",
    },
    {
      logo: "/icons/saladier.png",
      title: "Des recettes copieuses et savoureuses crées par Zack Nani",
      description: "",
    },
    {
      logo: "/icons/cartemenu.png",
      title:
        "Un menu simple de 4 sandwichs, 2 sides et 3 desserts qui facilite les opérations en cuisine",
      description: "",
    },
    {
      logo: "/icons/provisions.png",
      title:
        "80% d'ingrédients préparés sur place ou par nos artisans partenaires",
      description: "",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          padding: "80px 30px",
          "@media (min-width:600px)": {
            padding: "80px",
          },
        }}
        id="values"
      >
        <Box textAlign="center" mb={7.5}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "#0c5245", fontWeight: "bold" }}
            gutterBottom
          >
            Notre concept
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="stretch"
          flexWrap="wrap"
          sx={{ gap: "60px" }}
        >
          {values.map((value, index) => (
            <Box
              key={index}
              flexBasis={{
                xs: "100%",
                sm: "calc(50% - 30px)",
                md: "calc(25% - 45px)",
              }}
              sx={{ mb: 4, height: "auto" }}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "64px 17px",
                  backgroundColor: "#0c5245", // Set green background color
                  color: "#FFFFFF",
                }}
              >
                <img
                  src={value.logo}
                  alt={value.title}
                  style={{ maxWidth: "80%", marginBottom: 16 }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {value.title}
                </Typography>
                <Typography variant="body1" style={{ textAlign: "center" }}>
                  {value.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
        <div>
          <h3>
            L’ambition de la Kazdalerie est de démocratiser ce produit au
            travers d’une franchise utilisant des produits frais et un
            savoir-faire unique.
          </h3>
          <h3>
            Marocains, Algériens, Tunisiens, tous ont leur propre façon de le
            faire, et aujourd’hui c’est à la Kazdalerie de tous les rassembler
            autour de nos recettes.
          </h3>
        </div>
      </Container>
    </>
  );
}

export default ValuesSection;
