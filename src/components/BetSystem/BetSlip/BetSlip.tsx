import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { setRemoveItemBetList } from "../../../store/actions/actions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { selectBetList } from "../../../store/selectors/selectors";
import { SelectionType } from "../../../types/get_events_data_response";
import { useStyles } from "../EventsList/EventsList.styles";

const BetSlip = () => {
    const dispatch = useAppDispatch();
    const betList = useAppSelector(selectBetList);
    const classes = useStyles();

    const onClickDeleteItem = (element: SelectionType) => {
        dispatch(setRemoveItemBetList(element))
    };

    let voucherBets = betList.map((element, index) => (
        <Box key={index}>
            <Typography variant="h5" sx={{fontWeight: "bold"}}>
                { element.marketType === 1 ? 
                    `${element.name} to WIN`:
                    `${element.name} to Score First`
                }
            </Typography>
            <Typography variant="h5" sx={{color: "gray"}}>
                {`${element.price}`}
            </Typography>
            <Button
                data-testid = "delete-button-id"
                size="small"
                onClick={() => onClickDeleteItem(element)}
                variant="contained"
                color="info"
                sx={{marginTop: "1.5rem"}}
                >
                    Delete
            </Button>
            <Divider variant="middle" sx={{marginBottom: "2.5rem",marginTop: "1.5rem", color: "#041424", borderColor: "darkslategray"}}/>
        </Box>
    )); 
    return (
        <Box>
            <Box className={classes.betFrame}>
                {betList.length > 0 ? voucherBets : "There's no bets selected" }
            </Box>
        </Box>
    );
};

export default BetSlip;