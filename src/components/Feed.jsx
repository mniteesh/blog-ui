import { Container } from "@material-ui/core";
import React from "react";
import Post from "./Post";
import { makeStyles } from "@material-ui/core";
import { Users } from "../dummyData";

export const useStyles = makeStyles((theme) => ({
  feed: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.feed}>
      {Users.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Feed;
