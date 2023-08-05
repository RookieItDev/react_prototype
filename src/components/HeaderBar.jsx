import react, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { bgcolor } from "@mui/system";

const HeaderBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      
    <Box display="flex" style={{backgroundColor:'white'}} justifyContent="space-between" p={1}>
      {/* search  */}
      <Box display="flex" borderRadius="3px" backgroundColor="#F5EFE7">
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>
      {/* icons */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon style={{color:"black"}} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon style={{color:"black"}} />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon style={{color:"black"}} onClick={handleMenu} />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="#" className="menu-bars">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <Link to="#" className="menu-bars">
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Link>
          </Menu>
        </IconButton>
      </Box>
    </Box>
  );
};

export default HeaderBar;