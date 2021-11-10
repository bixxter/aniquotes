import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../components/Quotes/Quote.style";

interface Props {
  data: any;
  enhance?: boolean;
  poster?: any;
}

const QuotesUI = (props: Props) => {
  const { data, enhance, poster } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography variant="h5" component="h1">
        Random Anime Quote
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Grid columnSpacing={1} container>
            <Grid sm={12} md={3} item>
              <img
                className={classes.cardImg}
                src={enhance ? poster?.large : poster?.medium}
                alt={data && data.quotes && data.quotes.anime}
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
              <Link
                className={classes.link}
                to={`/anime/${data && data.quotes && data.quotes.anime}`}
              >
                <Typography variant="h5" color="primary">
                  {data.loading ? (
                    <Skeleton />
                  ) : (
                    data && data.quotes && data.quotes.anime
                  )}
                </Typography>
              </Link>

              <Typography
                className={classes.quoteText}
                variant="h6"
                component="p"
                color="secondary"
                sx={{ padding: { md: 5, sx: 0 } }}
              >
                {data.loading ? (
                  <Skeleton />
                ) : (
                  `"${data && data.quotes && data.quotes.quote}"`
                )}
              </Typography>
              <Typography variant="h6" component="span" color="secondary">
                {data.loading ? (
                  <Skeleton />
                ) : (
                  `~${data && data.quotes && data.quotes.character}`
                )}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default QuotesUI;
