import { useState } from "react";
import "../app.css";
import FormInput from '../conponents/FormInput.js'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Firstname",
      type: "text",
      placeholder: "Firstname",

      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Lastname",
      type: "text",
      placeholder: "Lastname",

      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",

      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",

      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="Submit-btn">Create My Account</button>
        <p className="signtxt">Already have an account?
          <button className="btn">
            <CustomLink to="/login" className="login-btn">Login</CustomLink>
          </button>
        </p>
      </form>
    </div>
  );

};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Register;
