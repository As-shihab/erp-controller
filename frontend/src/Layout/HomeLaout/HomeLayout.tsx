// import { Bar, Card, CardHeader, Icon, Title, Toolbar } from "@ui5/webcomponents-react";
import { Bar, Toolbar, Title } from "@ui5/webcomponents-react";
import { Link } from "react-router-dom";
export default function HomeLayout() {
  return (
    <>
      <div className="grid gap-3  grid-cols-5">
        <Link to="/propertypro">
          <div className="card rounded-sm shadow-sm ">
            <Bar
              design="Header"
              endContent={<span>PropertyPro</span>}
              startContent={<span>Start Content</span>}
            ></Bar>

            <Toolbar slot="footer">
              <Title>Footer</Title>
            </Toolbar>
          </div>
        </Link>
      </div>
    </>
  );
}
