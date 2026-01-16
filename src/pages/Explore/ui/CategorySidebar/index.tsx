import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { productIdSlice, RootState } from '@/app/store';
import * as S from '@/pages/Explore/ui/CategorySidebar/CategorySidebar.styled';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { DumText } from '@/shared/assets/styled/skeleton';
import { ExpandDownSVG } from '@/shared/assets/SVGicons';
import { kebabToTitleCase } from '@/shared/lib';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { CategoryListResponse } from '@/shared/types/response';

const CategorySidebar = () => {
  const productId = useSelector((state: RootState) => state.productId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const { data: ProductsCategoryListData, isLoading } = useFetchQuery<CategoryListResponse>({
    queryKey: QUERY_KEYS.products.categoryList,
    url: SERVICE_URLS.PRODUCTS.CATEGORY_LIST,
  });

  const handleItemSelect = (id: string, type: string) => {
    dispatch(productIdSlice.actions.getProductId(id));
    navigate(type);
  };

  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.TitleBox productId={productId} onClick={() => handleItemSelect('', '/recipes')}>
          <S.Title>Recipes</S.Title>
        </S.TitleBox>
        <S.TitleBox onClick={() => setToggle((prev) => !prev)}>
          <S.Title>Products</S.Title>
          <S.Arrow toggle={toggle}>{ExpandDownSVG({ size: '24', color: '#191919' })}</S.Arrow>
        </S.TitleBox>

        {toggle && (
          <S.BrandBox>
            {isLoading ? (
              <>
                {Array(20)
                  .fill('')
                  .map((_, i) => (
                    <S.BrandInBox key={Number(new Date()) * i}>
                      <DumText width="160px" height="15px" />
                    </S.BrandInBox>
                  ))}
              </>
            ) : (
              <>
                {ProductsCategoryListData?.map((el) => (
                  <S.BrandInBox key={Number(new Date()) + el}>
                    <S.Brand
                      onClick={() => handleItemSelect(el, '/explore')}
                      productId={kebabToTitleCase(productId)}
                      name={kebabToTitleCase(el)}
                    >
                      {kebabToTitleCase(el)}
                    </S.Brand>
                  </S.BrandInBox>
                ))}
              </>
            )}
          </S.BrandBox>
        )}
      </S.CategoryBox>
    </S.Wrapper>
  );
};

export default CategorySidebar;
