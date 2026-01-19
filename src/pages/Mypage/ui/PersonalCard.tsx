import * as S from '@/pages/Mypage/MyPage.styled';
import type { UserType } from '@/shared/types/response';

const PersonalCard = ({
  email,
  phone,
  birthDate,
  eyeColor,
  hair,
  height,
  weight,
}: Partial<UserType>) => {
  return (
    <S.Card>
      <S.Title>개인 정보</S.Title>
      <S.Row>
        <S.Label>이메일</S.Label>
        <S.Value>{email}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>전화</S.Label>
        <S.Value>{phone}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>생년월일</S.Label>
        <S.Value>{birthDate}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>눈/머리</S.Label>
        <S.Value>
          {eyeColor} · {hair?.color}/{hair?.type}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>키/몸무게</S.Label>
        <S.Value>
          {height}cm · {weight}kg
        </S.Value>
      </S.Row>
    </S.Card>
  );
};

export default PersonalCard;
