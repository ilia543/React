import { useRef, useState, type FormEvent } from "react";

type formSubmited = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submited, setSubmited] = useState<formSubmited>({
    name: "",
    email: "",
    password: ""
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmited({
      name: nameValue,
      email: emailValue,
      password: passwordValue
    });

  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={name}   />
        <input type="email" placeholder="email" ref={email} />
        <input type="password" placeholder="password" ref={password} />
        <button type="submit">submit</button>

        <section>
          <h1>Name: {submited.name}</h1>
          <h1>Email: {submited.email}</h1>
          <h1>Password: {submited.password}</h1>
        </section>

      </form>
    </>
  );
};

export default Form;