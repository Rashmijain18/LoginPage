import "../styles/styles.css";
import LoginDetails from "./LoginDetails";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="login-wrapper">
        <LoginDetails />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
