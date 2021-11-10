import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { getAnimePoster } from "../../services/quote.service";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import Loader from "../../components/Layout/Loader";
import QuotesUI from "../../components/Quotes/QuotesUI";

interface Props {}
type Poster = {
  medium?: "";
  large?: "";
};

const Quote = (props: Props) => {
  const [enhance, setEnhance] = useState<boolean>(false);
  const [poster, setPoster] = useState<Poster>();
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateOrAny) => {
    return state.store;
  });

  const getData = () => {
    dispatch({ type: "GET_QUOTES_REQUEST" });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getAnimePoster(data && data.quotes && data.quotes.anime)
      .then((res) => {
        setPoster(res.data[0].attributes.posterImage);
        return res.data;
      })
      .catch((err) => console.log(err));
  }, [data]);
  const addToTheBookmark = () => {
    let local = JSON.parse(localStorage.getItem("Bookmarks") || "[]");
    const quote = { ...(data && data.quotes), poster: poster };
    local.push(quote);
    localStorage.setItem("Bookmarks", JSON.stringify(local));
  };
  if (data && !data.loading) {
    return (
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <QuotesUI data={data && data} enhance={enhance} poster={poster} />
        <Grid item xs={12} container spacing={1}>
          <Grid md={4} xs={12} item>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                addToTheBookmark();
              }}
            >
              📕Add
            </Button>
          </Grid>
          <Grid md={4} xs={12} item>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                setEnhance(!enhance);
              }}
            >
              {enhance ? "🌑Reduce" : "🔮Enhance"}
            </Button>
          </Grid>
          <Grid md={4} xs={12} item>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                getData();
              }}
            >
              🍀next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <Loader />;
  }
};

export default Quote;
