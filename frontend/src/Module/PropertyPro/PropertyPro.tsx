import {
  NavigationLayout,
  SideNavigation,
  SideNavigationItem,
  SideNavigationGroup,
  Card,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents/dist/Assets.js";
import { Outlet, useNavigate } from "react-router-dom";
export default function PropertyPro() {
  const navigate = useNavigate();
  return (
    <>
    
      <div
        className="text-white flex justify-evenly overflow-hidden p-3 h-[calc(100vh-65px)]  "
        style={{
          margin: "8px",
          gap: "12px",
          borderRadius: "12px",
          padding: "7px",
        }}
      >
        <Card className="h-full w-auto">
          <SideNavigation
          collapsed={true}
            className="h-[calc(100vh-100px)]"
            fixedItems={
              <>
                <SideNavigationItem
                  href="https://www.sap.com/index.html"
                  icon="chain-link"
                  target="_blank"
                  text="External Link"
                />
                <SideNavigationItem icon="history" text="History" />
              </>
            }
            onSelectionChange={(e) => {
              const selectedKey = e.detail.item.dataset.key;
              navigate(selectedKey??"*");
            }}
          >
            <SideNavigationItem icon="home" text="Home" data-key="/propertypro" />
            <SideNavigationItem expanded icon="building" data-key="/propertypro"  text="Apartments">
              <SideNavigationSubItem text="From My Team" data-key="/propertypro/location-types" />
              <SideNavigationSubItem text="From Other Teams" />
            </SideNavigationItem>
            <SideNavigationItem icon="locate-me" selected text="Locations" />
            <SideNavigationItem icon="calendar" text="Events">
              <SideNavigationSubItem text="Local" />
              <SideNavigationSubItem text="Others" />
            </SideNavigationItem>
          </SideNavigation>
        </Card>

        <Card>
          <Outlet />
        </Card>
      </div>
    </>
  );
}
