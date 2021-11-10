import { Container, Skeleton, Typography } from "@mui/material";
import React from "react";

interface Props {}

const Loader = (props: Props) => {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography component="div" variant="h1">
          <Skeleton />
        </Typography>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" variant="text" />
      </Container>
    </>
  );
};

export default Loader;
