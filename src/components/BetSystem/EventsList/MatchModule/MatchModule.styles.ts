import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({

  boxTitleBet:{
    border: "0.125rem #183862",
    borderTopLeftRadius: "0.8rem",
    borderTopRightRadius: "0.8rem",
    borderStyle: "solid",
    padding: "1rem",
    fontSize: "0.875rem !important",
    fontWeight: "bold",
    backgroundColor: "#183862",
    color: "white",
  },

  boxBet:{
    borderRight: "0.125rem #5875AA solid",
    borderLeft: "0.125rem #5875AA solid",
    borderBottom: "0.125rem #5875AA solid !important",
    borderStyle: "solid",
    borderTop: "0",
    padding: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    backgroundColor: "#E5F0FC",
    fontFamily: "sans-serif",
    fontSize: "0.75rem !important",
    textAlign: "left",
    color: "#5875AA",
  },

  buttonBet:{
    fontSize: "0.625rem !important",
  }
}));
