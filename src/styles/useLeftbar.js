import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  containerLeft: {
    height: "100vh",
    color: "white",
    position:"sticky",
    top:0,
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
        backgroundColor:"white",
        color:"#555",
        border:"1px solid #ece7e7",
      },
  },

  icon:{
      marginRight:theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
       fontSize:"18px"
      },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    
    },
  },
  text:{
    fontWeight:"500",
    [theme.breakpoints.down("sm")]: {
        display:"none",
      },
  }
}));
