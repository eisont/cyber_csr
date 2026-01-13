import { useEffect, useRef } from 'react';

const useIntersectionObserver = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target instanceof HTMLImageElement) {
            const img = entry.target.getAttribute('data-src');
            if (img) target.src = img;
            observer.unobserve(entry.target);
          }
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [imgRef]);

  return { ref: imgRef };
};

export default useIntersectionObserver;
