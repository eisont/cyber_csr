import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { productIdSlice } from '@/app/store';
import { DumImg, DumText } from '@/shared/assets/styled/skeleton';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import { useIntersectionObserver } from '@/shared/hooks';
import { calculateOriginalPrice } from '@/shared/lib';
import { Product } from '@/shared/types/response';

type ProductItemProps = Partial<Product> & {
  isLoading?: boolean;
};

const ProductItem = (pr: ProductItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const { ref } = useIntersectionObserver();

  /**
   * 만든 이유
   * - Week2에서 목록 샅애(q/skip/limit/order)를 URL로 관리하고 있으므로, 상세 페이지로 이동해도 이 쿼리를 유지해야 '뒤로가기 UX'가 깨지지 않는다.
   */
  const handleItemSelect = (productId: Product['category'], id: Product['id']) => {
    dispatch(productIdSlice.actions.getProductId(productId));

    const query = location.search;
    navigate(`/explore/${id}${query}`);
  };

  return (
    <div className="flex justify-center items-center relative my-2.5 w-66.5 h-108 bg-[#f6f6f6] rounded-[10px] text-center">
      {pr?.stock === 0 && (
        <div className="absolute w-full h-full rounded-[10px] bg-white opacity-80 flex justify-center items-center text-4xl font-semibold cursor-default left-0 top-0">
          SoldOut
        </div>
      )}
      <div className="w-58.5 h-92.5 flex justify-between items-center flex-col">
        <div className="w-full h-8 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <div>⭐️{pr?.rating}</div>
            <div style={{ marginLeft: '10px' }}>({pr?.reviews?.length})</div>
          </div>
          <div
            className="flex justify-center items-center delay-30 cursor-pointer hover:scale-110"
            onClick={() => setToggle((pr) => !pr)}
          >
            {toggle ? (
              <>{AddToCartSVG({ size: '24', color: '#292d32', insideColor: 'yellowgreen' })} </>
            ) : (
              <> {EmptyCartSVG({ size: '24', color: '#292d32' })} </>
            )}
          </div>
        </div>
        {pr.isLoading ? (
          <>
            <DumImg width="160px" height="160px" />
            <DumText width="160px" height="15px" />
            <DumText width="100px" height="15px" />
          </>
        ) : (
          <>
            <img
              className="h-40 delay-75 hover:scale-120 cursor-pointer"
              ref={ref}
              data-src={pr?.thumbnail}
              src={pr?.thumbnail}
              alt="thumbnail"
            />
            <div className="text-lg font-medium cursor-default">{pr?.title}</div>
            <div className="flex">
              <div className="mr-1.5">
                $
                {calculateOriginalPrice({
                  price: Number(pr.price),
                  discountPercentage: Number(pr.discountPercentage),
                })}
              </div>
              <div className="mr-1.5 line-through">{pr?.discountPercentage}%</div>
            </div>
            <div className="text-[26px] font-semibold cursor-default">$ {pr?.price}</div>
          </>
        )}

        <button
          type="button"
          onClick={() => handleItemSelect(String(pr.category), Number(pr.id))}
          className="w-47 h-12 text-base rounded-lg bg-black text-white no-underline delay-100 flex justify-center items-center cursor-pointer hover:bg-gray-500"
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
