import AddImage1 from "../../assets/img/team1.png";
import AddImage2 from "../../assets/img/team2.png";
import AddImage3 from "../../assets/img/team3.png";
import FullButton from "../Buttons/FullButton";
import React from "react";
import ServiceBox from "../Elements/ServiceBox";
import styled from "styled-components";

export default function Services() {
  return (
    <Wrapper id='services'>
      <div className='lightBg' style={{ padding: "2px 0" }}>
        <div className='container'>{/* <ClientSlider /> */}</div>
      </div>
      <div className='whiteBg' style={{ padding: "60px 0" }}>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Our Awesome Services</h1>
            <p className='font13'>
              We give you a new and unique sacco experience through the
              following services
              <br />
              All are accessible through the App, Website or Branch.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className='flex'>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='savings'
                title='Savings'
                subtitle='- Short term Fixed
- Ordinary deposits
- Holiday Festival savings
- College student savings
- New recruit savings
'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='loans'
                title='Loans'
                subtitle='- Automobile loans
- Real estate loans
- Building development loans
- Wedding and Funeral loans
- Members quick loans
- Gadget loans
- Business loans
- New recruit loans
- Bail out loan
'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='shares'
                title='Shares'
                subtitle='- Redeemable
- Non-Redeemable'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='account'
                title='Account Access'
                subtitle='- Balance inquiry of shares
- Cash deposits
- Cash withdrawal
- Loan processing
- ATM
'
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className='lightBg'>
          <div className='container'>
            <Advertising className='flexSpaceCenter'>
              <AddLeft>
                <h4 className='font15 semiBold'>
                  A few words about this sacco
                </h4>
                <h2 className='font40 extraBold'>Why NextGen?</h2>
                <p className='font12'>
                  Next generation is owned and operated by its members. It is a
                  forward thinking, gender inclusive and innovational guided
                  financial platform that seeks to improve the financial status
                  and drive its members into financial freedom from fund
                  accumulation and multiplication through smart financial
                  investments.
                </p>
                <ButtonsRow
                  className='flexNullCenter'
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title='Get Started'
                      action={() => alert("clicked")}
                    />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title='Contact Us'
                      action={() => alert("clicked")}
                      border
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className='flexNullCenter'>
                    <AddImgWrapp1 className='flexCenter'>
                      <img src={AddImage1} alt='mobile_banking' />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt='visa' />
                    </AddImgWrapp2>
                  </div>
                  <div className='flexNullCenter'>
                    <AddImgWrapp3>
                      <img src={AddImage3} alt='atm' />
                    </AddImgWrapp3>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 40%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
