import { Box, Typography, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React, { useState } from "react";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = ()=>{
    setAccount("");
  }
  // --------------------------------------
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2 , marginRight : 30, fontWeight : "600", cursor : "pointer"}}>{account}</Typography>
      </Box>
      <Menu style={{marginTop : 15, marginLeft : -30}} anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem  style={{padding : "4px 20px 4px 20px" }} onClick={() => {handleClose(); logout();}}>
          <PowerSettingsNewIcon fontSize="small" color="primary" style={{marginRight : 10}}/>
          <Typography style={{fontSize : 14}}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
export default Profile;
