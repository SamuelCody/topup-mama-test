import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import appTheme from "../../constants/theme";
import { EyeOutline, EyeOffOutline } from "@styled-icons/evaicons-outline";

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled(Form.Control)`
  padding: 0.8rem 3rem 0.8rem 3rem;
  border: ${(props: any) =>
    props.message ? "1px solid red" : "1px solid #ADB5BD"};
  background: ${(props: any) =>
    props.background ? props.background : "transparent"};
  border-radius: 8px;
  color: #374151;
  font-weight: 400;
  font-size: 15px;
  &:focus {
    box-shadow: none;
    border: 1px solid ${appTheme.COLORS.blueSecondary};
    background: rgba(243, 244, 246, 0.7);
  }
  &::placeholder {
    color: rgba(107, 114, 128, 0.3);
    font-weight: 400;
    font-size: 14px;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(107, 114, 128, 0.3);
    font-weight: 400;
    font-size: 14px;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(107, 114, 128, 0.3);
    font-weight: 400;
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    &::placeholder,
    &::-ms-input-placeholder,
    &:-ms-input-placeholder {
      font-size: 12px;
    }
  }
`;

const IconWrapper = styled.div`
  height: 26px;
  width: 26px;
  padding: 0 5px;
  top: 0.7rem;
  position: absolute;
  left: 0.5rem;
  margin: 0;
  border-right: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
`;

const PasswordIconWrapper = styled.div`
  height: 26px;
  width: 26px;
  padding: 0 5px;
  top: 0.7rem;
  position: absolute;
  right: 0.5rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

const ErrorMessageWrapper = styled.div`
  text-align: left;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: ${appTheme.WEIGHT.small3};
  font-size: 13px;
  padding: 0;
  padding-top: 0.5rem;
  margin: 0;
`;

const CustomInputPasswordIconCmp: React.FC<{
  icon: any;
  background?: string;
  required?: boolean;
  type?: "password" | "text";
  name: string;
  values: any;
  value?: string;
  placeholder: string;
  onChange: (e: any) => void;
  message: string;
  showMessage?: boolean;
}> = ({
  icon,
  background,
  required,
  type,
  name,
  values,
  value,
  placeholder,
  onChange,
  message,
  showMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Wrapper>
        <IconWrapper>{icon}</IconWrapper>
        <Input
          background={background}
          required={required ? true : false || false}
          type={showPassword ? "text" : "password"}
          name={name}
          value={values[name]}
          placeholder={placeholder}
          onChange={onChange || null}
          message={message || null}
        />
        <PasswordIconWrapper>
          {showPassword ? (
            <EyeOutline
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              size={20}
              color={"#c4c4c4"}
            />
          ) : (
            <EyeOffOutline
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              size={20}
              color={"#c4c4c4"}
            />
          )}
        </PasswordIconWrapper>

        <ErrorMessageWrapper>
          <ErrorMessage>{showMessage ? message : ""}</ErrorMessage>
        </ErrorMessageWrapper>
      </Wrapper>
    </>
  );
};

export default CustomInputPasswordIconCmp;
