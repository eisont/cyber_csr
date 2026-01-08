import styled from '@emotion/styled';

import * as S from '@/pages/Mypage/MyPage.styled';
import { useFetch } from '@/shared/hooks';
import { ProductsType } from '@/types/response/cart.types';

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f2f2f2;
  &:last-child {
    border-bottom: 0;
  }
`;

const Thumb = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 8px;
  background: #fafafa;
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;

const Price = styled.div`
  font-weight: 700;
  white-space: nowrap;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-weight: 700;
`;

const CartCard = () => {
  const [ProductItem] = useFetch<ProductsType[]>({ resource: 'cart', path: '9', enabled: true });

  const totalQty = ProductItem?.reduce((sum, it) => sum + (it.quantity ?? 1), 0);
  const totalPrice = ProductItem?.reduce(
    (sum, it) => sum + (it.price ?? 0) * (it.quantity ?? 1),
    0,
  );

  return (
    <S.Card>
      <S.Title>장바구니</S.Title>

      {ProductItem?.length === 0 ? (
        <div>장바구니가 비어 있어요.</div>
      ) : (
        <>
          {ProductItem?.map((it) => (
            <ItemRow key={it.id}>
              <Thumb src={it.thumbnail} alt={it.title} />
              <div>
                <Title>{it.title}</Title>
                <div style={{ color: '#888', fontSize: 12 }}>
                  수량 {it.quantity ?? 1} · 개당 ${it.price?.toLocaleString?.() ?? it.price}
                </div>
              </div>
              <Price>${((it.price ?? 0) * (it.quantity ?? 1))?.toLocaleString()}</Price>
            </ItemRow>
          ))}

          <Summary>
            <div>총 {totalQty}개</div>
            <div>${totalPrice?.toLocaleString()}</div>
          </Summary>
        </>
      )}
    </S.Card>
  );
};

export default CartCard;
