import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
//import img1  from "../images/personal-selection.jpeg";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Homepage() {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        defaultProps: {
          variant: "contained",
          fullWidth: "true",
        },
      },
    },
  });
  const Item = styled(Grid)({
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  });
  Item.defaultProps = {
    item: true,
    md: 4,
    xs: 6,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Grid sx={{ position: "relative" }}>
            <img
              id="titleImage"
              style={{
                width: "100%",
                marginBottom: "1%",
                display: "inline-block",
              }}
              src="../../images/model2.jpeg"
              alt="model picture"
            />
            <Typography
              id="titleText"
              fontSize="7vw"
              fontFamily="Montserrat"
              fontWeight="bold"
              color="primary"
              variant="h1"
              sx={{ position: "absolute", zIndex: 1, top: "20%", left: "5%" }}
            >
              Find the service <br /> that you need <br /> at e-Selection
            </Typography>
            <Button
              id="bookServiceButton"
              style={{
                position: "absolute",
                zIndex: 1,
                height: "7vh",
                textTransform: "none",
                fontFamily: "Montserrat",
                fontSize: "2.5vh",
                marginTop: "20px",
              }}
              href="#services"
            >
              Book a service
            </Button>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
export default Homepage;
