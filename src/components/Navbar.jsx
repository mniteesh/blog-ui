import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
import { useStyles } from "../styles/useStyles";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          My Blog
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          BLOG
        </Typography>
        <div className={classes.search}>
          <Search   />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
        </div>
        <div className={classes.icons}>
        <Search className={classes.searchButton} onClick={()=>setOpen(true)}  />   
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/assests/person/1.jpeg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
