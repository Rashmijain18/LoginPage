const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <h2>Login</h2>
      <div className="login-form">
        <div className="userid">
          <label>User ID</label>
          <input></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input></input>
        </div>
      </div>
      <div className="login-form-footer">
        <button>Login</button>
        <a href="/">Trouble logging in?</a>
      </div>
    </div>
  );
};

export default LoginForm;
