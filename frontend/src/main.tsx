import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react"; // Import useState
import "./index.css";
import App from "./App.tsx";

import "@ui5/webcomponents/dist/Assets.js";
import Login from "./Auth/Login/Login.tsx";
import { Http } from "./Http/Http.ts";

export class Auth {
  constructor(private http: Http) {}

  SyncUser() {
    this.http
      .get("User", false)
      .then((result: any) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
}

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const UserToken = localStorage.getItem("UserToken");

  useEffect(() => {
    const auth = new Auth(new Http());
    if (UserToken) {
      setIsLoggedIn(true);
    } else {
      auth.SyncUser();
    }
  }, [UserToken]);

  return <>{isLoggedIn ? <App /> : <Login />}</>;
}

createRoot(document.getElementById("root")!).render(<Root />);
