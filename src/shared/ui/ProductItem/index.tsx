import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { productIdSlice } from '@/app/store';
import { DumImg, DumText } from '@/shared/assets/styled/skeleton';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import { useIntersectionObserver } from '@/shared/hooks';
import { calculateOriginalPrice } from '@/shared/lib';
import { ProductItemResponse } from '@/shared/types/response';
import * as S from '@/shared/ui/ProductItem/ProductItem.styled';

type ProductItemProps = Partial<ProductItemResponse> & {
  isLoading?: boolean;
};

const ProductItem = (pr: ProductItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { ref } = useIntersectionObserver();

  const handleItemSelect = (
    productId: ProductItemResponse['category'],
    id: ProductItemResponse['id'],
  ) => {
    dispatch(productIdSlice.actions.getProductId(productId));
    navigate(`/explore/${id}`);
  };

  return (
    <S.Wrapper>
      {pr?.stock === 0 && <S.SoldOutBox>SoldOut</S.SoldOutBox>}
      <S.MainBox>
        <S.IconBox>
          <S.FlexBox>
            <div>⭐️{pr?.rating}</div>
            <div style={{ marginLeft: '10px' }}>({pr?.reviews?.length})</div>
          </S.FlexBox>
          <S.CartIcon onClick={() => setToggle((pr) => !pr)}>
            {toggle ? (
              <>{AddToCartSVG({ size: '24', color: '#292d32', insideColor: 'yellowgreen' })} </>
            ) : (
              <> {EmptyCartSVG({ size: '24', color: '#292d32' })} </>
            )}
          </S.CartIcon>
          <S.MobileCartIcon onClick={() => setToggle((pr) => !pr)}>
            {toggle ? (
              <>{AddToCartSVG({ size: '20', color: '#292d32', insideColor: 'yellowgreen' })} </>
            ) : (
              <> {EmptyCartSVG({ size: '20', color: '#292d32' })} </>
            )}
          </S.MobileCartIcon>
        </S.IconBox>
        {pr.isLoading ? (
          <>
            <DumImg width="160px" height="160px" />
            <DumText width="160px" height="15px" />
            <DumText width="100px" height="15px" />
          </>
        ) : (
          <>
            <S.Img ref={ref} data-src={pr?.thumbnail} src={pr?.thumbnail} alt="thumbnail" />
            <S.Title>{pr?.title}</S.Title>
            <S.PriceBox>
              <S.Price>
                $
                {calculateOriginalPrice({
                  price: Number(pr.price),
                  discountPercentage: Number(pr.discountPercentage),
                })}
              </S.Price>
              <S.DiscountPercent>{pr?.discountPercentage}%</S.DiscountPercent>
            </S.PriceBox>
            <S.DiscountedPrice>$ {pr?.price}</S.DiscountedPrice>
          </>
        )}

        <S.Button onClick={() => handleItemSelect(String(pr.category), Number(pr.id))}>
          Detail
        </S.Button>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default ProductItem;
