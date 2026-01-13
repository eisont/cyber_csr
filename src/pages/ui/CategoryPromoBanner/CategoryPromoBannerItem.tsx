import styled from '@emotion/styled';

import { FlexCenter, FlexColBetween } from '@/shared/assets/styled/CommonStyled';
import { GetMonkCategoryPromoItemsResponse } from '@/shared/types/response';

type Props = {
  background?: string;
  hover?: string;
};

const Wrapper = styled(FlexCenter)`
  width: 360px;
  height: 552px;
  cursor: default;

  background: ${({ background }: Props) => background};
`;

const MainBox = styled(FlexColBetween)`
  width: 297px;
  height: 485px;
`;
const ItemImg = styled.img`
  width: 297px;
`;
const ItemText = styled.div`
  font-size: 33px;
  font-weight: 300;
  color: ${({ color }) => color};
`;
const ItemBt = styled.button`
  width: 191px;
  height: 56px;

  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: ${({ background }: Props) => background};

  &:hover {
    cursor: pointer;
    background: ${({ hover }) => hover};
  }
`;

type CategoryPromoBannerItemProps = Partial<GetMonkCategoryPromoItemsResponse>;

const CategoryPromoBannerItem = ({
  img,
  alt,
  hover,
  background,
  color,
  text,
  button,
}: CategoryPromoBannerItemProps) => {
  return (
    <Wrapper background={background}>
      <MainBox>
        <ItemImg src={`img/CategoryPromoBanner/${img}`} alt={alt} />
        <ItemText color={color}>{text}</ItemText>
        <ItemBt color={color} background={background} hover={hover}>
          {button}
        </ItemBt>
      </MainBox>
    </Wrapper>
  );
};

export default CategoryPromoBannerItem;
