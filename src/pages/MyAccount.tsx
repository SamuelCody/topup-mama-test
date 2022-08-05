import { User } from "@styled-icons/boxicons-regular";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import SolidButton from "../components/ButtonCmp/Button";
import HeaderCmp from "../components/HeaderCmp/HeaderCmp";
import CustomInputIconCmp from "../components/InputsCmp/CustomInputIconCmp";
import appTheme from "../constants/theme";
import { editUser, getUser } from "../redux/actions/authActions";
import ls from "localstorage-slim";
import { Formik, useFormikContext } from "formik";
import accountSchema from "../validators/accountValidator";
import { toast } from "react-toastify";
import SpinnerCmp from "../components/SpinnerCmp/SpinnerCmp";

const Wrapper = styled(Container)`
  padding: 2rem 1rem;
  max-width: 600px;
`;

const Title = styled.h2`
  color: ${appTheme.COLORS.grey1};
  font-weight: ${appTheme.WEIGHT.mediumBold};
  font-size: 24px;
  padding-bottom: 1rem;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
`;

const FormText = styled.h2`
  color: ${appTheme.COLORS.grey1};
  font-weight: ${appTheme.WEIGHT.small3};
  font-size: 14px;
  text-align: left;
`;

const InputWrapper = styled.div``;

const ButtonWrapper = styled.div``;

const MyAccount: React.FC<{
  currentUserData: any;
  loading: any;
  setGetUser: any;
  setEditUser: any;
}> = ({ currentUserData, setGetUser, setEditUser, loading }) => {
  const id = ls.get("id");

  useEffect(() => {
    setGetUser(`${id ? id : "4"}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FetchAccountDetails = (props: any) => {
    const {
      values: { name, job },
      setFieldValue,
    }: { values: any; setFieldValue: any } = useFormikContext();

    useEffect(() => {
      if (
        currentUserData?.data?.first_name &&
        currentUserData?.data?.last_name
      ) {
        setFieldValue(
          "name",
          `${currentUserData?.data?.first_name} ${currentUserData?.data?.last_name}`
        );
      } else {
        setFieldValue("name", "");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, job, setFieldValue]);

    return (
      <>
        <InputWrapper style={{ display: "none" }}></InputWrapper>
      </>
    );
  };
  return (
    <>
      <HeaderCmp />
      <Wrapper>
        <Formik
          validationSchema={accountSchema}
          initialValues={{
            name: "",
            job: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            // resetForm();
            const response = await setEditUser(`${id ? id : "4"}`, values);

            if (response && response?.name) {
              toast.success("Account updated successfully");
            }
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <>
              <form noValidate onSubmit={handleSubmit}>
                <Title>Account Settings</Title>
                <FormWrapper>
                  <FormText>Name:</FormText>
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
                      name="name"
                      placeholder="Name"
                      values={values}
                      onChange={handleChange}
                      message={`${errors["name"] ? errors["name"] : ""}`}
                      showMessage={true}
                    />
                  </InputWrapper>
                </FormWrapper>
                <FormWrapper>
                  <FormText>Job:</FormText>
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
                      name="job"
                      placeholder="job"
                      values={values}
                      onChange={handleChange}
                      message={`${errors["job"] ? errors["job"] : ""}`}
                      showMessage={true}
                    />
                  </InputWrapper>
                </FormWrapper>
                <FetchAccountDetails />
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
                        "Update Account"
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
              </form>
            </>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

const mapState = (state: any) => ({
  loading: state.auth.loading,
  currentUserData: state.auth.currentUserData,
});

const mapDispatch = (dispatch: any) => ({
  setGetUser: (id: string) => dispatch(getUser(id)),
  setEditUser: (id: string, data: any) => dispatch(editUser(id, data)),
});

export default connect(mapState, mapDispatch)(MyAccount);
