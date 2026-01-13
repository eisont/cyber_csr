import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';

type ParamsType = { params: boolean };

export const Wrapper = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const Menu = styled(Link)`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-decoration: none;

  color: #a4a4a4;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const Arrow = styled(FlexCenter)`
  margin: 0 20px 0 0;
  width: 24px;
  cursor: default;
`;

export const ProductItemMenu = styled.div<ParamsType>`
  margin: 0 20px 0 0;
  text-decoration: none;

  color: ${(pr) => pr.params && '#000'};
  font-weight: ${(pr) => (!pr.params ? 500 : 900)};

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const LinkSt = styled(Link)`
  margin: 0 20px 0 0;
  font-weight: 500;
  text-decoration: none;
`;
export const ProductAllMenu = styled.div<ParamsType>`
  color: #a4a4a4;

  &:hover {
    cursor: pointer;
    color: #000;
  }
  color: ${(pr) => !pr.params && '#000'};
  font-weight: ${(pr) => (pr.params ? 500 : 900)};
`;
