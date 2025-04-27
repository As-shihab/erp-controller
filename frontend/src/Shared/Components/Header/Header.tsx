import {
  ShellBar,
  ListItemStandard,
  Avatar,
  Input,
  Icon,
  ShellBarItem,
  UserMenu,
  UserMenuAccount,
  UserMenuItem,
} from "@ui5/webcomponents-react";

import Logo from "../../../../public/control.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const Navigate = () => {
    alert();
    navigate("/");
  };
  return (
    <>
      <ShellBar
        className="my-2"
        logo={<img onClick={Navigate} alt="SAP Logo" src={Logo} />}
        menuItems={
          <>
            <ListItemStandard
              onClick={() => {
                localStorage.setItem("UserTheme", "sap_horizon_dark");
                location.reload();
              }}
              selected
              data-key="sap_horizon_dark"
            >
              sap_horizon_dark
            </ListItemStandard>
            <ListItemStandard
              onClick={() => {
                localStorage.setItem("UserTheme", "sap_horizon_hcb");
                location.reload();
              }}
              data-key="sap_belize"
            >
              sap_belize
            </ListItemStandard >
            <ListItemStandard onClick={()=>{localStorage.removeItem("UserTheme"); location.reload()}} data-key="sap_belize_plus">
              Menu Item 3
            </ListItemStandard>
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
        primaryTitle="Themes"
        profile={
          <Avatar>
            <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
          </Avatar>
        }
        secondaryTitle="Control panel | shihab"
        showNotifications
        showProductSwitch
      >
        <ShellBarItem count="3" icon="add" text="ShellBarItem" />
      </ShellBar>

      <UserMenu open={true}>hello</UserMenu>
    </>
  );
}
