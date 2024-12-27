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
        <Box className="contact_form" sx={{ paddingTop: "50px" }}>
          <Grid container spacing={2} alignItems="center">
            {/* First Grid - Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" }, // Centered on small screens
                }}
              >
                <img
                  src="/images/home/contact4.svg"
                  alt="Contact Illustration"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
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
                  fontSize: { xs: "20px", md: "24px" },
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
                  }}
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
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

      {/* Overlapping Section */}
      <Box
        sx={{
          position: "relative", // Allow precise positioning
          zIndex: 1, // Ensure it appears above the footer
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          padding: "60px",
          backgroundColor: "#fff",
          overflow: "hidden",
          marginBottom: "-110px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                paddingTop: "20px",
                color: "#000000",
                fontSize: { xs: "24px", md: "37px" },
                fontWeight: "800",
                lineHeight: "43px",
                marginBottom: "1rem",
              }}
            >
              We are Trusted 50+ <br /> Countries Worldwide
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "400",
                fontFamily: "'Poppins', sans-serif",
                color: "#000000",
                lineHeight: "1.5",
                letterSpacing: "0.5px",
                textAlign: "justify",
                padding: "10px 0",
              }}
            >
              Evo Primetech is a global IT services & solutions provider...
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
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

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px 0",
          borderTop: "1px solid #ddd",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Contact;
