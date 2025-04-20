
import "./Login.css"; // External CSS for animations
import { FaLock } from "react-icons/fa";
export default function Login() {
  return (
  <div className="login-container">
      <form className="login-box">
        <h2 className="flex items-center justify-center gap-3"><FaLock /> <b>Login</b></h2>
        <p className="subtext">My name is <strong>Shihab</strong> — this box is mine 🔐</p>

        <div className="input-group">
          <input type="text" required />
          <label>Username</label>
        </div>

        <div className="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>

        <button type="submit">Enter My World</button>
      </form>
    </div>

  );
}
