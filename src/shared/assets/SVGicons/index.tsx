// Logo
type WHCProps = { width: string; height: string; color: string };
type SCProps = { size: string; color: string };
type SCCProps = { size: string; color: string; color2: string };
type SCIProps = { size: string; color: string; insideColor: string };

export const LogoSVG = ({ width, height, color }: WHCProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 96 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.42812 9.39935L8.91177 7.39026L6.96725 4.02409H25.2549L16.114 19.862L14.1695 16.49L10.6859 18.505L16.114 27.9044L32.2221 0H0L5.42812 9.39935Z"
      fill={color}
    />
    <path
      d="M44.736 21.488C43.68 22.76 42.072 23.408 40.152 23.408C36.36 23.408 34.056 20.96 34.056 17.408C34.056 13.88 36.384 11.432 40.152 11.432C41.976 11.432 43.728 12.128 44.784 13.4L42.888 15.392C42.12 14.552 41.28 14.216 40.152 14.216C38.544 14.216 37.152 15.512 37.152 17.408C37.152 19.472 38.448 20.624 40.152 20.624C41.16 20.624 42.312 20.24 42.936 19.448L44.736 21.488Z"
      fill={color}
    />
    <path
      d="M59.3568 11.72L52.3728 28.28H48.9408L51.1728 23.12L46.3488 11.72H49.7568L52.1568 17.816L52.8528 20L53.5248 17.816L55.9249 11.72H59.3568Z"
      fill={color}
    />
    <path
      d="M67.2028 14.264C65.4748 14.264 64.2268 15.584 64.2268 17.384C64.2268 19.16 65.4748 20.48 67.2028 20.48C68.8828 20.48 70.0348 19.232 70.0348 17.384C70.0348 15.512 68.8828 14.264 67.2028 14.264ZM61.2268 23V5.408H64.2748V11.672L64.2268 12.488C64.7308 11.816 66.2668 11.432 67.3228 11.432C71.0908 11.432 73.2028 14.192 73.2028 17.384C73.2028 20.984 71.0428 23.312 67.3228 23.312C66.4108 23.312 64.9468 22.88 64.3468 22.16L64.3708 22.808V23H61.2268Z"
      fill={color}
    />
    <path
      d="M85.8911 21.56C85.0031 22.712 82.9631 23.408 81.2111 23.408C77.3951 23.408 75.2591 20.792 75.2591 17.408C75.2591 13.952 77.3711 11.432 81.0911 11.432C84.7871 11.432 86.8991 13.952 86.8991 17.408C86.8991 17.792 86.8991 18.032 86.8751 18.368H78.3791C78.5471 19.784 79.6031 20.672 81.2111 20.672C82.3631 20.672 83.4431 20.288 84.1151 19.544L85.8911 21.56ZM78.4271 16.304H83.7071C83.5631 15.032 82.5071 14.168 81.0911 14.168C79.6751 14.168 78.5471 15.032 78.4271 16.304Z"
      fill={color}
    />
    <path
      d="M95.3049 14.552C94.6809 14.336 94.1289 14.264 93.4809 14.264C93.0489 14.264 92.6889 14.288 92.3529 14.432V23H89.2569V12.224C90.1929 11.744 91.8009 11.408 93.3609 11.408C94.0329 11.408 95.2329 11.48 95.9529 11.744L95.3049 14.552Z"
      fill={color}
    />
  </svg>
);

// Footer
export const TiktokSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.8836 3.358C11.2243 2.59144 10.8788 1.60104 10.9063 0.592723L8.4425 0.533203C8.4425 0.533203 8.4425 0.638323 8.4425 0.780083V10.6602C8.4769 13.786 3.53834 13.7102 3.92906 10.2551C4.16794 8.88136 5.6441 8.03592 6.95578 8.51384V5.99992C4.1001 5.50264 1.39386 7.7756 1.42234 10.6713C1.67194 16.9513 10.6793 16.9521 10.9292 10.6713C10.8663 10.4465 10.9015 6.26152 10.8926 5.90856C12.0129 6.60568 13.3164 6.95416 14.6366 6.90952V4.3132C13.4161 4.3132 12.4847 3.98872 11.8836 3.358Z"
      fill={color}
    />
  </svg>
);

