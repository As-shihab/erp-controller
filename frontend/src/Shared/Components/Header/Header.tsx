import {
  ShellBar,
  ListItemStandard,
  Avatar,
  Input,
  Icon,
  ShellBarItem,
} from "@ui5/webcomponents-react";
import Logo from "../../../../public/control.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const Navigate = () => {
    alert()
    navigate("/");
  };
  return (
    <>
      <ShellBar
        logo={<img onClick={Navigate} alt="SAP Logo" src={Logo} />}
        menuItems={
          <>
            <ListItemStandard data-key="1">Menu Item 1</ListItemStandard>
            <ListItemStandard data-key="2">Menu Item 2</ListItemStandard>
            <ListItemStandard data-key="3">Menu Item 3</ListItemStandard>
          </>
        }
        notificationsCount="10"
        onContentItemVisibilityChange={function Xs() {}}
        onLogoClick={function Xs() {}}
        onMenuItemClick={function Xs() {}}
        onNotificationsClick={function Xs() {}}
        onProductSwitchClick={function Xs() {}}
        onProfileClick={function Xs() {}}
        onSearchButtonClick={function Xs() {}}
        primaryTitle="Shell Bar"
        profile={
          <Avatar>
            <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
          </Avatar>
        }
        searchField={<Input icon={<Icon name="search" />} showClearIcon />}
        secondaryTitle="Control panel | shihab"
        showNotifications
        showProductSwitch
      >
        <ShellBarItem count="3" icon="add" text="ShellBarItem" />
      </ShellBar>
    </>
  );
}
