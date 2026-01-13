import styled from '@emotion/styled';

import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  width: 1440px;
`;

export const MainBox = styled.div`
  padding: 0 0 30px 0;
  width: 1120px;
  flex: display;
  justify-content: start;
  align-items: start;
`;

export const Title = styled.div`
  margin: 0 0 10px 0;
  font-size: 40px;
  font-weight: 600;
`;

export const TagsBox = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
export const Tags = styled.div`
  margin: 0 10px 0 0;
  border: 1px solid #aeaeae;
  border-radius: 10%;
  padding: 3px 5px;
`;

export const SubTitleBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
export const SubTitle = styled.div`
  margin: 0 12px 0 0;
  display: flex;
`;

export const ContentBox = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImg = styled.img`
  margin: 20px;
  height: 500px;
`;
export const SubBox = styled.div`
  display: flex;
  align-items: center;
`;
export const SubImg = styled.img`
  height: 100px;
  border: 1px solid red;
`;

// ============================================
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const RBox = styled(FlexColBetween)`
  margin: 0 0 0 20px;
  height: 500px;
  align-items: stretch;
`;
export const Price = styled.div`
  margin: 10px 0;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  align-items: center;
`;

export const Tt = styled.div`
  margin: 10px 10px 10px 0;
  display: flex;
  align-items: center;
`;
export const DiscountPercentage = styled.div`
  color: red;
  display: flex;
  align-items: center;
`;
export const OriginalPrice = styled.div`
  margin: 0 20px 0 0;
  font-size: 25px;
  text-decoration: line-through;
  display: flex;
  align-items: center;
`;

const Bt = styled(FlexCenter)`
  padding: 15px 20px;

  border: 1px solid black;
  background: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
export const CartBt = styled(Bt)``;

export const Description = styled.div`
  margin: 30px 0;
  font-size: 18px;
`;
