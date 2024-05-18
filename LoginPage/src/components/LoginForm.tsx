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
          <a>Forgot password?</a>
        </div>
        <button className="sign-in">Sign in</button>
      </div>
      <div className="login-other-options">
        <div className="or-wrapper">
          <div className="or-border"></div> <span>or</span>
          <div className="or-border"></div>
        </div>
        <div>
          <p>log in with</p>
          <div className="social-login">
            <button>
              <i className="fas fa-brands fa-facebook-f" />
            </button>
            <button>
              <i className="fas fa-brands fa-google" />
            </button>
          </div>
        </div>
        <p>
          Are you new?{" "}
          <a
            className="create-new-account"
            href="www.google.com"
            target="_blank"
          >
            Create an Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
