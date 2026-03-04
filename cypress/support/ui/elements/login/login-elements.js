class LoginElements{
  
  usernameInput()  {return `input[name="user-name"]`;  }
  passwordInput() {return `input[name="password"]`;}
  loginButton() {return `input[name="login-button"]`;}
  initialPageTittle() {return `div[class="primary_header"] div:contains("Swag Labs")`;}
  errorMessage() {return `div[class="error-message-container error"] h3[data-test="error"]`;}

}

export default LoginElements;
