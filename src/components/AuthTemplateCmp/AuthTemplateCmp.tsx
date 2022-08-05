import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TopupMamaLogo from "../../assets/logo-color.png";
import appTheme from "../../constants/theme";
import BannerImage from "../../assets/banner.png";

const AuthContainer = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LeftWrapper = styled.div`
  flex: 50%;
  background: linear-gradient(
    180deg,
    rgba(1, 108, 186, 0.1) -19.7%,
    rgba(7, 112, 188, 0.097) -5.4%,
    rgba(26, 123, 193, 0.09) 11.1%,
    rgba(58, 141, 201, 0.078) 27.59%,
    rgba(102, 166, 213, 0.06) 46.29%,
    rgba(159, 199, 229, 0.038) 64.99%,
    rgba(227, 239, 247, 0.011) 83.69%,
    rgba(255, 255, 255, 0) 90.29%
  );

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const LeftInnerWrapper = styled.div`
  padding: 2rem;
`;

const LogoHolder = styled.div`
  text-align: left;
`;

const Logo = styled(LazyLoadImage)`
  width: 50px;
  height: 50px;
`;

const BannerWrapper = styled.div`
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled(LazyLoadImage)`
  width: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  flex: 50%;

  @media only screen and (max-width: 960px) {
    flex: 100%;
  }
`;

const RightDivContainer: any = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 2rem 2rem;

  @media only screen and (max-width: 960px) {
    padding: ${(props: any) =>
      props.mobilePadding ? props.mobilePadding : "4rem 1rem 2rem"};
  }
`;

const RightInnerWrapper = styled.div`
  padding-top: 2rem;
  text-align: left;

  @media only screen and (max-width: 960px) {
    text-align: center;
  }
`;

const PageTitle = styled.h2`
  font-weight: ${appTheme.WEIGHT.mediumBold};
  color: ${appTheme.COLORS.bluePrimary};
  font-size: 2rem;

  @media only screen and (max-width: 960px) {
    padding-top: 2rem;
    font-size: 1.5rem;
  }
`;

const PageDesc = styled.p`
  color: ${appTheme.COLORS.grey1};
  font-size: 14px;
  font-weight: ${appTheme.WEIGHT.small};
`;

const LogoLeftHolder = styled.div`
  display: none;

  @media only screen and (max-width: 960px) {
    display: unset;
  }
`;

const AuthTemplateCmp: React.FC<{
  content: any;
  pageTitle: string;
  pageDesc: string;
  mobilePadding: any;
}> = ({ content, pageTitle, pageDesc, mobilePadding }) => {
  return (
    <AuthContainer fluid>
      <LeftWrapper>
        <LeftInnerWrapper>
          <LogoHolder>
            <Logo src={TopupMamaLogo} effect="blur" />
          </LogoHolder>
          <BannerWrapper>
            <Banner src={BannerImage} effect="blur" />
          </BannerWrapper>
        </LeftInnerWrapper>
      </LeftWrapper>
      <RightWrapper>
        <RightDivContainer mobilePadding={mobilePadding}>
          <RightInnerWrapper>
            <LogoLeftHolder>
              <Logo src={TopupMamaLogo} effect="blur" />
            </LogoLeftHolder>
            <PageTitle>{pageTitle}</PageTitle>
            <PageDesc>{pageDesc}</PageDesc>
            {content}
          </RightInnerWrapper>
        </RightDivContainer>
      </RightWrapper>
    </AuthContainer>
  );
};

export default AuthTemplateCmp;
