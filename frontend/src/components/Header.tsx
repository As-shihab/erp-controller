import { Bar, Button, Title } from "@ui5/webcomponents-react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Bar
      design="Header"
      endContent={
        <>
          <Link
            to="https://github.com/SAP/ui5-webcomponents-react"
            style={{ marginLeft: "6px" }}
            target="_blank"
          >
            <s />
          </Link>
        </>
      }
      startContent={
        <>
          <Button design="Transparent" icon="nav-back" />
          <img
            alt="logo"
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png"
            style={{ marginLeft: "6px", width: "120px" }}
          />
        </>
      }
    >
      <Title>Admin | Shihab</Title>
    </Bar>
  );
}
