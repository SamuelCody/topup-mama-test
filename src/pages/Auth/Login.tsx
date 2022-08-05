import React from "react";
import styled from "styled-components";
import AuthTemplateCmp from "../../components/AuthTemplateCmp/AuthTemplateCmp";
import LoginForm from "../../components/FormsCmp/LoginForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Login = () => {
  const Content = () => {
    return (
      <>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </>
    );
  };
  return (
    <>
      <AuthTemplateCmp
        pageTitle="Login"
        pageDesc="Pls login with the form below."
        content={<Content />}
        mobilePadding={"2rem 1rem 2rem"}
      />
    </>
  );
};

export default Login;
