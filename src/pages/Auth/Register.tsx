import React from "react";
import styled from "styled-components";
import AuthTemplateCmp from "../../components/AuthTemplateCmp/AuthTemplateCmp";
import RegisterForm from "../../components/FormsCmp/RegisterForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Register = () => {
  const Content = () => {
    return (
      <>
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      </>
    );
  };
  return (
    <>
      <AuthTemplateCmp
        pageTitle="Register"
        pageDesc="Please register with the form below"
        content={<Content />}
        mobilePadding={"2rem 1rem 2rem"}
      />
    </>
  );
};

export default Register;
