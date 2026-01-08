import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
  }
`;

export const MainBox = styled.div`
  width: 1120px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 95%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
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
