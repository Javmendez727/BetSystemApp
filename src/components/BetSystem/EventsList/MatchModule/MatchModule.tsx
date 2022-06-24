/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setAddItemBetList, setRemoveItemBetList } from "../../../../store/actions/actions";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import { selectBetList } from "../../../../store/selectors/selectors";
import { EventType } from "../../../../types/get_events_data_response";
import { useStyles } from "./MatchModule.styles";

export interface IMatchModuleProps {
    matchInfo: EventType 
}

const MatchModule: React.FC<IMatchModuleProps> = (
  props: IMatchModuleProps  
) => {
    const dispatch = useAppDispatch();
    const betsList = useSelector(selectBetList);
    const classes = useStyles();
    const validateToWinSection = props.matchInfo.markets.some((element) => element.name === "Team to Win")
    const firstMarketOptions = props.matchInfo.markets.filter((el)=>el.name === "Team to Win")
        .map((el)=>el.selections)
    const firstArrayMarket = firstMarketOptions.reduce((arr) => {
        return arr.concat(firstMarketOptions[0]);
    }, [])
    const validateToScoreFirst = props.matchInfo.markets.some((element) => element.name === "Player to Score First")
    const secondMarketOptions = props.matchInfo.markets.filter((el)=>el.name === "Player to Score First")
        .map((el)=>el.selections)
    const secondArrayMarket = secondMarketOptions.reduce((arr) => {
        return arr.concat(secondMarketOptions[0]);
    }, [])

    const validateLocalFlag = betsList.some((element) => element.id === firstArrayMarket[0]?.id)
    const validateVisitFlag = betsList.some((element) => element.id === firstArrayMarket[1]?.id)
    const validateFirstScorerFlag = betsList.some((element) => element.id === secondArrayMarket[0]?.id)
    const validateMiddleScorerFlag = betsList.some((element) => element.id === secondArrayMarket[1]?.id)
    const validateEndScorerFlag = betsList.some((element) => element.id === secondArrayMarket[2]?.id)

    const [localFlag, setLocalFlag] = useState(false);
    const [visitFlag, setVisitFlag] = useState(false);
    const [firstFlag, setFirstScorer] = useState(false);
    const [middleFlag, setMiddleScorer] = useState(false);
    const [finalFlag, setFinalScorer] = useState(false);

    useEffect( ()=> {
        if(secondArrayMarket.length === 0) return
        if(validateFirstScorerFlag){
            setFirstScorer(!firstFlag);
            setMiddleScorer(false);
            setFinalScorer(false);
        }
        if(validateMiddleScorerFlag){
            setMiddleScorer(!middleFlag);
            setFirstScorer(false);
            setFinalScorer(false);
        }
        if(validateEndScorerFlag){
            setFinalScorer(!finalFlag);
            setMiddleScorer(false);
            setFirstScorer(false);
        }
    }, [])

    useEffect(()=>{
        if(firstArrayMarket.length === 0) return
        if(validateLocalFlag){
            setLocalFlag(!localFlag);
            setVisitFlag(false);
        }
        if(validateVisitFlag){
            setVisitFlag(!visitFlag);
            setLocalFlag(false);
        }
    }, [])

    const onClickLocal = () => {
        if(validateLocalFlag) {
            return dispatch(setRemoveItemBetList(firstArrayMarket[0]))
        }
        dispatch(setAddItemBetList({...firstArrayMarket[0], marketType: 1 }))
        dispatch(setRemoveItemBetList(firstArrayMarket[1]))
    };

    const onClickVisit = () => {
        if(validateVisitFlag) {
            return dispatch(setRemoveItemBetList(firstArrayMarket[1]))
        }
        dispatch(setAddItemBetList({...firstArrayMarket[1], marketType: 1 }))
        dispatch(setRemoveItemBetList(firstArrayMarket[0]))
    };

    const onClickFirstScorer = () => {
        if(validateFirstScorerFlag) {
            return dispatch(setRemoveItemBetList(secondArrayMarket[0]))
        }
        dispatch(setAddItemBetList({...secondArrayMarket[0], marketType: 2 }))
        dispatch(setRemoveItemBetList(secondArrayMarket[1]))
        dispatch(setRemoveItemBetList(secondArrayMarket[2]))
    };

    const onClickMiddleScorer = () => {
        if(validateMiddleScorerFlag) {
            return dispatch(setRemoveItemBetList(secondArrayMarket[1]))
        }
        dispatch(setAddItemBetList({...secondArrayMarket[1], marketType: 2 }))
        dispatch(setRemoveItemBetList(secondArrayMarket[0]))
        dispatch(setRemoveItemBetList(secondArrayMarket[2]))
    };

    const onClickFinalScorer = () => {
        if(validateEndScorerFlag) {
            return dispatch(setRemoveItemBetList(secondArrayMarket[2]))
        }
        dispatch(setAddItemBetList({...secondArrayMarket[2], marketType: 2 }))
        dispatch(setRemoveItemBetList(secondArrayMarket[0]))
        dispatch(setRemoveItemBetList(secondArrayMarket[1]))
    };
    return (
        <Box sx={{paddingTop: "0.75rem", paddingBottom: "0.75rem"}} data-testid="container-match-id">
            <Box className={classes.boxTitleBet}>
                {props.matchInfo.name}
            </Box>

            {validateToWinSection && (
            <Box className={classes.boxBet}>
                To WIN
                <Box 
                    sx={(theme) => ({
                        [theme.breakpoints.down(400)]: {
                            flexDirection: "column",
                        },
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.75rem !important",
                        flexWrap: "wrap",
                        marginTop: "0.5rem",
                    })}
                >
                    <Button
                        data-testid="local-button-id"
                        size="small"
                        onClick={onClickLocal}
                        variant="contained"
                        color={validateLocalFlag ? "success" : "primary"}
                        sx={{marginTop: "0.25rem", marginBottom: "0.25rem"}}
                    >
                        {firstArrayMarket[0].name}<br/>
                        {firstArrayMarket[0].price}
                    </Button>
                    <Button
                        data-testid="visit-button-id"
                        size="small"
                        onClick={onClickVisit}
                        variant="contained"
                        color={validateVisitFlag ? "success" : "primary"}
                        sx={{marginTop: "0.25rem", marginBottom: "0.25rem"}}
                    >
                        {firstArrayMarket[1].name}<br/>
                        {firstArrayMarket[1].price}
                    </Button>        
                </Box>
            </Box>
            )}
        
            {validateToScoreFirst && (
            <Box className={classes.boxBet}>
                To Score First
                <Box 
                    sx={(theme) => ({
                        [theme.breakpoints.down(400)]: {
                            flexDirection: "column",
                        },
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        marginTop: "0.5rem",
                    })}
                >
                    <Button
                        data-testid="first-button-id"
                        size="small"
                        onClick={onClickFirstScorer}
                        variant="contained"
                        color={validateFirstScorerFlag ? "success" : "primary"}
                        className={classes.buttonBet}
                        sx={{marginTop: "0.25rem", marginBottom: "0.25rem"}}
                    >
                        {secondArrayMarket[0].name}<br/>
                        {secondArrayMarket[0].price}
                    </Button>
                    <Button
                        data-testid="middle-button-id"
                        size="small"
                        onClick={onClickMiddleScorer}
                        variant="contained"
                        color={validateMiddleScorerFlag ? "success" : "primary"}
                        className={classes.buttonBet}
                        sx={{marginTop: "0.25rem", marginBottom: "0.25rem"}}
                    >
                        {secondArrayMarket[1].name}<br/>
                        {secondArrayMarket[1].price}
                    </Button>
                    <Button
                        data-testid="last-button-id"
                        size="small"
                        onClick={onClickFinalScorer}
                        variant="contained"
                        color={validateEndScorerFlag ? "success" : "primary"}
                        className={classes.buttonBet}
                        sx={{marginTop: "0.25rem", marginBottom: "0.25rem"}}
                    >
                        {secondArrayMarket[2].name}<br/>
                        {secondArrayMarket[2].price}
                    </Button>                
                </Box>
            </Box>
            )}
        </Box>
    );
};

export default MatchModule;