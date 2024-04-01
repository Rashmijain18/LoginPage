const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <h1>Mastery Hub</h1>
      <div className="login-form">
        <div className="userid">
          <label>User ID</label>
          <input></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input></input>
          <p>Forgot password?</p>
        </div>
        <button>Sign in</button>
      </div>
      <div className="login-other-options">
        <div className="or-wrapper">
          <div className="or-border"></div> <span>or</span>
          <div className="or-border"></div>
        </div>
        <p>Sign in with Google</p>
        <p>
          Are you new? <a className="create-new-account">Create an Account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
