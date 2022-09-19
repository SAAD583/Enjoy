import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link';

export default function Profile() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button  style={{backgroundColor: "inherit", color: "#000", boxShadow: "none",
                        textTransform: "capitalize", padding: "5px"}}
                   variant="contained" {...bindTrigger(popupState)}>
            Profile
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close} >
                <Link href="/wishlist">
                    <a style={{color: "#999",textDecoration: "none"}}>
                        wishlist
                    </a>
                </Link>
                </MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}