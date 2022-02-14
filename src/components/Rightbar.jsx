import { Container, Typography } from "@material-ui/core";
import { Avatar, AvatarGroup, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Posts } from "../dummyData";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{marginBottom:20}}>
        <Avatar alt="Remy Sharp" src="/assests/person/1.jpeg" />
        <Avatar alt="Travis Howard" src="/assests/person/2.jpeg" />
        <Avatar alt="Cindy Baker" src="/assests/person/3.jpeg" />
        <Avatar alt="Agnes Walker" src="/assests/person/4.jpeg" />
        <Avatar alt="Trevor Henderson" src="/assests/person/5.jpeg" />
        <Avatar alt="Trevor Henderson" src="/assests/person/6.jpeg" />
        <Avatar alt="Trevor Henderson" src="/assests/person/7.jpeg" />
        <Avatar alt="Trevor Henderson" src="/assests/person/8.jpeg" />
        <Avatar alt="Trevor Henderson" src="/assests/person/9.jpeg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>

      <ImageList cols={3} rowHeight={100}>
        {Posts.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.photo}
              alt={item.desc}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Rightbar;
