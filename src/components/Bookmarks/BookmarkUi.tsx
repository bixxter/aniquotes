import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const BookmarkUi = (props: any) => {
  const { anime, quote, character, poster } = props.quote;

  return (
    <List
      sx={{
        width: "100%",
        // bgcolor: "background.paper"
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={anime && anime}
            src={poster && poster.small}
            sx={{ width: 64, height: 64 }}
          />
        </ListItemAvatar>

        <ListItemText
          sx={{ ml: 2 }}
          primary={
            <Typography color="text.primary">{anime && anime}</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {quote && quote}
              </Typography>
              <Typography component="span" variant="body2" color="text.primary">
                {`~${character && character}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </List>
  );
};

export default BookmarkUi;
