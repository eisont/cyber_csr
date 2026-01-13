import { useState } from 'react';

import * as S from '@/pages/Mypage/MyPage.styled';
import {
  AddressCard,
  FinanceCard,
  PersonalCard,
  ProfileCard,
  SystemCard,
  WorkEduCard,
} from '@/pages/Mypage/ui';
import CartCard from '@/pages/Mypage/ui/Cart';
import { useMeQuery } from '@/shared/hooks';

const MyPage = () => {
  const [toggle, setToggle] = useState(false);
  const { data: userInfo } = useMeQuery();

  return (
    <S.Wrapper>
      <S.Grid>
        <div>
          <ProfileCard user={userInfo} setToggle={setToggle} />
        </div>
        <div>
          {toggle && (
            <>
              <PersonalCard {...userInfo} />
              <AddressCard {...userInfo?.address} />
              <WorkEduCard {...userInfo} />
              <FinanceCard {...userInfo} />
              <SystemCard {...userInfo} />
            </>
          )}
          {!toggle && <CartCard />}
        </div>
      </S.Grid>
    </S.Wrapper>
  );
};

export default MyPage;
