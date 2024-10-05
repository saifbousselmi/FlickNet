import React, { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('FlickNet@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // TODO: Handle authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="home">
      <div style={{marginTop:"114px", paddingTop:"10px" ,width:"100vw",backgroundColor:"black", display: "flex" }}>
        <div style={{ display: "flex" ,marginLeft:"40px"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icons1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <div  className="logo1">
            <p className="flick">Flick</p>
            <p className="net">Net</p>
          </div>
        </div>
      </div>
      <div data-uia="login-page-container" style={{ color: "rgb(66, 66, 66)", marginTop: "30px" }} className="default-ltr-cache-1osrymp e1puclvk0">
        <header style={{ marginBottom: "20px" }} className="default-ltr-cache-1ws1lu8 e13lzdkk2">
          <h1 style={{
            fontSize: "24px",
            color: "#009688",
            textAlign: "center",
          }} data-uia="login-page-title" className="default-ltr-cache-1ho9ut0 euy28770">
            S'identifier
          </h1>
        </header>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} className="e13lzdkk1 default-ltr-cache-9beyap" aria-label="S'identifier">
          <div className="default-ltr-cache-z5atxi e2eu37l0">
            <div data-uia="login-field+container" className="exrud7f1 etuj2l30 default-ltr-cache-iygdjj-Container-StyledInput-InputNestedSelect-StyledFormControl ea3diy35">
              <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px" }} htmlFor="email" data-uia="login-field+label" className="default-ltr-cache-136r5su-Label-renderedLabel-renderedLabel ea3diy32">
                E-mail ou numéro de mobile
              </label>
              <div className="default-ltr-cache-jv5gqy-ControlWrapper ea3diy34">
                <input className='input1'
                  type="text"
                  autoComplete="email"
                  id="email"
                  name="userLoginId"
                  data-uia="login-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div aria-hidden="true" className="default-ltr-cache-uaidr7-ControlChrome ea3diy33"></div>
              </div>
            </div>
          </div>
          <div className="default-ltr-cache-1qtmpa e1j9l8n51">
            <div data-uia="password-field+container" className="e2so2tu1 default-ltr-cache-ljh3ft-Container-StyledInput ea3diy35">
              <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px" }} htmlFor="password" data-uia="password-field+label" className="default-ltr-cache-136r5su-Label-renderedLabel-renderedLabel ea3diy32">
                Mot de passe
              </label>
              <div className="default-ltr-cache-jv5gqy-ControlWrapper ea3diy34">
                <input className='input1'
                  type="password"
                  autoComplete="password"
                  id="password"
                  name="password"
                  data-uia="password-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div aria-hidden="true" className="default-ltr-cache-uaidr7-ControlChrome ea3diy33"></div>
              </div>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#009688",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "backgroundColor 0.3s"
            }}
            className="e1ax5wel2 ew97par0 default-ltr-cache-1aba556-PressableButton-StyledPressable-StyledPressable e1ff4m3w2"
            data-uia="login-submit-button"
            type="submit"
          >
            S'identifier
          </button>
          <p style={{
            textAlign: "center",
            color: "#555",
          }} className="default-ltr-cache-1und4li euy28770">OU</p>
          <button
            style={{
              backgroundColor: "#009688",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "backgroundColor 0.3s"
            }}
            className="e1ax5wel2 ew97par0 default-ltr-cache-1unl1nl-PressableButton-StyledPressable-StyledPressable e1ff4m3w2"
            data-uia="login-toggle-button"
            type="button"
          >
            Utiliser un code d'identification
          </button>
          <a
            style={{
              color: "#009688",
              textDecoration: "none",
            }}
            className="e1gz2xdw0 e1xphksk0 default-ltr-cache-1amitxx-PressableAnchor-StyledPressable-StyledPressable e1ff4m3w1"
            data-uia="login-help-link"
            href="/LoginHelp"
          >
            Mot de passe oublié&nbsp;?
          </a>
        </form>
        <div className="default-ltr-cache-banb1s e13lzdkk0">
          <div className="default-ltr-cache-1r5gb7q e182k4ex0">
            <div style={{ display: "flex" }} data-uia="remember-me-field+container" className="eo28fys1 default-ltr-cache-1mxxcjc-Container-Checkbox-StyledFormControl ea3diy35">
              <div className="default-ltr-cache-jv5gqy-ControlWrapper ea3diy34">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  data-uia="remember-me-field"
                />
                <div aria-hidden="true" className="default-ltr-cache-uaidr7-ControlChrome ea3diy33">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    data-icon="CheckmarkSmall"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4696 3.46973L14.5303 4.53039L6.53026 12.5304C6.23737 12.8233 5.7625 12.8233 5.4696 12.5304L1.4696 8.53039L2.53026 7.46973L5.99993 10.9394L13.4696 3.46973Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <label style={{ fontSize: "14px", color: "#555", marginBottom: "5px", marginLeft: "25px" }} htmlFor="rememberMe" data-uia="remember-me-field+label" className="default-ltr-cache-136r5su-Label-renderedLabel-renderedLabel ea3diy32">
                Se souvenir de moi
              </label>
            </div>
          </div>
          <p style={{
            textAlign: "center",
            color: "#555",
          }} data-uia="login-signup-now" className="ec64ufc0 default-ltr-cache-160ge2v euy28770">
            Première visite sur FlickNet&nbsp;? <a style={{
              color: "#009688",
              textDecoration: "none",
            }} target="_self" href="/">Inscrivez-vous</a>.
          </p>
          <div className="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
            <p style={{
              textAlign: "center",
              color: "#555",
            }}>
              <span>
                Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.
              </span>
              &nbsp;
              <button style={{
                backgroundColor: "#009688",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "backgroundColor 0.3s",
                marginTop: "5px"
              }} className="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">
                En savoir plus.
              </button>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
