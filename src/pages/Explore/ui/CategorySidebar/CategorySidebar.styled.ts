import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween, FlexCenter, FlexColAround } from '@/shared/assets/styled/CommonStyled';

type ProductIdType = { productId?: string };
type ToggleType = { toggle: boolean };
type PNType = { productId: string; name: string };

export const Wrapper = styled.div`
  width: 256px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const CategoryBox = styled.div`
  margin: 0 0 20px 0;
`;

export const TitleBox = styled(FlexBetween)<ProductIdType>`
  width: 256px;

  border-bottom: 0.5px solid #b5b5b5;
  background: ${(pr) => pr.productId === 'recipes' && '#e8e8e8'};

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.044);
  }
`;
export const Title = styled.div`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    cursor: default;
  }
`;
export const Arrow = styled(FlexCenter)<ToggleType>`
  transform: ${(pr) => pr.toggle && 'rotate(180deg)'};
`;

export const SearchBox = styled(FlexBetween)`
  margin: 10px 0;
  width: 256px;
  height: 40px;
  border-radius: 8px;

  background: #f5f5f5;
`;
export const SearchIcon = styled(FlexCenter)`
  margin: 0 0 0 15px;
`;

export const Input = styled.input`
  padding: 0 10px;
  width: 197px;
  height: 56px;
  outline: none;
  border: none;
  color: #656565;
  background: rgba(0, 0, 0, 0);
`;

export const BrandBox = styled(FlexColAround)`
  margin: 10px 0;

  width: 256px;
  align-items: start;
`;
export const BrandInBox = styled.div`
  height: 24px;
  margin: 5px 0;

  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Brand = styled.div<PNType>`
  font-size: ${(pr) => (pr.name === pr.productId ? '18px' : '14px')};
  color: ${(pr) => (pr.name === pr.productId ? '#000' : '#A4A4A4')};
  font-weight: ${(pr) => pr.name === pr.productId && '700'};

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
