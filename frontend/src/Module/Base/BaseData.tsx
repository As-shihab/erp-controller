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
export default function BaseData() {
    const navigate = useNavigate();
  return (
    <>
      <div className="relative  h-[calc(100vh-60px)]">
        <NavigationLayout
          mode="Expanded"
           style={{margin:'12px', gap:'12px', borderRadius:'12px'}}
        
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
          
             
            </SideNavigation>
          }
        >
          <div className="  h-full  rounded-lg shadow-lg">
           <Card className="h-[calc(100vh-89px)]">
             <Outlet />
           </Card>
          </div>
        </NavigationLayout>
      </div>
    </>
  );
}
