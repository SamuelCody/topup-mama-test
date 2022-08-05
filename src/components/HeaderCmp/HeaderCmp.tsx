import React from "react";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TopupMamaLogo from "../../assets/logo-color.png";
import styled from "styled-components";
import appTheme from "../../constants/theme";
import Countdown from "react-countdown";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";
import LocationCmp from "../LocationCmp/LocationCmp";

const Wrapper = styled(Container)`
  padding: 1.5rem 2rem;
  background-color: #fff;
  box-shadow: 1px 1px 17px rgba(218, 216, 216, 0.33);
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div``;

const Logo = styled(LazyLoadImage)`
  width: 50px;
  height: 50px;
`;

const OtherWrapper = styled.div``;

const MenuWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuItem = styled.h2`
  font-weight: ${appTheme.WEIGHT.medium};
  font-size: 16px;
  color: #323232;
  cursor: pointer;

  &:hover {
    color: #f85518;
  }
`;

const OtherInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LocationText = styled.h2`
  font-weight: ${appTheme.WEIGHT.medium};
  font-size: 14px;
  color: #323232;
`;

const TimerText = styled.h2`
  font-weight: ${appTheme.WEIGHT.medium};
  font-size: 14px;
  color: #323232;
`;

const HeaderCmp = () => {
  const navigate = useNavigate();

  const timer: any = ls.get("timer");

  return (
    <>
      <Wrapper fluid>
        <MainWrapper>
          <LogoWrapper>
            <Logo src={TopupMamaLogo} effect="blur" />
          </LogoWrapper>
          <OtherWrapper>
            <OtherInfoWrapper>
              <LocationText>
                <LocationCmp />
              </LocationText>
              <Countdown
                date={timer}
                renderer={({ hours, minutes, seconds, completed }) => (
                  <TimerText>
                    {hours}:{minutes}:{seconds}
                  </TimerText>
                )}
              />
            </OtherInfoWrapper>
            <MenuWrapper>
              <MenuItem
                onClick={() => {
                  navigate("/app/my-account");
                }}
              >
                My Account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/app/users");
                }}
              >
                Users
              </MenuItem>
              <MenuItem
                onClick={() => {
                  ls.flush(true);
                  navigate("/login");
                }}
              >
                Logout
              </MenuItem>
            </MenuWrapper>
          </OtherWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default HeaderCmp;
