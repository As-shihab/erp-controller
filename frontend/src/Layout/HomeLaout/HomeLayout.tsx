// import { Bar, Card, CardHeader, Icon, Title, Toolbar } from "@ui5/webcomponents-react";
import { Bar, Toolbar, Title, Card } from "@ui5/webcomponents-react";
import { Link } from "react-router-dom";
export default function HomeLayout() {
  return (
    <>
      <div className="grid gap-3 mt-4 grid-cols-5">
           <Link to="/base-data">
        <Card data-key="/propertypro">
          <div className="card rounded-sm shadow-sm ">
            <Bar
              design="Header"
              endContent={<span>Base data</span>}
              startContent={<span>Base data management</span>}
            ></Bar>

            <Toolbar slot="footer">
              <Title>Footer</Title>
            </Toolbar>
          </div>
        </Card></Link>

    <Link to="/propertypro">
        <Card  data-key="/propertypro">
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
        </Card></Link>


       
      </div>
    </>
  );
}
