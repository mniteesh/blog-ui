import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]: {
           display: "none",
          },  
    }
}))