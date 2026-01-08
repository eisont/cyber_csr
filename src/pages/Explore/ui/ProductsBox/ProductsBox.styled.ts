import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled.div`
  width: 831px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
  }
`;
export const FlexBox = styled(FlexBetween)``;

export const ProductsCount = styled.div`
  display: flex;
  align-items: center;
  color: #6c6c6c;

  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0 0 0;
  }
`;
export const Count = styled.div`
  margin: 0 0 0 5px;
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;

export const SelectBox = styled.select`
  padding: 8px 16px;
  width: 256px;
  height: 40px;

  border: 0.5px solid #d4d4d4;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const ProductsBox = styled.div`
  padding: 20px 0;
  width: 831px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 0;
  }
`;
