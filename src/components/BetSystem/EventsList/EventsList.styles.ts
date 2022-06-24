import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  betFrame:{
    "&::-webkit-scrollbar": {
      backgroundColor: "transparent",
      borderRadius: "0.5rem",
      margin: "1.875rem",
      padding: "1.25rem",
      height: "0.625rem",
      width: "0.5rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "gray",
      borderRadius: "0.5rem",
      margin: "1.875rem",
      padding: "1.25rem",
    },
    maxHeight: "100vh",
    height: "100%",
    padding: "1rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    overflowY: "scroll",
    textAlign: "center",
  },

  frame:{
    "&::-webkit-scrollbar": {
      backgroundColor: "#CBD5E0",
      borderRadius: "0.5rem",
      borderRight: "0.063rem solid #ced4da",

      margin: "1.875rem",
      padding: "1.25rem",
      height: "0.625rem",
      width: "0.5rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#98A8B8",
      borderRadius: "0.5rem",
      margin: "1.875rem",
      padding: "1.25rem",
    },
    border: "0.25rem #183862",
    borderStyle: "solid",
    borderRadius: "0.375rem",
    maxHeight: "100vh",
    height: "100%",
    padding: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    overflowY: "scroll",
    backgroundColor: "#E5F0FC",
  },
  title: {
    color: "#183862",
    fontSize: "2rem !important",
    marginTop: "0.625rem !important",
    marginBottom: "1.125rem !important",
    textAlign: "left",
  },
  description: {
    color: theme.palette.grey.A400,
    display: "block",
  },
}));
