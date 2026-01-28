import * as S from '@/pages/Mypage/MyPage.styled';
import type { AddressType } from '@/shared/types';

const AddressCard = ({
  address,
  city,
  state,
  stateCode,
  postalCode,
  country,
}: Partial<AddressType>) => {
  return (
    <S.Card>
      <S.Title>주소</S.Title>
      <S.Row>
        <S.Label>주소</S.Label>
        <S.Value>{address}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>도시/주</S.Label>
        <S.Value>
          {city}, {state} ({stateCode})
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>우편번호</S.Label>
        <S.Value>{postalCode}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>국가</S.Label>
        <S.Value>{country}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default AddressCard;
