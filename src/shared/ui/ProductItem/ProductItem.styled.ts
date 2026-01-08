import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween, FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  position: relative;

  margin: 10px 0;
  width: 266px;
  height: 432px;

  background: #f6f6f6;
  border-radius: 10px;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 163px;
    height: 322px;
  }
`;
export const SoldOutBox = styled.div`
  position: absolute;

  width: 266px;
  height: 432px;
  border-radius: 10px;
  background: rgb(246, 246, 246, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  cursor: default;

  left: 0;
  top: 0;
`;

export const MainBox = styled(FlexColBetween)`
  width: 234px;
  height: 370px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    height: 280px;
  }
`;
export const IconBox = styled.div`
  width: 234px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    height: 20px;
  }
`;

export const FlexBox = styled(FlexBetween)``;

export const CartIcon = styled(FlexCenter)`
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const MobileCartIcon = styled(CartIcon)`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: inline-block;
  }
`;

export const Img = styled.img`
  height: 160px;
  transition: 0.2s;
  &:hover {
    scale: 1.2;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 104px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 12px;
  }
`;
export const PriceBox = styled.div`
  display: flex;
`;
export const DiscountPercent = styled.div`
  margin: 0 5px 0 0;
  color: gray;
`;
export const Price = styled.div`
  margin: 0 5px 0 0;
  text-decoration: line-through;
`;
export const DiscountedPrice = styled.div`
  font-size: 26px;
  font-weight: 600;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 18px;
  }
`;

export const Button = styled.div`
  width: 188px;
  height: 48px;
  font-size: 16px;

  border-radius: 8px;
  background: #000;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: gray;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 130px;
    height: 38px;
    font-size: 14px;
  }
`;
