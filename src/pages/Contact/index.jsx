import { Box, TextField, Button, Grid, Typography } from "@mui/material";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#54ACDF",
          padding: "30px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Navbar />
        <Box className="contact_form " sx={{ paddingTop: "50px" }}>
          <Grid container spacing={2}>
            {/* First Grid - Replacing the Image with Text */}
            <Grid item xs={12} md={6}>
              <img src="/images/home/contact4.svg" alt="" />
            </Grid>

            {/* Second Grid - Form Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Contact Us Today!
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "15px",
                }}
              >
                <TextField
                  sx={{
                    marginBottom: "18px",
                    "& .MuiInputBase-input": {
                      color: "#54ACDF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ACDF",
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "#54ACDF",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ACDF",
                    },
                  }}
                  fullWidth
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                />
                <TextField
                  sx={{
                    marginBottom: "18px",
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ACDF",
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "#54ACDF",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ACDF",
                    },
                  }}
                  fullWidth
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                />
                <TextField
                  sx={{
                    marginBottom: "18px",
                    "& .MuiInputBase-input": {
                      color: "#54ACDF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ACDF",
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "#54ACDF",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ACDF",
                    },
                  }}
                  fullWidth
                  required
                  id="email"
                  name="email"
                  label="Email"
                />
                <TextField
                  sx={{
                    marginBottom: "18px",
                    "& .MuiInputBase-input": {
                      color: "#54ACDF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ACDF",
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "#54ACDF",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ACDF",
                    },
                  }}
                  fullWidth
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                />
                <TextField
                  sx={{
                    marginBottom: "18px",
                    "& .MuiInputBase-input": {
                      color: "#54ACDF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ACDF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ACDF",
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "#54ACDF",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ACDF",
                    },
                  }}
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  // defaultValue="Default Value"
                />
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontWeight: "bold",
                    backgroundColor: "#54ACDF",
                    ":hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  type="submit"
                >
                  Submit Form
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative", // Allow precise positioning
          zIndex: 1, // Ensure it appears above the footer
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "30px",
          padding: "70px",
          backgroundColor: "white",
          overflow: "hidden",
          marginBottom: "-48px", // Negative margin to overlap the footer
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                paddingTop: "20px",
                color: "#000000",
                fontSize: "37px",
                fontWeight: "800",
                lineHeight: "43px",
                marginBottom: "1rem",
              }}
            >
              We are Trusted 50+ <br /> Countries Worldwide
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h5"
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                fontFamily: "'Poppins', sans-serif",
                color: "#000000",
                lineHeight: "1.5",
                letterSpacing: "0.5px",
                textAlign: "justify",
                padding: "10px 0",
              }}
            >
              Evo Primetech is a global IT services & solutions provider that
              builds computing systems for clients by combining hardware,
              software, networking, and business solutions such as CRM, ERP, and
              AIFA for businesses of all sizes and industries. Our vast global
              presence, quick and efficient methods, and state-of-the-art
              solutions allow us to provide the best solutions at the right
              time.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <img
              src="/images/home/mapimg.png"
              alt="Map Image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px 0",
          borderTop: "1px solid #ddd", // Optional: subtle top border for footer
          position: "relative", // Ensures stacking context
          zIndex: 0, // Allows the upper box to overlap
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Contact;
