import React from "react";
import Overview from "./components/dashboard/overview";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW='container.xl' py={5}>
      <Overview />
    </Container>
  );
}

export default App;
