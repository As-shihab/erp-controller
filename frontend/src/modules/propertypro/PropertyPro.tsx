import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import { Link, Outlet } from "react-router-dom";
import GridTable from "../../components/anaylitcaltable/analyticaltable";

function PropertyPro() {
  const navItems = [
    { icon: "home", text: "Dashboard", selected: true },
    {
      icon: "group",
      text: "People",
      expanded: true,
      subItems: [{ text: "Type list" }, { text: "From Other Teams" }],
    },
    { icon: "locate-me", text: "Locations" },
    {
      icon: "calendar",
      text: "Events",
      subItems: [{ text: "Local" }, { text: "Others" }],
    },
  ];

  return (
    <div className="grid grid-cols-7">
      <div className="h-[95vh]  shadow-sm m-2 ">
        <SideNavigation className="rounded-lg">
          {navItems.map((item, index) => (
            <SideNavigationItem
              key={index}
              icon={item.icon}
              text={item.text}
              selected={item.selected || false}
              expanded={item.expanded || false}
            >
              {item.subItems &&
                item.subItems.map((subItem, subIndex) => (
                  <Link to="type">
                    <SideNavigationSubItem key={subIndex} text={subItem.text} />
                  </Link>
                ))}
            </SideNavigationItem>
          ))}
        </SideNavigation>
      </div>

      <div className="col-span-6">
        <GridTable/>
      </div>
    </div>

  );
}

export default PropertyPro;
