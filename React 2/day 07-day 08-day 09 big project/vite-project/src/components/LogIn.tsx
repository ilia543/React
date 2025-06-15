import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css";

const LogIn = () => {
  const [logEmailError, setLogEmailError] = useState("");
  const [logPasswordError, setLogPasswordError] = useState("");

  const navigate = useNavigate();

  function logForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    let hasError: boolean = false;

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    setLogEmailError("");
    setLogPasswordError("");

    const foundUser = users.find((u: any) => u.email === email);

    if (!foundUser) {
      setLogEmailError("Wrong email");
      hasError = true;
    }else{
      setLogEmailError("");
    }

    if (foundUser.password !== password) {
      setLogPasswordError("Wrong password");
      hasError = true;
    }else{
      setLogPasswordError("");
    }

    if(hasError) return;

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    event.currentTarget.reset();
    navigate("/main");
  }

  return (
    <div className="divpLogin min-w-[550px]">
      <form onSubmit={logForm} className="loginisterForm">
        <input type="email" name="email" placeholder="email" />
        <p className="text-red-600">{logEmailError}</p>

        <input type="password" name="password" placeholder="password" />
        <p className="text-red-600">{logPasswordError}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;