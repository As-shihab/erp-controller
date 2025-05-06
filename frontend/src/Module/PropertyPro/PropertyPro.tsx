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
      {/* <div className="relative  h-[calc(100vh-52px)]">
        <NavigationLayout
          mode="Expanded"
          className="gap-3"
          style={{ margin: "12px", gap: "12px", borderRadius: "12px" }}
          sideContent={
            <SideNavigation
              onSelectionChange={(e) => {
                const selectedKey = e.detail.item.dataset.key;
                navigate(selectedKey ? selectedKey : "/");
              }}
              slot="sideContent"
              className="rounded-2xl "
            >
              <SideNavigationItem
                icon="Chart-Tree-Map"
                text="OverView"
                data-key="/"
              />

              <SideNavigationGroup expanded text="Group 2">
                <SideNavigationItem
                  data-key="location-types"
                  icon="history"
                  text="Item 4"
                />

                <SideNavigationItem icon="source-code" text="Item 5" />
                <SideNavigationItem icon="background" text="Item 6" />
              </SideNavigationGroup>

              <SideNavigationItem
                expanded
                icon="group"
                text="People"
                slot="fixedItems"
              >
                <SideNavigationSubItem icon="group" text="From My Team" />
                <SideNavigationSubItem text="From Other Teams" />
              </SideNavigationItem>
              <SideNavigationItem
                href="https://www.sap.com/about/legal/impressum.html"
                icon="compare"
                slot="fixedItems"
                target="_blank"
                text="Legal"
              />
              <SideNavigationItem
                href="https://www.sap.com/about/legal/privacy.html"
                icon="locked"
                slot="fixedItems"
                target="_blank"
                text="Privacy"
              />
              <SideNavigationItem
                href="https://www.sap.com/terms-of-use"
                icon="document-text"
                slot="fixedItems"
                target="_blank"
                text="Terms of Use"
              />
            </SideNavigation>
          }
        >
          <div className=" px-3 bg-transparent h-[90vh]  rounded-lg shadow-lg">
            <Card className="h-[90vh]">
              <Outlet />
            </Card>
          </div>
        </NavigationLayout>
      </div> */}

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
        className="h-full"
   
  fixedItems={<><SideNavigationItem href="https://www.sap.com/index.html" icon="chain-link" target="_blank" text="External Link"/><SideNavigationItem icon="history" text="History"/></>}
  onSelectionChange={function Xs(){}}
>
  <SideNavigationItem
    icon="home"
    text="Home"
  />
  <SideNavigationItem
    expanded
    icon="group"
    text="People"
  >
    <SideNavigationSubItem text="From My Team" />
    <SideNavigationSubItem text="From Other Teams" />
  </SideNavigationItem>
  <SideNavigationItem
    icon="locate-me"
    selected
    text="Locations"
  />
  <SideNavigationItem
    icon="calendar"
    text="Events"
  >
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
