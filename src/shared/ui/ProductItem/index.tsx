import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { productIdSlice } from '@/app/store';
import { axiosInstance } from '@/shared/api';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { DumImg, DumText } from '@/shared/assets/styled/skeleton';
import { AddToCartSVG, EmptyCartSVG } from '@/shared/assets/SVGicons';
import { useIntersectionObserver } from '@/shared/hooks';
import { calculateOriginalPrice } from '@/shared/lib';
import { addToCart } from '@/shared/lib/cart';
import { QUERY_KEYS } from '@/shared/query/key';
import type { Product } from '@/shared/types/response';
import Toast from '@/shared/ui/Toast';

type ProductItemProps = Partial<Product> & {
  isLoading?: boolean;
};

const ProductItem = (pr: ProductItemProps) => {
  const [showToast, setShowToast] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { ref } = useIntersectionObserver();

  const handleAddToCart = () => {
    if (!pr.id || !pr.price || !pr.stock) return;

    addToCart({
      id: Number(pr.id),
      title: String(pr.title),
      price: Number(pr.price),
      thumbnail: String(pr.thumbnail),
      stock: Number(pr.stock),
    });

    setToggle(true);

    setTimeout(() => {
      setShowToast(true);
    }, 2000);
  };

  /**
   * 만든 이유
   * - 사용자가 곧 상세로 이동할 가능성이 높아(hover/focus), 상세 데이터를 미리 받아 체감 로딩을 줄인다.
   * - React Query 캐시를 그대로 쓰므로 실제 상세 진이 시 즉시 렌더 가능.
   */
  const prefetchDetail = (id: number) => {
    if (!Number.isFinite(id) || id <= 0) return;

    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.products.detail(id),
      queryFn: async () => {
        const url = SERVICE_URLS.PRODUCTS.DETAIL(id);
        return axiosInstance.get(url).then((r) => r.data);
      },
      staleTime: 1000 * 60 * 5,
    });
  };

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
            onClick={() => handleAddToCart()}
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
              loading="lazy"
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
          onMouseEnter={() => prefetchDetail(Number(pr.id))}
          onFocus={() => prefetchDetail(Number(pr.id))}
          onClick={() => handleItemSelect(String(pr.category), Number(pr.id))}
          className="w-47 h-12 text-base rounded-lg bg-black text-white no-underline delay-100 flex justify-center items-center cursor-pointer hover:bg-gray-500"
        >
          Detail
        </button>
      </div>
      {showToast && <Toast message="장바구니에 담겼어요" />}
    </div>
  );
};

export default ProductItem;