export const FacebookSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.84757 3.81794C8.84757 3.98169 8.84757 4.51541 8.84757 5.27366H11.4546L11.1719 7.59763H8.84757C8.84757 11.1816 8.84757 15.9843 8.84757 15.9843H5.76238C5.76238 15.9843 5.76238 11.2452 5.76238 7.59763H4.15479V5.27366H5.76238C5.76238 4.35204 5.76238 3.69669 5.76238 3.51422C5.76238 2.64485 5.69688 2.23235 6.06629 1.55866C6.43588 0.885005 7.47838 -0.00543266 9.28147 0.0160048C11.085 0.0382236 11.8452 0.211724 11.8452 0.211724L11.4546 2.6885C11.4546 2.6885 10.3029 2.38441 9.73763 2.49279C9.1731 2.60119 8.84757 2.94894 8.84757 3.81794Z"
      fill={color}
    />
  </svg>
);

export const InstagramSVG = ({ size, color, color2 }: SCCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_5763)">
      <path
        d="M7.99992 14.6667C6.57042 14.6667 5.54174 14.666 4.73972 14.5882C3.94689 14.5113 3.43972 14.3636 3.03497 14.1093C2.57237 13.8187 2.1812 13.4275 1.89052 12.965C1.63628 12.5602 1.4885 12.053 1.41174 11.2602C1.33396 10.4582 1.33325 9.4295 1.33325 8C1.33325 6.57051 1.33396 5.54182 1.41174 4.7398C1.4885 3.94697 1.63628 3.4398 1.89052 3.03505C2.18119 2.57244 2.57236 2.18127 3.03497 1.89061C3.43972 1.63637 3.94689 1.48859 4.73972 1.41182C5.54164 1.33404 6.57032 1.33334 7.99992 1.33334C9.42941 1.33334 10.4581 1.33404 11.2601 1.41182C12.0529 1.48859 12.5601 1.63637 12.9649 1.89061C13.4274 2.18128 13.8186 2.57245 14.1092 3.03505C14.3636 3.4398 14.5112 3.94697 14.5881 4.7398C14.6659 5.54182 14.6666 6.57051 14.6666 8C14.6666 9.4295 14.6659 10.4582 14.5881 11.2602C14.5112 12.053 14.3636 12.5602 14.1092 12.965C13.8186 13.4275 13.4274 13.8186 12.9649 14.1093C12.5601 14.3636 12.0529 14.5113 11.2601 14.5882C10.4581 14.666 9.42941 14.6667 7.99992 14.6667Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M7.99992 11.3333C9.47268 11.3333 10.6666 10.1394 10.6666 8.66667C10.6666 7.19391 9.47268 6 7.99992 6C6.52716 6 5.33325 7.19391 5.33325 8.66667C5.33325 10.1394 6.52716 11.3333 7.99992 11.3333Z"
        fill={color}
        stroke={color2}
        strokeWidth="2"
      />
      <path
        d="M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_5763">
        <rect width={size} height={size} fill={color} />
      </clipPath>
    </defs>
  </svg>
);

export const TwitterSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z"
      fill={color}
    />
  </svg>
);

export const SearchSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5692 22.7198L27.2 27.1998M15.2 9.5998C17.851 9.5998 20 11.7488 20 14.3998M25.7067 15.2531C25.7067 21.0264 21.0266 25.7065 15.2534 25.7065C9.48017 25.7065 4.80005 21.0264 4.80005 15.2531C4.80005 9.47992 9.48017 4.7998 15.2534 4.7998C21.0266 4.7998 25.7067 9.47992 25.7067 15.2531Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export const Arrow24pxSVG = ({ size, color }: SCProps) => (
  // stroke='#A4A4A4'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 6L15 12L9 18" stroke={color} />
  </svg>
);

