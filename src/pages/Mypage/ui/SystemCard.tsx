import * as S from '@/pages/Mypage/MyPage.styled';
import { UserType } from '@/shared/types/response';

const SystemCard = ({ ip, macAddress, ssn, userAgent }: Partial<UserType>) => {
  return (
    <S.Card>
      <S.Title>시스템 정보</S.Title>
      <S.Row>
        <S.Label>IP</S.Label>
        <S.Value>{ip}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>MAC</S.Label>
        <S.Value>{macAddress}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>SSN</S.Label>
        <S.Value>{ssn}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>UserAgent</S.Label>
        <S.Value>{userAgent}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default SystemCard;
