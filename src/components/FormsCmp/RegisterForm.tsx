import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import CustomInputIconCmp from "../InputsCmp/CustomInputIconCmp";
import { User, Lock } from "@styled-icons/boxicons-regular";
import CustomInputPasswordIconCmp from "../InputsCmp/CustomInputPasswordIconCmp";
import appTheme from "../../constants/theme";
import SolidButton from "../ButtonCmp/Button";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import signinSchema from "../../validators/signinValidator";
import { registerUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import SpinnerCmp from "../SpinnerCmp/SpinnerCmp";
// import SpinnerCmp from "../SpinnerCmp/SpinnerCmp";

const Wrapper = styled(Form)`
  padding-top: 0.5rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputWrapper = styled.div``;

const TextWrapper = styled.div`
  padding-top: 0.5rem;
`;

const Text = styled.p`
  color: ${appTheme.COLORS.grey1};
  font-weight: ${appTheme.WEIGHT.small3};
  font-size: 14px;
  text-align: right;
`;

const Span = styled.span`
  color: #1a8fdd;
  cursor: pointer;
`;

const ButtonWrapper = styled.div``;

const RegisterForm: React.FC<{
  loading: any;
  error: any;
  authenticated: any;
  setRegisterUser: any;
}> = ({ loading, error, authenticated, setRegisterUser }) => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <Formik
          validationSchema={signinSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            // resetForm();
            const response = await setRegisterUser(values);

            if (response && response.token) {
              navigate("/login");
            }
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <>
              <Wrapper noValidate onSubmit={handleSubmit}>
                <FormWrapper>
                  <InputWrapper>
                    <CustomInputIconCmp
                      background="rgba(225, 235, 245, 0.1)"
                      required={true}
                      icon={
                        <>
                          <User size={20} color="rgba(107, 114, 128, 0.5)" />
                        </>
                      }
                      type="text"
                      name="email"
                      placeholder="Email"
                      values={values}
                      onChange={handleChange}
                      message={`${errors["email"] ? errors["email"] : ""}`}
                      showMessage={true}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <CustomInputPasswordIconCmp
                      background="rgba(225, 235, 245, 0.1)"
                      required={true}
                      icon={
                        <>
                          <Lock size={30} color="rgba(107, 114, 128, 0.5)" />
                        </>
                      }
                      name="password"
                      placeholder="Choose Password"
                      values={values}
                      onChange={handleChange}
                      message={`${
                        errors["password"] ? errors["password"] : ""
                      }`}
                      showMessage={true}
                    />
                  </InputWrapper>
                </FormWrapper>
                <TextWrapper>
                  <Text>
                    <Span
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      You have an account already?
                    </Span>
                  </Text>
                </TextWrapper>
                <ButtonWrapper>
                  <SolidButton
                    text={
                      loading ? (
                        <>
                          <SpinnerCmp
                            enabled={true}
                            color={appTheme.COLORS.bluePrimary}
                            size={20}
                            secondaryColor={appTheme.COLORS.white}
                          />
                        </>
                      ) : (
                        "Register"
                      )
                    }
                    type="submit"
                    weighty="500"
                    textFontSize="14px"
                    specifyPadding="0.8rem 1.5rem"
                    color="#fff"
                    widthWebkit="100%"
                    widthMoz="100%"
                    widthNormal="100%"
                    borderRadius="8px"
                    backColor="#1a8fdd"
                    backgroundHoverColor="#1a8fdd"
                    textHoverColor="#fff"
                    margin="0rem auto 0"
                    disabled={loading ? true : false}
                  />
                </ButtonWrapper>
              </Wrapper>
            </>
          )}
        </Formik>
      </>
    </>
  );
};

const mapState = (state: any) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  authenticated: state.auth.authenticated,
});

const mapDispatch = (dispatch: any) => ({
  setRegisterUser: (data: any) => dispatch(registerUser(data)),
});

export default connect(mapState, mapDispatch)(RegisterForm);
