import styled from '@emotion/styled';

import CategoryPromoBannerItem from '@/pages/ui/CategoryPromoBanner/CategoryPromoBannerItem';
import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween, FlexCenter } from '@/shared/assets/styled/CommonStyled';
import { GetMonkCategoryPromoItems } from '@/shared/mock/categories';

const Wrapper = styled(FlexCenter)`
  width: 100%;
  height: 552px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const MainBox = styled(FlexBetween)`
  width: 1440px;
`;

const CategoryPromoBanner = () => {
  return (
    <Wrapper>
      <MainBox>
        {GetMonkCategoryPromoItems.map((el) => (
          <CategoryPromoBannerItem key={el.id} {...el} />
        ))}
      </MainBox>
    </Wrapper>
  );
};

export default CategoryPromoBanner;
