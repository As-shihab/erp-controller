import {
  NavigationLayout,
  SideNavigation,
  SideNavigationItem,
  SideNavigationGroup,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents/dist/Assets.js";
import { Outlet } from "react-router-dom";
export default function PropertyPro() {
  return (
    <>
      <div className="relative overflow-hidden h-[100vh]">
        <NavigationLayout
          mode="Expanded"
          sideContent={
            <SideNavigation
              onSelectionChange={function Xs() {}}
              slot="sideContent"
            >
              <SideNavigationItem icon="home" text="Home" />
              <SideNavigationGroup expanded text="Group 1">
                <SideNavigationItem expanded icon="locate-me" text="Item 1">
                  <SideNavigationSubItem text="Sub Item 1" />
                  <SideNavigationSubItem text="Sub Item 2" />
                </SideNavigationItem>
                <SideNavigationItem expanded icon="calendar" text="Item 2">
                  <SideNavigationSubItem text="Sub Item 3" />
                  <SideNavigationSubItem text="Sub Item 4" />
                </SideNavigationItem>
                <SideNavigationItem
                  expanded
                  icon="activity-assigned-to-goal"
                  text="Item 3"
                >
                  <SideNavigationSubItem text="Sub Item 5" />
                  <SideNavigationSubItem text="Sub Item 6" />
                </SideNavigationItem>
              </SideNavigationGroup>
              <SideNavigationGroup expanded text="Group 2">
                <SideNavigationItem icon="history" text="Item 4" />
                <SideNavigationItem icon="source-code" text="Item 5" />
                <SideNavigationItem icon="background" text="Item 6" />
              </SideNavigationGroup>
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
          <div>
            <Outlet />
          </div>
        </NavigationLayout>
      </div>
    </>
  );
}
