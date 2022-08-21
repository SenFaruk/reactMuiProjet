import React, { useEffect } from "react";
import { Button, Container, } from "@mui/material";

import { ThemeProvider } from '@mui/material/styles';
import theme from "./styles/theme";
import Appbar from "./components/appbar";

const App = () => {
  useEffect(() => {
    document.title = "react mui-Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          background: "#fff",
        }}
        maxWidth="xl"
      >
        <Appbar />
        <Button variant="contained" color="primary">
          text
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
