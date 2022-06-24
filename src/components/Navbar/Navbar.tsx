import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer/SideDrawer';
import { useSelector } from 'react-redux';
import { selectOpenState } from '../../store/selectors/selectors';
import { setSideDrawer } from '../../store/actions/actions';
import { useAppDispatch } from '../../store/hooks/hooks';
import Backdrop from './Backdrop/Backdrop';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));


export default function Navbar() {
    const dispatch = useAppDispatch();
    const sideDrawerState = useSelector(selectOpenState)
    const handleOpenDrawer = () => {
        dispatch(setSideDrawer(true))
    };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{borderBottom: "0.125rem", boxShadow: 3, backgroundColor: "#183862", position: "fixed", zIndex: "1"}}>
            <StyledToolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1,fontStyle: 'oblique' }}
                >
                    Tranzact <b>Bet System</b>
                </Typography>
                <IconButton
                    data-testid="toogle-icon-button"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={(theme) => ({
                        [theme.breakpoints.between('xs','md')]: {
                            visibility: "visible",
                            position: "relative"

                        },
                        visibility: "hidden",
                        position: "absolute"
                    })}
                    onClick={handleOpenDrawer}
                >
                    <MenuIcon />
                </IconButton>          
            </StyledToolbar>
        </AppBar>
        {sideDrawerState && (<SideDrawer/>)}
        {sideDrawerState && (<Backdrop/>)}
      </Box>
    );
}
