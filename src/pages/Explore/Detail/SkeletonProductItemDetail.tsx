import * as S from '@/pages/Explore/Detail/ui/ProductItemDetail/ProductItemDetail.styled';
import { DumText, DumImg } from '@/shared/assets/styled/skeleton';

const SkeletonProductItemDetail = () => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>
          <DumText width="400px" height="46px" />
        </S.Title>
        <S.TagsBox>
          <S.Tags>
            <DumText width="50px" height="17px" />
          </S.Tags>
        </S.TagsBox>
        <S.SubTitleBox>
          <S.SubTitle>
            <S.Text>브랜드:</S.Text> <DumText width="50px" height="15px" />
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>카테고리:</S.Text>
            <DumText width="50px" height="15px" />
          </S.SubTitle>
          <S.SubTitle>
            <S.Text>SKU:</S.Text>
            <DumText width="50px" height="15px" />
          </S.SubTitle>
        </S.SubTitleBox>

        <S.ContentBox>
          <S.ImgBox>
            <DumImg width="500px" height="500px" />
          </S.ImgBox>

          <S.RBox>
            <div>
              <S.FlexBox>
                <S.OriginalPrice>
                  <DumText width="70px" height="30px" />
                </S.OriginalPrice>
                <S.DiscountPercentage>
                  <DumText width="50px" height="15px" />%
                </S.DiscountPercentage>
              </S.FlexBox>
              <S.Price>
                $<DumText width="100px" height="20px" />
              </S.Price>
              <S.FlexBox>
                <S.Tt>
                  <S.Text>재고:</S.Text> <DumText width="50px" height="20px" />
                </S.Tt>
                <S.Tt>
                  <S.Text>상태:</S.Text> <DumText width="50px" height="20px" />
                </S.Tt>
              </S.FlexBox>
              <S.Tt>
                <S.Text>평점:</S.Text>⭐️ <DumText width="50px" height="20px" />
              </S.Tt>

              <S.Description>
                <DumText width="550px" height="60px" />
              </S.Description>
              <S.Tt>
                크기: W: <DumText width="50px" height="10px" /> x H:{' '}
                <DumText width="50px" height="10px" />x D: <DumText width="50px" height="10px" />
              </S.Tt>
              <S.Tt>
                무게: <DumText width="30px" height="15px" />
                kg
              </S.Tt>
              <S.Tt>
                배송정보: <DumText width="100px" height="15px" />
              </S.Tt>
              <S.Tt>
                반품정보: <DumText width="100px" height="15px" />
              </S.Tt>
              <S.Tt>
                보증정보: <DumText width="100px" height="15px" />
              </S.Tt>
            </div>
            <S.FlexBox>
              <S.CartBt>장바구니 담기</S.CartBt>
            </S.FlexBox>
          </S.RBox>
        </S.ContentBox>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default SkeletonProductItemDetail;
