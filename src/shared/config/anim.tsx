const slowSpeed = 800;
const normalSpeed = 600;
const fastSpeed = 400;

export const animSlideOut = (
  speed: number = fastSpeed, 
  delay: number = 0,
) => Object.fromEntries(new Map([
  [`data-aos`, `ml-slide-out`],
  [`data-aos-easing`, `ease-in-out-sine`],
  [`data-aos-duration`, `${speed}`],
  [`data-aos-delay`, `${delay}`],

]));

export const animSlideUp = (
  speed: number = fastSpeed, 
  delay: number = 0,
) => Object.fromEntries(new Map([
  [`data-aos`, `ml-slide-up`],
  [`data-aos-easing`, `ease-in-out-sine`],
  [`data-aos-duration`, `${speed}`],
  [`data-aos-delay`, `${delay}`],
]));

export const animSlideDown = (
  speed: number = fastSpeed, 
  delay: number = 0,
) => Object.fromEntries(new Map([
  [`data-aos`, `ml-slide-down`],
  [`data-aos-easing`, `ease-in-out-sine`],
  [`data-aos-duration`, `${speed}`],
  [`data-aos-delay`, `${delay}`],
]));

export const animZoomOut = (
  speed: number = normalSpeed, 
  delay: number = 0,
) => Object.fromEntries(new Map([
  [`data-aos`, `zoom-out`],
  [`data-aos-easing`, `ease-in-out-sine`],
  [`data-aos-duration`, `${speed}`],
  [`data-aos-delay`, `${delay}`],
]));

export const animFadeUp = (
  speed: number = normalSpeed, 
  delay: number = 0,
) => Object.fromEntries(new Map([
  [`data-aos`, `ml-fade-up`],
  [`data-aos-easing`, `ease-in-out-sine`],
  [`data-aos-duration`, `${speed}`],
  [`data-aos-delay`, `${delay}`],
]));

export const animFadeIn = (
  speed: number = slowSpeed, 
  delay: number = 0,
) => Object.fromEntries(new Map([
  [`data-aos`, `fade-in`],
  [`data-aos-easing`, `ease-in-out-sine`],
  [`data-aos-duration`, `${speed}`],
  [`data-aos-delay`, `${delay}`],
]));
