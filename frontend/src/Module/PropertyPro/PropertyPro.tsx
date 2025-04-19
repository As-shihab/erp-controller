import {
  NavigationLayout,
  SideNavigation,
  SideNavigationItem,
  SideNavigationGroup,
  Card,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents/dist/Assets.js";
import { Outlet, useNavigate } from "react-router-dom";
export default function PropertyPro() {
    const navigate = useNavigate();
  return (
    <>
      <div className="relative  h-[calc(100vh-52px)]">
        <NavigationLayout
          mode="Expanded"
          
        
          sideContent={
            <SideNavigation
              onSelectionChange={(e) => {
        const selectedKey = e.detail.item.dataset.key;
        navigate(selectedKey? selectedKey : '/');
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
                
                  <SideNavigationItem data-key="location-types" icon="history" text="Item 4" />
     
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
          <div className="  h-full  rounded-lg shadow-lg">
           <Card className="h-full">
             <Outlet />
           </Card>
          </div>
        </NavigationLayout>
      </div>
    </>
  );
}
