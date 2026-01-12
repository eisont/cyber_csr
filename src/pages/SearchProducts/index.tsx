import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { DumBox } from '@/shared/assets/styled/skeleton';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import ProductItem from '@/shared/ui/ProductItem';
import { ProductItemResponse, ProductResponse } from '@/types/response';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainBox = styled.div`
  padding: 30px 0;
  width: 1140px;
  height: 100vh;
  gap: 0 16px;

  overflow-y: auto;

  display: flex;
  align-items: start;
  justify-content: start;

  flex-wrap: wrap;
`;

const SearchProducts = () => {
  const searchKeyword = useSelector((state: RootState) => state.search);
  const { data, isLoading } = useFetchQuery<ProductResponse>({
    queryKey: QUERY_KEYS.products.search(searchKeyword),
    url: SERVICE_URLS.PRODUCTS.LIST,
    params: { search: searchKeyword },
  });
  const ProductListData = data?.products ?? [];

  return (
    <Wrapper>
      <MainBox>
        {ProductListData?.length && !isLoading ? (
          <>
            {ProductListData?.map((el: ProductItemResponse) => (
              <ProductItem key={el.id} {...el} isLoading={isLoading} />
            ))}
          </>
        ) : ProductListData?.length || isLoading ? (
          <>
            {Array(4)
              .fill('')
              .map((_, i) => (
                <ProductItem key={i} isLoading={isLoading} />
              ))}
          </>
        ) : (
          <DumBox>검색 결과 없습니다.</DumBox>
        )}
      </MainBox>
    </Wrapper>
  );
};

export default SearchProducts;
