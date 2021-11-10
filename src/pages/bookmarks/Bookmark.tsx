import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookmarkUi from "../../components/Bookmarks/BookmarkUi";
import Loader from "../../components/Layout/Loader";

interface Props {}
type Quote = {
  anime: "";
  quote: "";
  character: "";
  poster: [];
};
const Bookmark = (props: Props) => {
  const dispatch = useDispatch();
  const [bookmarks, setBookmarks] = useState<[]>();
  useEffect(() => {
    dispatch({ type: "GET_BOOKMARKS_REQUEST" });
  }, []);
  const data = useSelector((state: RootStateOrAny) => {
    return state.bookmarks;
  });
  useEffect(() => {
    setBookmarks(data && data.bookmarks);
  }, [data]);

  if (bookmarks && !data.loading) {
    return (
      <>
        <Link to="/">
          <Button sx={{ color: "text.primary" }}>👈🏻 Back to quotes</Button>
        </Link>
        <Typography variant="h4">📕Your bookmarks:</Typography>
        {data &&
          data.bookmarks.map((quote: Quote, i: number) => {
            return <BookmarkUi quote={quote} key={i} />;
          })}
      </>
    );
  } else {
    return <Loader />;
  }
};

export default Bookmark;
