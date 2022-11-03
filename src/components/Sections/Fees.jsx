import PricingTable from "../Elements/PricingTable";
import React from "react";
import styled from "styled-components";

// Components

export default function Fees() {
  return (
    <Wrapper id='pricing'>
      <div className='whiteBg'>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Check Our Fees</h1>
            <p className='font13'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className='flexSpaceNull'>
            <TableBox>
              <PricingTable
                icon='savings'
                price='From 5% per mo'
                title='Savings Interest'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                offers={[
                  { name: "Accrued", cheked: true },
                  { name: "Instantly Debited", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon='loans'
                price='13% per anum'
                title='Loan Rates'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                offers={[
                  { name: "Insured", cheked: true },
                  { name: "Flexible Repayment", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon='loans'
                price='Mk1999.99/mo'
                title='Fees'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                offers={[
                  { name: "Mk1,000 Digital Access Fee" },
                  { name: "Mk 999 Management Fees" },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