export const ExpandDownSVG = ({ size, color }: SCProps) => (
  // stroke='#191919'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 9L12 15L6 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ViewSVG = ({ size, color }: SCProps) => (
  // stroke='#979797'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3.5" stroke={color} />
    <path
      d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
      stroke={color}
    />
  </svg>
);

export const ToEditSVG = ({ size, color }: SCProps) => (
  // fill = '#222222'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67153 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27312L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87628 11.7269 8.27312Z"
      fill={color}
    />
  </svg>
);

export const SmartWatchesSVG = ({ size, color }: SCProps) => (
  // fill = '#2E2E2E'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 7C7.89543 7 7 7.89543 7 9V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7H9ZM5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 17C9.55228 17 10 17.4477 10 18V20H14V18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21V18C8 17.4477 8.44772 17 9 17Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6V4H10V6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6V3Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3571 8.5C10.6332 8.5 10.8571 8.72386 10.8571 9V14.5C10.8571 14.7761 10.6332 15 10.3571 15C10.0809 15 9.85706 14.7761 9.85706 14.5V9C9.85706 8.72386 10.0809 8.5 10.3571 8.5Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3571 11C12.6332 11 12.8571 11.2239 12.8571 11.5V14.5C12.8571 14.7761 12.6332 15 12.3571 15C12.0809 15 11.8571 14.7761 11.8571 14.5V11.5C11.8571 11.2239 12.0809 11 12.3571 11Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3571 10C14.6332 10 14.8571 10.2239 14.8571 10.5V14.5C14.8571 14.7761 14.6332 15 14.3571 15C14.0809 15 13.8571 14.7761 13.8571 14.5V10.5C13.8571 10.2239 14.0809 10 14.3571 10Z"
      fill={color}
    />
  </svg>
);
export const PlusSVG = ({ size, color }: SCProps) => (
  // fill='#222222'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z"
      fill={color}
    />
  </svg>
);
export const PhonesSVG = ({ size, color }: SCProps) => (
  // fill='#2E2E2E'

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4V2ZM13.3438 4C13.896 4 14.3438 3.55228 14.3438 3C14.3438 2.44772 13.896 2 13.3438 2V4ZM13 18.8594C13 18.3071 12.5523 17.8594 12 17.8594C11.4477 17.8594 11 18.3071 11 18.8594H13ZM11 18.8702C11 19.4225 11.4477 19.8702 12 19.8702C12.5523 19.8702 13 19.4225 13 18.8702H11ZM7.3125 3.625H16.6875V1.625H7.3125V3.625ZM16.6875 3.625C16.7824 3.625 16.8594 3.70195 16.8594 3.79688H18.8594C18.8594 2.59738 17.887 1.625 16.6875 1.625V3.625ZM16.8594 3.79688V20.2031H18.8594V3.79688H16.8594ZM16.8594 20.2031C16.8594 20.298 16.7824 20.375 16.6875 20.375V22.375C17.887 22.375 18.8594 21.4026 18.8594 20.2031H16.8594ZM16.6875 20.375H7.3125V22.375H16.6875V20.375ZM7.3125 20.375C7.21758 20.375 7.14062 20.298 7.14062 20.2031H5.14062C5.14062 21.4026 6.11301 22.375 7.3125 22.375V20.375ZM7.14062 20.2031V3.79688H5.14062V20.2031H7.14062ZM7.14062 3.79688C7.14062 3.70195 7.21758 3.625 7.3125 3.625V1.625C6.11301 1.625 5.14062 2.59738 5.14062 3.79688H7.14062ZM11 4H13.3438V2H11V4ZM11 18.8594V18.8702H13V18.8594H11ZM6.5 17.5H17.5V15.5H6.5V17.5Z"
      fill={color}
    />
  </svg>
);

