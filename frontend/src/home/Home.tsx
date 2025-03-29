import {
  Card,
  CardHeader,
  Icon,
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
