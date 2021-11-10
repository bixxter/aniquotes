import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getAnimePoster } from "../../services/quote.service";
import useStyles from "../../components/Quotes/Quote.style";
import Loader from "../../components/Layout/Loader";

interface Props {}

const Anime = (props: Props) => {
  const classes = useStyles();
  const { anime } = useParams();
  const [animeData, setAnimeData] = useState<any>();
  console.log(animeData);
  useEffect(() => {
    getAnimePoster(anime)
      .then((res) => {
        setAnimeData(res.data[0].attributes);
      })
      .catch((err) => console.log(err));
  }, []);
  if (animeData) {
    return (
      <Grid item xs={12}>
        <Link to="/">
          <Button sx={{ color: "text.primary" }}>👈🏻 Back to quotes</Button>
        </Link>
        <Grid columnSpacing={1} container>
          <Grid sm={12} md={3} item>
            <img
              className={classes.cardImg}
              src={animeData.posterImage.large}
              alt={anime}
            />
          </Grid>
          <Grid
            sm={12}
            md={9}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" color="text.primary">
              {anime} ({animeData.titles.ja_jp})
            </Typography>
            <Box>
              <Typography variant="body2" component="p" color="text.secondary">
                <Typography
                  variant="body1"
                  component="span"
                  color="text.primary"
                >
                  Synopsis:
                </Typography>
                {animeData.synopsis}
              </Typography>
              <Typography variant="body2" component="p" color="text.secondary">
                <Typography
                  variant="body2"
                  component="span"
                  color="text.primary"
                >
                  Episodes:
                </Typography>
                {animeData.episodeCount}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <Loader />;
  }
};

export default Anime;
