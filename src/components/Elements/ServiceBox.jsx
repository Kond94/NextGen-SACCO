import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import React from "react";
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import styled from "styled-components";

// Assets

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "savings":
      getIcon = <RollerIcon />;
      break;
    case "loans":
      getIcon = <MonitorIcon />;
      break;
    case "shares":
      getIcon = <BrowserIcon />;
      break;
    case "account":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className='flex flexColumn'>
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className='font20 extraBold'>{title}</TitleStyle>
      <SubtitleStyle className='font13'>{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  white-space: pre-line;
`;
