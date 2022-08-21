import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>my bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="product" />
        <ListItemText primary="Contact Us" />

        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
      
    </AppbarContainer>
  );
}
