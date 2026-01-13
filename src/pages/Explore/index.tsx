import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { RootState } from '@/app/store';
import * as S from '@/pages/Explore/Explore.styled';
import Breadcrumb from '@/pages/Explore/ui/Breadcrumb';
import CategorySidebar from '@/pages/Explore/ui/CategorySidebar';
import ProductsBox from '@/pages/Explore/ui/ProductsBox';
import Recipes from '@/pages/Recipes';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { ProductResponse, RecipesType } from '@/shared/types/response';

const Explore = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useSelector((state: RootState) => state.productId);

  const { data: productsData } = useFetchQuery<ProductResponse>({
    queryKey: QUERY_KEYS.products.byCategory(productId),
    url: SERVICE_URLS.PRODUCTS.BY_CATEGORY(productId),
    params: { select: 'id' },
  });
  const ProductListData = productsData?.products;

  const { data: recipesData } = useFetchQuery<RecipesType>({
    queryKey: QUERY_KEYS.recipes.list,
    url: SERVICE_URLS.RECIPES.LIST,
  });
  const RecipesData = recipesData?.recipes;

  return (
    <S.Wrapper>
      <S.MainBox>
        <Breadcrumb />

        {!params.id ? (
          <S.FlexBox>
            <CategorySidebar />

            <S.FlexColBox>
              <S.ProductsCount>
                Selected Products:{' '}
                <S.Count>
                  {location.pathname === '/recipes'
                    ? RecipesData?.length || 0
                    : ProductListData?.length || 0}
                </S.Count>
              </S.ProductsCount>

              {location.pathname !== '/recipes' ? <ProductsBox /> : <Recipes />}
            </S.FlexColBox>
          </S.FlexBox>
        ) : (
          <Outlet />
        )}
      </S.MainBox>
    </S.Wrapper>
  );
};

export default Explore;
