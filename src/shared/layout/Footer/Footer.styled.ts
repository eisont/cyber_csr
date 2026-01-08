import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween, FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  width: 100%;
  height: 504px;

  background-color: #000;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 35px 0;
    height: auto;
  }
`;
export const TotalBox = styled.div`
  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const TextBox = styled(FlexBetween)`
  width: 1120px;
  height: 216px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 70%;
    height: auto;
    flex-direction: column;
  }
`;

export const Box1 = styled.div`
  width: 384px;
  height: 100%;
  color: #fff;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0;
    text-align: center;
    width: auto;
    height: auto;
  }
`;

export const Logo = styled(FlexCenter)`
  margin: 0 0 15px 0;
  justify-content: start;

  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    justify-content: center;
  }
`;
export const MobileLogo = styled(Logo)`
  display: none;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    justify-content: center;
  }
`;

export const Box2 = styled(FlexColBetween)`
  width: 300px;
  height: 100%;

  align-items: start;

  color: #fff;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0;
    align-items: center;
    width: auto;
    height: auto;
  }
`;
export const Box3 = styled(FlexColBetween)`
  width: 300px;
  height: 100%;

  align-items: start;

  color: #fff;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    align-items: center;
    width: auto;
    height: auto;
  }
`;
export const STitle = styled.div`
  cursor: default;
  font-size: 16px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 5px 0;
  }
`;
export const SText = styled.li`
  font-weight: 100;
  font-size: 14px;
  list-style: none;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    line-height: 18px;
    font-size: 12px;
    margin: 7px 0;
  }
`;

export const SnsBox = styled(FlexBetween)`
  margin: 30px 0 0 0;
  width: 173px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 50%;
  }
`;

export const SnsLogo = styled(FlexCenter)`
  &:hover {
    cursor: pointer;
  }
`;
