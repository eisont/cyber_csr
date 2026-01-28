import * as S from '@/pages/Mypage/MyPage.styled';
import type { UserType } from '@/shared/types';

const WorkEduCard = ({ company, university }: Partial<UserType>) => {
  return (
    <S.Card>
      <S.Title>직장 · 학력</S.Title>
      <S.Row>
        <S.Label>회사</S.Label>
        <S.Value>{company?.name}</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>부서/직함</S.Label>
        <S.Value>
          {company?.department} · {company?.title}
        </S.Value>
      </S.Row>
      <S.Row>
        <S.Label>대학교</S.Label>
        <S.Value>{university}</S.Value>
      </S.Row>
    </S.Card>
  );
};

export default WorkEduCard;
