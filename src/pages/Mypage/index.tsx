import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
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

const MyPage = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const [toggle, setToggle] = useState(false);

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
