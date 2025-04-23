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
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }
}

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const UserToken = localStorage.getItem("User_Token");

  useEffect(() => {
    const auth = new Auth(new Http());
    const http = new Http();

    const checkAuth = async () => {
      if (UserToken) {
        const isAuthenticated = await http.IsAuthenticate();
  
        if (isAuthenticated) {
          console.log("Authenticated");
          setIsLoggedIn(true);
        }
      } else {
        auth.SyncUser();
      }
    };
    if (!isLoggedIn) {
      checkAuth();
    }
  }, [UserToken]);

  return <>{isLoggedIn ? <App /> : <Login />}</>;
}

createRoot(document.getElementById("root")!).render(<Root />);
