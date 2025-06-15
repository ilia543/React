import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reg.css";

const Register = () => {
  const [regNameErrorText, setRegNameErrorText] = useState<string>("");
  const [regEmailErrorText, setRegEmailErrorText] = useState<string>("");
  const [regPasswordErrorText, setRegPasswordErrorText] = useState<string>("");

  const navigate = useNavigate();

  function regForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const backimg = "#";
    const profimg = "#";

    let hasError = false;

    if (typeof name !== "string" || name.trim() === "") {
      setRegNameErrorText("Write your name");
      hasError = true;
    } else {
      setRegNameErrorText("");
    }

    if (typeof email !== "string" || !email.includes("@gmail.com")) {
      setRegEmailErrorText("Write your real email");
      hasError = true;
    } else {
      setRegEmailErrorText("");
    }

    if (typeof password !== "string" || password.length < 5) {
      setRegPasswordErrorText("Write a strong password");
      hasError = true;
    } else {
      setRegPasswordErrorText("");
    }

    if (hasError) return;

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    const newUser = { name, email, password, backimg, profimg };

    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
        alert("User already exists with this email.");
        return;
    }

    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));


    event.currentTarget.reset();
    navigate("/main");
  }

  return (
    <div className="divpp1 min-w-[550px]">
      <form className="registerForm" onSubmit={regForm}>
        <input className="rounded-sm" type="text" name="name" placeholder="name" />
        <p className="text-red-600">{regNameErrorText}</p>

        <input className="rounded-sm" type="email" name="email" placeholder="email" />
        <p className="text-red-600">{regEmailErrorText}</p>

        <input className="rounded-sm" type="password" name="password" placeholder="password" />
        <p className="text-red-600">{regPasswordErrorText}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;