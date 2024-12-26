import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useLocation } from "react-router-dom";

const routes = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Coverage", route: "/coverage" },
];

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        color: "white",
      }}
    >
      {/* Logo */}
      <Box className="logo_img">
        <img
          src="/images/only_text.png"
          alt="Logo"
          style={{ maxWidth: "20rem" }}
        />
      </Box>

      {/* Responsive Navigation */}
      {isSmallScreen ? (
        <>
          {/* Hamburger Menu Icon */}
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>

          {/* Drawer Component */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 250,
                padding: "1rem",
                backgroundColor: "white",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {routes.map((value) => (
                  <ListItem button key={value.name}>
                    <Link
                      to={value.route}
                      style={{
                        textDecoration: "none",
                        color:
                          location.pathname === value.route ? "blue" : "black",
                        fontWeight:
                          location.pathname === value.route ? "bold" : "normal",
                      }}
                    >
                      <ListItemText primary={value.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Desktop Navigation
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ul
            style={{
              display: "flex",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {routes.map((value) => (
              <Link
                key={value.name}
                to={value.route}
                style={{
                  textDecoration: "none",
                  marginRight: "1.5rem",
                }}
              >
                <li
                  className={`nav-item ${
                    location.pathname === value.route ? "active" : ""
                  }`}
                  style={{
                    color:
                      location.pathname === value.route ? "white" : "white",
                    fontWeight:
                      location.pathname === value.route ? "bold" : "normal",
                  }}
                >
                  {value.name}
                </li>
              </Link>
            ))}
          </ul>
          <SearchIcon fontSize="medium" sx={{ color: "white", ml: 2 }} />
          <Button
            variant="contained"
            sx={{
              p: 1.5,
              ml: 2,
              background: "black",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Contact Us
            <ArrowForwardIosIcon sx={{ fontSize: "small", ml: 1 }} />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
