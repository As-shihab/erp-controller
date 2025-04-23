import { BusyIndicator } from "@ui5/webcomponents-react";
import "./Login.css"; // External CSS for animations
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { User } from "../../Shared/Model/User.model";
import { Http } from "../../Http/Http";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<{
    email: string;
    password: string;
    message: string;
  }>({
    email: "",
    password: "",
    message: "",
  });
  const user = new User();
  const http = new Http();

  const onLogin = async () => {
    setLoading(true);
    http
      .post("login", false, user)
      .then((res: any) => {
        console.log(res.data);
       localStorage.setItem('User_Token' , res.data.User_token);
      location.reload();
        closeAction();
      })
      .catch((err: any) => {
        setError({
          email: err.response.data.errors?.email?.[0] || "",
          password: err.response.data.errors?.password?.[0] || "",
          message: err.response.data?.message,
        });
        closeAction();
      });
  };
  const closeAction = () => {
    setLoading(false);
    user.email = "";
    user.password = "";
  
  };
  return (
    <div className="login-container login">
      <form className="login-box">
        <h2 className="flex items-center justify-center gap-3">
          <FaLock /> <b>Login</b>
        </h2>
        <p className={error.message ? `text-red-500 mb-4` : `subtext`}>
          {error.message ? (
            error.message
          ) : (
            <>
              My name is <strong>Shihab</strong> — this box is mine 🔐
            </>
          )}
        </p>

        <div className="input-group">
          <input
            type="email"
            readOnly={isLoading}
            defaultValue={user.email}
            onChange={(e) => {
              user.email = e.target.value;
            }}
            required
          />
          <label className={error.email ? `text-red-500` : `text-gray-50`}>
            {error.email ? error.email : "Email"}
          </label>
        </div>

        <div className="input-group">
          <input
            readOnly={isLoading}
            defaultValue={user.password}
            onChange={(e) => {
              user.password = e.target.value;
            }}
            type="password"
            required
          />
          <label className={error.password ? `text-red-500` : `text-gray-50`}>
            {error.password ? error.password : "Password"}
          </label>
        </div>

        <BusyIndicator
          delay={0}
          className="w-full overflow-hidden"
          active={isLoading}
        >
          <button
            onClick={onLogin}
            disabled={isLoading}
            className={
              isLoading
                ? `bg-slate-700 h-[40px]`
                : `bg-gradient-to-br from-[#3a75ff] to-[#3c6aff] p-4 rounded-lg text-white`
            }
            type="submit"
          >
            {!isLoading ? "Enter My World" : ""}
          </button>
        </BusyIndicator>
      </form>
    </div>
  );
}
