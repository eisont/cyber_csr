/**
 * 만든 이유
 * - 상품 상세 이미지 영역을 메인 이미지 + 썸네일 선택 구조로 분리한다.
 * - 이미지 선택 상태를 ProductDetail에서 분리해 책임을 명확히 한다.
 */

import { useMemo, useState } from 'react';

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

  // 썸네일 목록 구성 (중복 제거)
  const thumbnails = useMemo(() => {
    const list = [...images];
    if (thumbnail && !list.includes(thumbnail)) {
      list.unshift(thumbnail);
    }
    return list;
  }, [images, thumbnail]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-50 items-center justify-center rounded-lg bg-[#f6f6f6]">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={title}
            className="h-full w-full rounded-lg object-contain"
          />
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
                className={`h-16 w-16 shrink-0 rounded-md border transition ${isSelected ? 'border-black' : 'border-transparent'}`}
              >
                <img src={src} alt={title} className="h-full w-full rounded-md object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
