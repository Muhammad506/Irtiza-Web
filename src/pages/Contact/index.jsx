import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for submitting the form."); // Set success message
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }); // Clear the form fields
        setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
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
                  value={formValues.firstName}
                  onChange={handleInputChange}
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
                  value={formValues.lastName}
                  onChange={handleInputChange}
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
                  value={formValues.email}
                  onChange={handleInputChange}
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
                  label="Message"
                  id="message"
                  name="message"
                  multiline
                  rows={4}
                  value={formValues.message}
                  onChange={handleInputChange}
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
                {/* Success Message */}
                {successMessage && (
                  <Typography
                    sx={{
                      marginTop: "15px",
                      color: "#54acdf",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {successMessage}
                  </Typography>
                )}
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;
