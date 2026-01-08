import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { RootState } from '@/app/store';
import * as S from '@/pages/Explore/ui/Breadcrumb/Breadcrumb.styled';
import { DumText } from '@/shared/assets/styled/skeleton';
import { Arrow24pxSVG } from '@/shared/assets/SVGicons';
import { useFetch } from '@/shared/hooks';
import { kebabToTitleCase } from '@/shared/lib';
import { ProductItemResponse } from '@/types/response';

const Breadcrumb = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useSelector((state: RootState) => state.productId);

  const [ItemTitleData, isLoading] = useFetch<Pick<ProductItemResponse, 'id' | 'title'>>({
    resource: 'products',
    endPoint: [Number(params.id)],
    query: { select: 'title' },
    enabled: true,
  });

  return (
    <S.Wrapper>
      <S.Menu to="/">Home</S.Menu>
      <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
      {location.pathname === '/recipes' ? (
        <S.ProductItemMenu params={'true'}>Recipes</S.ProductItemMenu>
      ) : (
        <>
          <S.Menu to="/Explore">Products</S.Menu>
          <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
          <S.ProductAllMenu to="/Explore" params={String(params.id)}>
            {kebabToTitleCase(productId)}
          </S.ProductAllMenu>

          {params.id && (
            <>
              <S.Arrow>{Arrow24pxSVG({ size: '24', color: '#a4a4a4' })}</S.Arrow>
              {isLoading ? (
                <DumText width="160px" height="10px" />
              ) : (
                <S.ProductItemMenu params={params.id}>{ItemTitleData?.title}</S.ProductItemMenu>
              )}
            </>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export default Breadcrumb;
