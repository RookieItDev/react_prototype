import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
//   SidebarFooter,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Badge } from "@mui/material";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeRounded";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuRounded";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TableViewIcon from '@mui/icons-material/TableView';
import Logo from '../assets/logo-white.png'
import { height, width } from "@mui/system";
import { withTheme } from "@emotion/react";

const SideBar = () => {
  const [isCollapsed, setisCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
  const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        color: "white"
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        backgroundColor="#132644"
        // image={Background} Background Sidebar
        breakPoint="md"
        style={{ height: "100%" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%"  }}
        >
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu iconShape="square">
              {/* LOGO */}
              <MenuItem
                onClick={() => setisCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon style={{color:"white"}} /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  backgroundColor:"#132644",
                  color:"white"
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
              <img src={Logo} style={{height:40,width:140}} alt="" />

                    <Typography></Typography>
                      <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon style={{color:"white"}} />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
    
              <Link to="/admin" className="menu-bars">
                <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<HomeOutlinedIcon/>}>Dashboard</MenuItem>
              </Link>

              <SubMenu icon={<MapOutlinedIcon />} style={{backgroundColor:"#132644",color:"white"}}  label="Data">
                <Link to={"/admin/viewtable"} className="menu-bars">
                  <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<TableViewIcon />}>
                    {" "}
                    Table 
                  </MenuItem>
                </Link>
                <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<BarChartOutlinedIcon />}>
                  {" "}
                  Line charts
                </MenuItem>
              </SubMenu>
              <SubMenu icon={<MapOutlinedIcon />} style={{backgroundColor:"#132644",color:"white"}}  label="Task">
                <Link to={"/admin/viewtable"} className="menu-bars">
                  <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<TableViewIcon />}>
                    {" "}
                    Table 
                  </MenuItem>
                </Link>
                <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<BarChartOutlinedIcon />}>
                  {" "}
                  Line charts
                </MenuItem>
              </SubMenu>
              <SubMenu icon={<MapOutlinedIcon />} style={{backgroundColor:"#132644",color:"white"}}  label="Report">
                <Link to={"/admin/viewtable"} className="menu-bars">
                  <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<TableViewIcon />}>
                    {" "}
                    Table 
                  </MenuItem>
                </Link>
                <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<BarChartOutlinedIcon />}>
                  {" "}
                  Line charts
                </MenuItem>
              </SubMenu>

             

             
            
            </Menu>
            {/* <SubMenu label="Data" >
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </SubMenu> */}
            <div
              style={{
                padding: "0 24px",
                marginBottom: "8px",
                marginTop: "32px",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                style={{
                  opacity: isCollapsed ? 0 : 0.5,
                  letterSpacing: "0.5px",
                }}
              >
                Extra
              </Typography>
            </div>

            <Menu >
              <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
              <MenuItem style={{backgroundColor:"#132644",color:"white"}} icon={<ReceiptOutlinedIcon />}>Documentation</MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
      <main>
        <div style={{ padding: "16px 2px ", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken && (
              <IconButton onClick={() => setToggled(!toggled)}>
                <MenuOutlinedIcon />
              </IconButton>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default SideBar;