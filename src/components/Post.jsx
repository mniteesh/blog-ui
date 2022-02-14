import {
    Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core";

export const useClasses = makeStyles((theme) => ({
    card:{
        marginBottom:theme.spacing(5),
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150,
        }
    }
}));

const Post = ({item}) => {
  const classes = useClasses();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.profilePicture}
          title="MyPost"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{item.username}</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
