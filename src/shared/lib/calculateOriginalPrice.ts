type calculateOriginalPriceProps = {
  price: number;
  discountPercentage: number;
};

export const calculateOriginalPrice = ({
  price,
  discountPercentage,
}: calculateOriginalPriceProps) => {
  const num = price / (1 - discountPercentage / 100);
  const result = num.toFixed(2);
  return result;
};
