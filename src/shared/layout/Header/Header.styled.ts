import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  width: 100%;
  height: 88px;
  background-color: #fff;
  border-bottom: 1px solid #b5b5b5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100%;
    height: 35px;
  }
`;

export const TotalBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 10px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled(FlexBetween)`
  margin: 0 20px;
  width: 433px;
  height: 56px;

  border-radius: 10px;
  background: #f5f5f5;
`;
export const SearchIcon = styled.div`
  margin: 0 0 0 15px;
  width: 24px;
`;
export const Input = styled.input`
  padding: 0 10px;
  width: 384px;
  height: 56px;
  outline: none;
  border: none;
  color: #656565;
  background: rgba(0, 0, 0, 0);
`;

export const IconBox = styled(FlexBetween)`
  width: 200px;
  justify-content: space-around;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 30px;
  }
`;

export const Icon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  &:hover {
    scale: 1.2;
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const NoLinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  &:hover {
    scale: 1.2;
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const MobileIcon = styled(Icon)`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: inline-block;
  }
`;
export const NoLinkMobileIcon = styled(NoLinkIcon)`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: inline-block;
  }
`;

export const Bt = styled(Link)`
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  transition: 0.2s;
  text-decoration: none;
  color: #000;
  &:hover {
    background: rgb(0, 0, 0, 0.5);
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;
