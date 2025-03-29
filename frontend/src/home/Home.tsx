import {
  Bar,
  Button,
  Card,
  CardHeader,
  Icon,
  Input,
  Title,
  Toolbar,
} from "@ui5/webcomponents-react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    

 

      <div className="px-4">
        <Link to="/propertypro">
          <Card
            header={
              <CardHeader
                avatar={<Icon name="person-placeholder" />}
                subtitleText="PropertyPro"
                titleText="TeamSpace"
              />
            }
            style={{
              width: "300px",
            }}
          >
            <Toolbar design="Transparent" slot="footer">
              <Icon name="add" slot="end" />
            </Toolbar>
          </Card>
        </Link>
      </div>
    </>
  );
}
