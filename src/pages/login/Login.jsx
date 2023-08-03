import React, { useContext, useEffect, useState } from "react";
import GoogleIcon from "../../assets/GoogleIcon";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { signIn, currentUser, signUpProvider , forgotPassword} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, pass);
    // navigate("/home");
  };

  useEffect(() => {
    // Check if currentUser is present and navigate to the home page
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    <LoginContainer>
      <FormContainer >
        <StyledImg src={mealSvg} />
        <Header>{"<Fatih Ay/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit} >
          <StyledInput
            type="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>
          <button
            style={{marginBottom:"1rem"}}
            className="flex justify-center items-center"
            type="button"
            onClick={() => forgotPassword(email)}
          >
            Forgot Password
          </button>
          <button
            style={{backgroundColor:"orange"}}
            className="flex justify-center items-center"
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
          <button className="p-2" onClick={() => navigate("/register")} >Don't you have an account?</button>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
