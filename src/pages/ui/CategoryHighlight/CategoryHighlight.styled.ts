import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween, FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  height: 352px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 550px;
  }
`;

export const TotalBox = styled(FlexCenter)`
  width: 1440px;
  height: 352px;

  background: #fafafa;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 550px;
  }
`;

export const MainBox = styled(FlexColBetween)`
  width: 1120px;
  height: 190px;

  align-items: start;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    height: 95%;
    justify-content: space-around;
  }
`;
export const Top = styled.div`
  cursor: default;
  font-weight: 500;
  font-size: 24px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 20px;
  }
`;
export const Categories = styled(FlexBetween)`
  width: 1120px;
  height: 128px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100%;
    height: 90%;

    flex-wrap: wrap;
  }
`;

export const ItemBox = styled(Link)`
  width: 160px;
  height: 128px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background: rgb(0, 0, 0, 0.08);

  text-decoration: none;
  color: #000;
  &:hover {
    cursor: pointer;
    background: rgb(0, 0, 0, 0.2);
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
  }
`;
export const CategoryImg = styled(FlexCenter)``;

export const Title = styled.div`
  margin: 10px 0 0 0;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 14px;
  }
`;
