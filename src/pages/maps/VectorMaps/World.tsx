import React from "react";
import styled, { withTheme, ThemeProps } from "styled-components/macro";
import { VectorMap } from "react-jvectormap";

import { CardContent, Card as MuiCard, Typography, Theme } from "@mui/material";
import { spacing } from "@mui/system";

const MapContainer = styled.div`
  height: 300px;
`;

const Card = styled(MuiCard)(spacing);

function World(props: { theme: ThemeProps<Theme> & { palette: any } }) {
  const options = {
    map: "world_mill",
    regionStyle: {
      initial: {
        fill: props.theme.palette.secondary.main,
      },
    },
    backgroundColor: "transparent",
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    zoomOnScroll: false,
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          World Map
        </Typography>
        <MapContainer>
          <VectorMap {...options} />
        </MapContainer>
      </CardContent>
    </Card>
  );
}

export default withTheme(World);
