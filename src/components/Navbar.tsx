import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    content: "Qui sommes-nous ?",
    link: "#about",
  },
  {
    content: "Notre concept",
    link: "#values",
  },
  {
    content: "Nous suivre",
    link: "#insta",
  },
  {
    content: "Notre menu",
    link: "https://menu-kazdalerie.tiiny.site/",
  },
  {
    content: "Devenir associé",
    link: "#contact",
  },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Link href="#" sx={{ paddingX: 5 }}>
        <img src="/images/logo-kasdalsmol.png" alt="kazdalerie" />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item.link}>
            <ListItem key={item.content} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <ListItemText
                  primary={item.content}
                  sx={{
                    color: "#0c5245 !important",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "left",
              backgroundColor: "#0c5245",
              "&:hover": { backgroundColor: "#034732" },
            }}
          >
            <Link
              href="https://www.ubereats.com/fr/store/la-kazdalerie/VOW8ex-ESPux1sQQWxe1ew?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjYlMjBSdWUlMjBTb2V1ciUyMEVtbWFudWVsbGUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKbTVsNWdqNTM1a2NScnBsRnN5Rm9LaE0lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDguNzU5NTM0MSUyQyUyMmxvbmdpdHVkZSUyMiUzQTIuMjk3MjUzJTdE
        "
              sx={{
                textDecoration: "none",
                color: "#ffff !important",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              Commandez sur UberEats
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                textAlign: "left",
                marginTop: "10px",
              },
            }}
          >
            <Link
              href="#"
              sx={{ display: { xs: "none", lg: "flex", gap: 43 } }}
            >
              <img src="/images/logo-kasdalsmol.png" alt="" />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "flex", gap: 43 } }}>
            {" "}
            {navItems.map((item) => (
              <Typography key={item.content}>
                <Link
                  href={item.link}
                  sx={{
                    textDecoration: "none",
                    color: "#0c5245",
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#0c5245 !important",
                    },
                  }}
                >
                  {item.content}
                </Link>
              </Typography>
            ))}
            <Button
              variant="contained"
              color="secondary"
              href="https://www.ubereats.com/fr/store/la-kazdalerie/VOW8ex-ESPux1sQQWxe1ew?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjYlMjBSdWUlMjBTb2V1ciUyMEVtbWFudWVsbGUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKbTVsNWdqNTM1a2NScnBsRnN5Rm9LaE0lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDguNzU5NTM0MSUyQyUyMmxvbmdpdHVkZSUyMiUzQTIuMjk3MjUzJTdE" // Replace with your actual UberEats link
              sx={{
                backgroundColor: "#0c5245", // Choose a color that fits your design
                color: "white !important",
                marginTop: "-5px",
                "&:hover": {
                  backgroundColor: "#034732", // Darker shade on hover
                },
              }}
            >
              Commandez sur UberEats
            </Button>
          </Box>{" "}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
