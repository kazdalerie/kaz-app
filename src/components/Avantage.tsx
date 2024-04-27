import { Container, Box, Typography, CssBaseline, useMediaQuery } from "@mui/material";

function AdvantagesSection() {
  const advantages = [
    {
      title: "Marque créée et soutenue par Zack Nani",
      description: "",
    },
    {
      title: "0€ de frais d’entrée jusqu’à Septembre 2024",
      description: "",
    },
    {
      title: "10K Maximum de besoin d’investissement",
      description: "",
    },
  ];

  // Utilisation de useMediaQuery pour détecter les écrans de téléphone
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          marginBottom:'150px',
          padding: "50px ", // Maintain horizontal padding
          position: 'relative', // Relative positioning for line-drawing
        }}
        id="advantages"
      >
        <Typography
          variant="h3"
          component="h3"
          fontFamily='"Paytone One", sans-serif !important'
          sx={{ color: "#0c5245", fontWeight: "bold", fontSize: isMobile ? "2rem" : "3rem" }} // Ajustez la taille de la typographie pour les téléphones
          gutterBottom
        >
          Nos avantages
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginTop: 4,
          position: 'relative', // Ensure the svg lines are positioned correctly
        }}>
         <svg width="100%" style={{ position: 'absolute', top: '0px', left: '0' }}>
          <line x1="40%" y1="0" x2="17%" y2="100%" stroke="#0c5245" strokeWidth="5"/> {/* Ajustez la longueur de la première ligne */}
          <line x1="50%" y1="0" x2="50%" y2="200px" stroke="#0c5245" strokeWidth="5"/> {/* Ajustez la longueur et la hauteur de la ligne centrale */}
          <line x1="60%" y1="0" x2="82%" y2="100%" stroke="#0c5245" strokeWidth="5"/> {/* Ajustez la longueur de la dernière ligne */}
        </svg>
       
          {advantages.map((advantage, index) => (
            <Box
              key={index}
              sx={{
                width: '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '150px', // Position advantages further down
              }}
            >
              <Typography variant="h6" component="h3" fontFamily='"Paytone One", sans-serif !important'
                sx={{
                  fontWeight: 'bold',
                  color: "black",
                  letterSpacing: '0.5px',
                  marginY: 2,
                  fontSize: isMobile ? "1rem" : "2rem", // Ajustez la taille de la typographie pour les téléphones
                  lineHeight: isMobile ? "1.2" : "1.5", // Ajustez l'espacement des lignes pour les téléphones
                }}>
                {advantage.title}
              </Typography>
              <Typography variant="body1" fontFamily='"Paytone One", sans-serif !important' sx={{ fontWeight: 'bold', fontSize: "16px" }}>
                {advantage.description}
              </Typography>
            </Box>
          ))}
        </Box>
        
      </Container>
    </>
  );
}

export default AdvantagesSection;
