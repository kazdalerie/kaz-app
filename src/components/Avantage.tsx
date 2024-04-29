import { Container, Box, Typography, CssBaseline, useMediaQuery } from "@mui/material";

function AdvantagesSection() {
  const advantages = [
    {
      title: "Zack Nani a créé et soutient cette marque",
      description: "",
      highlight: "Zack Nani",  // Added a highlight property for customization
    },
    {
      title: "0€ de frais d’entrée jusqu’à Septembre 2024",
      description: "",
      highlight: "0€",  // Added a highlight property for customization
    },
    {
      title: "Moins de 10.000€ de besoin d’investissement pour ouvrir une Kazdalerie",
      description: "",
      highlight: "Moins de 10.000€",  // Added a highlight property for customization
    },
  ];

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const renderHighlightedText = (text : any, highlight: any) => {
    const parts = text.split(highlight);
    return (
      <>
        {parts.map((part: any, index: any) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span style={{ fontWeight: '800', fontSize: isMobile ? '1.3rem' : '2.3rem' }}>{highlight}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          marginBottom: '150px',
          padding: "50px",
          position: 'relative',
        }}
        id="advantages"
      >
        <Typography
          variant="h3"
          component="h3"
          fontFamily='"Paytone One", sans-serif !important'
          sx={{ color: "#0c5245", fontWeight: "bold", fontSize: isMobile ? "2rem" : "3rem" }}
          gutterBottom
        >
          NOS AVANTAGES
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginTop: 4,
          position: 'relative',
        }}>
         <svg width="100%" style={{ position: 'absolute', top: '0px', left: '0' }}>
          <line x1="40%" y1="0" x2="17%" y2="100%" stroke="#0c5245" strokeWidth="5"/>
          <line x1="50%" y1="0" x2="50%" y2="200px" stroke="#0c5245" strokeWidth="5"/>
          <line x1="60%" y1="0" x2="82%" y2="100%" stroke="#0c5245" strokeWidth="5"/>
        </svg>
       
          {advantages.map((advantage, index) => (
            <Box
              key={index}
              sx={{
                width: '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '150px',
              }}
            >
              <Typography variant="h6" component="h3" fontFamily='"Poppins", sans-serif !important'
                sx={{
                  fontWeight: 'bold',
                  color: "black",
                  letterSpacing: '0.5px',
                  marginY: 2,
                  fontSize: isMobile ? "1rem" : "2rem",
                  lineHeight: isMobile ? "1.2" : "1.5",
                }}>
                {renderHighlightedText(advantage.title, advantage.highlight)}
              </Typography>
              <Typography variant="body1" fontFamily='"Poppins", sans-serif !important' sx={{ fontWeight: 'bold', fontSize: "16px" }}>
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
