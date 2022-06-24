import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectEventsList } from "../../../store/selectors/selectors";

import { useStyles } from "./EventsList.styles";
import MatchModule from "./MatchModule/MatchModule";


const EventsList = () => {
  const classes = useStyles();

  const getEventsList = useSelector(selectEventsList);

  let eventsWithMarkets = getEventsList.filter((el) => el.markets.length > 0)

  let listEvents = eventsWithMarkets.map((element) => (
    <MatchModule key={element.id} matchInfo={element}/>
  )); 

  return (
    <Box>
      <Typography variant="h1" component="div" className={classes.title}>
        Matches Available
      </Typography>
      <Box className={classes.frame} data-testid="box-list-events">
        {listEvents}
      </Box>
    </Box>
  );
};

export default EventsList;