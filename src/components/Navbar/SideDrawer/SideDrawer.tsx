import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { setSideDrawer } from "../../../store/actions/actions";
import { useAppDispatch } from "../../../store/hooks/hooks";
import BetSlip from '../../BetSystem/BetSlip/BetSlip';

export default function SideDrawer() {
  
  const dispatch = useAppDispatch();

  const handleCloseDrawer = () => {
    dispatch(setSideDrawer(false))
  }

  return (
      <Box className={`side-drawer animate__animated animate__fadeInRight animate__faster`} data-testid="box-drawer-id" 
        sx={(theme) => ({
          [theme.breakpoints.between('xs','md')]: {
            visibility: "visible",
            height: "100%",
            background: "white",
            position: "fixed",
            top: 0,
            right: 0,
            width: "80vw",
            zIndex: 200,
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          },
          visibility: "hidden",
          position: "absolute",
          display:"none",
        })}
      >
        <IconButton data-testid="icon-button-element" aria-label="delete" color="primary" onClick={handleCloseDrawer} sx={{alignSelf: "flex-end"}}>
          <CloseIcon />
        </IconButton>
        <BetSlip />
      </Box>
  );
}