export const EmptyCartSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4955 12H15.5045"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.49451 12H8.50349"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const AddToCartSVG = ({ size, color, insideColor }: SCIProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.62 16L11.12 17.5L14.37 14.5"
      stroke={insideColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.81 2L5.19 5.63"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.19 2L18.81 5.63"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const FavoritesSVG = ({ size, color }: SCProps) => (
  // stroke = #919191

  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserSVG = ({ size, color }: SCProps) => (
  // stroke = #191919"

  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowSVG = ({ size, color }: SCProps) => (
  // fill='#2E2E2E'

  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3333 27.6667C21.0678 27.6679 20.8131 27.5622 20.6266 27.3733L9.95993 16.7067C9.57 16.3162 9.57 15.6838 9.95993 15.2933L20.6266 4.62667C21.0206 4.25952 21.6346 4.27035 22.0154 4.65117C22.3962 5.03199 22.4071 5.64599 22.0399 6.04L12.0799 16L22.0399 25.96C22.4299 26.3504 22.4299 26.9829 22.0399 27.3733C21.8534 27.5622 21.5987 27.6679 21.3333 27.6667Z"
      fill={color}
    />
  </svg>
);

export const BagSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7467 2.66663L6.92001 7.50663"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.2533 2.66663L25.08 7.50663"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66666 10.4667C2.66666 8.00005 3.98666 7.80005 5.62666 7.80005H26.3733C28.0133 7.80005 29.3333 8.00005 29.3333 10.4667C29.3333 13.3334 28.0133 13.1334 26.3733 13.1334H5.62666C3.98666 13.1334 2.66666 13.3334 2.66666 10.4667Z"
      stroke="#292D32"
      strokeWidth="1.5"
    />
    <path d="M13.0133 18.6666V23.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19.1467 18.6666V23.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M4.66666 13.3334L6.54666 24.8534C6.97332 27.44 7.99999 29.3334 11.8133 29.3334H19.8533C24 29.3334 24.6133 27.52 25.0933 25.0134L27.3333 13.3334"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WomanOutlineSVG = ({ size, color }: SCProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368M183 274a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <circle
      cx="256"
      cy="56"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M208 192l-48 160h192l-48-160"
    />
  </svg>
);
export const ManOutlineSVG = ({ size, color }: SCProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M208 208v264a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M256 336v136a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M208 192v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88a48 48 0 0148-48h96a48 48 0 0148 48v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <circle
      cx="256"
      cy="56"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
);
export const LaptopSVG = ({ size, color }: SCProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="48"
      y="96"
      width="416"
      height="304"
      rx="32.14"
      ry="32.14"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M16 416h480"
    />
  </svg>
);
export const FastFoodOutlineSVG = ({ size, color }: SCProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M368 112l16-64 47-16"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M224 112h256"
    />
  </svg>
);
export const CarSportsOutlineSVG = ({ size, color }: SCProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zM56 384h56v16H56z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zM431.57 243.05a3.23 3.23 0 00-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 00-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0052.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 00.49-16.51zM80.43 243.05a3.23 3.23 0 013.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0130.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 01-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 01-.49-16.51z" />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M432 192h16M64 192h16M78 211s46.35-12 178-12 178 12 178 12"
    />
  </svg>
);
export const BaseballOutlineSVG = ({ size, color }: SCProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M294.25 108.6l-60.57 17.59M317.13 156.11l-51.5 36.4M355.89 194.87l-36.4 51.5M403.4 217.75l-17.59 60.57"
    />
    <circle
      cx="256"
      cy="256"
      r="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M432.94 255.05a192 192 0 01-176.31-180.7M108.54 294.31l17.59-60.57M156.05 317.19l36.4-51.5M194.81 355.95l51.5-36.4M217.69 403.46l60.57-17.59M255 433.61A192 192 0 0074.29 256.69"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

export const CloseSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 6L6 18" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L18 18" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MenuSVG = ({ size, color }: SCProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 18H4M20 12H4M20 6H4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
