/**
 * 만든 이유
 * - 상품 상세 이미지 영역을 메인 이미지 + 썸네일 선택 구조로 분리한다.
 * - 이미지 선택 상태를 ProductDetail에서 분리해 책임을 명확히 한다.
 */

import { useEffect, useMemo, useState } from 'react';

type ProductGalleryProps = {
  thumbnail?: string;
  images?: string[];
  title: string;
};

export const ProductGallery = ({ thumbnail, images = [], title }: ProductGalleryProps) => {
  /**
   * 초기 메인 이미지 결정 규칙
   * 1. thumbnail
   * 2. images[0]
   * 3. 빈 문자열 (fallback)
   */
  const initialImage = useMemo(() => {
    if (thumbnail) return thumbnail;
    if (images.length > 0) return images[0];
    return '';
  }, [thumbnail, images]);

  const [selectedImage, setSelectedImage] = useState<string>(initialImage);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 썸네일 목록 구성 (중복 제거)
  const thumbnails = useMemo(() => {
    const list = [...images];
    if (thumbnail && !list.includes(thumbnail)) {
      list.unshift(thumbnail);
    }
    return list;
  }, [images, thumbnail]);

  /**
   * 만든 이유
   * - 모달이 열려있는 동안 배경 스크롤을 막아 UX를 안정화한다.
   * - ESC 키로 모달을 닫아 접근성과 사용성을 확보한다.
   */
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-50 items-center justify-center rounded-lg bg-[#f6f6f6]">
        {selectedImage ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="h-full w-full cursor-zoom-in"
            aria-label="이미지 확대 보기"
          >
            <img
              src={selectedImage}
              alt={title}
              className="h-full w-full rounded-lg object-contain"
            />
          </button>
        ) : (
          <div className="text-sm text-gray-400">이미지가 없습니다.</div>
        )}
      </div>

      {thumbnails.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {thumbnails.map((src) => {
            const isSelected = src === selectedImage;

            return (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className={`h-16 w-16 shrink-0 rounded-md cursor-pointer border transition ${isSelected ? 'border-black' : 'border-transparent'}`}
              >
                <img src={src} alt={title} className="h-full w-full rounded-md object-cover" />
              </button>
            );
          })}
        </div>
      )}

      {isOpen && selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="상품 이미지 확대"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={() => setIsOpen(false)} // 배경 클릭 닫기
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] rounded-lg bg-white p-3"
            onClick={(e) => e.stopPropagation()} // 콘텐츠 클릭은 닫히지 않게
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 rounded-md px-2 py-1 text-sm cursor-pointer"
              aria-label="닫기"
            >
              닫기
            </button>

            <img
              src={selectedImage}
              alt={title}
              className="max-h-[80vh] max-w-[85vw] rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
