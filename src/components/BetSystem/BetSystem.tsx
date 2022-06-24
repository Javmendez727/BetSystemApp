import { Box, BoxProps, Grid } from "@mui/material";
import React, { useEffect } from "react";
import EventsList from "./EventsList/EventsList";
import { useStyles } from "./BetSystem.styles";
import BetSlip from "./BetSlip/BetSlip";
import getEventData from "../../store/thunks/getEventsData";
import { useAppDispatch } from "../../store/hooks/hooks";


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        height: "100%",
        ...sx
      }}
      {...other}
    />
  );
}

const BetSystem = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect( ()=> {
    dispatch(getEventData());
  }, [dispatch]);


  return (
    <Box className={classes.betSystemBox}> 
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Item> <EventsList/> </Item>
        </Grid>
        <Grid 
          item md={6} xs={0} 
          sx={(theme) => ({
            [theme.breakpoints.between('xs','md')]: {
              visibility: "hidden",
              position: "absolute",
              display: "none"
            },
            visibility: "visible",
            position: "relative"
          })}
        >
          <Item> <BetSlip/> </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BetSystem;


