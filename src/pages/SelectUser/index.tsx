import * as S from '@/pages/SelectUser/SelectUser.styled';
import UserCard from '@/pages/SelectUser/ui/UserCard';
import { useFetch } from '@/shared/hooks';
import { UsersResponse } from '@/types/response/user.types';

const SelectUser = () => {
  const [usersData] = useFetch<UsersResponse[]>({ resource: 'users', enabled: true });

  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>유저 선택</S.Title>
        <S.UsersBox>
          {usersData?.map((el) => (
            <UserCard key={el.id} {...el} />
          ))}
        </S.UsersBox>
      </S.Main>
    </S.Wrapper>
  );
};

export default SelectUser;
