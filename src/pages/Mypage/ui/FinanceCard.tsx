import * as S from '@/pages/Mypage/MyPage.styled';
import { UserResponse } from '@/types/response';

const FinanceCard = ({ bank, crypto }: Partial<UserResponse>) => {
  const mask = (num = '') => num.replace(/\d(?=\d{4})/g, '*');
  return (
    <S.Card>
      <S.Title>금융 · Crypto</S.Title>
      <S.Row>
        <S.Label>카드</S.Label>
        <S.Value>
          {bank?.cardType} · {mask(bank?.cardNumber)} ({bank?.cardExpire})
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>통화/IBAN</S.Label>
        <S.Value>
          {bank?.currency} · {bank?.iban}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>코인/네트워크</S.Label>
        <S.Value>
          {crypto?.coin} · {crypto?.network}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>지갑</S.Label>
        <S.Value>{crypto?.wallet}</S.Value>
      </S.Row>
    </S.Card>
  );
};
export default FinanceCard;
