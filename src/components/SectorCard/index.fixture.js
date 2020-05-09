import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import data from "../../../public/data.json";
import SectorCard from "./index";

export default (
  <Container maxWidth="md">
    <Box display="flex" justifyContent="center" pt={5}>
      <SectorCard data={data[0]} />
    </Box>
  </Container>
);
