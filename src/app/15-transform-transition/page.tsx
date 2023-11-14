import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transform & Transition',
};

const TransformAndTransition = () => {
  return (
    <main>
      {/* No Transition  */}
      <button className='m-24 rounded bg-blue-500 px-8 py-2 text-white hover:bg-blue-700'>
        Click me
      </button>

      {/* Transition  */}

      {/* Transition & Transform  */}

      {/* Transform & Transition  */}
    </main>
  );
};

export default TransformAndTransition;

`
<!-- Transition Property
  transition-none	            
  transition-property: none;

  transition-all	            
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition	
  transition-property: color, background-color, border-color, 
  text-decoration-color, fill, stroke, opacity, box-shadow, 
  transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-colors	
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-opacity	
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-shadow	
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-transform	transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
-->

<!-- 
  Duration
  duration-75	    transition-duration: 75ms;
  duration-100	  transition-duration: 100ms;
  duration-150	  transition-duration: 150ms;
  duration-200	  transition-duration: 200ms;
  duration-300	  transition-duration: 300ms;
  duration-500	  transition-duration: 500ms;
  duration-700	  transition-duration: 700ms;
  duration-1000	  transition-duration: 1000ms;
 -->

<!-- Timing Function
  ease-linear	      transition-timing-function: linear;
  ease-in	          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  ease-out	        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ease-in-out	      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
-->

<!-- Delay
  delay-75	  transition-delay: 75ms;
  delay-100	  transition-delay: 100ms;
  delay-150	  transition-delay: 150ms;
  delay-200	  transition-delay: 200ms;
  delay-300	  transition-delay: 300ms;
  delay-500	  transition-delay: 500ms;
  delay-700	  transition-delay: 700ms;
  delay-1000	transition-delay: 1000ms;
-->

<!-- TRANSFORMS -->

<!-- Scale
  scale-0	    transform: scale(0);
  scale-x-0	  transform: scaleX(0);
  scale-y-0	  transform: scaleY(0);
  scale-50	  transform: scale(.5);
  scale-x-50	transform: scaleX(.5);
  scale-y-50	transform: scaleY(.5);
  scale-75	  transform: scale(.75);
  scale-x-75	transform: scaleX(.75);
  scale-y-75	transform: scaleY(.75);
  scale-90	  transform: scale(.9);
  scale-x-90	transform: scaleX(.9);
  scale-y-90	transform: scaleY(.9);
  scale-95	  transform: scale(.95);
  scale-x-95	transform: scaleX(.95);
  scale-y-95	transform: scaleY(.95);
  scale-100	  transform: scale(1);
  scale-x-100	transform: scaleX(1);
  scale-y-100	transform: scaleY(1);
  scale-105	  transform: scale(1.05);
  scale-x-105	transform: scaleX(1.05);
  scale-y-105	transform: scaleY(1.05);
  scale-110	  transform: scale(1.1);
  scale-x-110	transform: scaleX(1.1);
  scale-y-110	transform: scaleY(1.1);
  scale-125	  transform: scale(1.25);
  scale-x-125	transform: scaleX(1.25);
  scale-y-125	transform: scaleY(1.25);
  scale-150	  transform: scale(1.5);
  scale-x-150	transform: scaleX(1.5);
  scale-y-150	transform: scaleY(1.5);
-->

<!-- Rotate
  rotate-0	  transform: rotate(0deg);
  rotate-1	  transform: rotate(1deg);
  rotate-2	  transform: rotate(2deg);
  rotate-3	  transform: rotate(3deg);
  rotate-6	  transform: rotate(6deg);
  rotate-12	  transform: rotate(12deg);
  rotate-45	  transform: rotate(45deg);
  rotate-90	  transform: rotate(90deg);
  rotate-180	transform: rotate(180deg);
-->

<!-- Translate
  translate-x-0	transform: translateX(0px);
  translate-y-0	transform: translateY(0px);
  translate-x-px	transform: translateX(1px);
  translate-y-px	transform: translateY(1px);
  translate-x-0.5	transform: translateX(0.125rem);
  translate-y-0.5	transform: translateY(0.125rem);
  translate-x-1	transform: translateX(0.25rem);
  translate-y-1	transform: translateY(0.25rem);
  translate-x-1.5	transform: translateX(0.375rem);
  translate-y-1.5	transform: translateY(0.375rem);
  translate-x-2	transform: translateX(0.5rem);
  translate-y-2	transform: translateY(0.5rem);
  translate-x-2.5	transform: translateX(0.625rem);
  translate-y-2.5	transform: translateY(0.625rem);
  translate-x-3	transform: translateX(0.75rem);
  translate-y-3	transform: translateY(0.75rem);
  translate-x-3.5	transform: translateX(0.875rem);
  translate-y-3.5	transform: translateY(0.875rem);
  translate-x-4	transform: translateX(1rem);
  translate-y-4	transform: translateY(1rem);
  translate-x-5	transform: translateX(1.25rem);
  translate-y-5	transform: translateY(1.25rem);
  translate-x-6	transform: translateX(1.5rem);
  translate-y-6	transform: translateY(1.5rem);
  translate-x-7	transform: translateX(1.75rem);
  translate-y-7	transform: translateY(1.75rem);
  translate-x-8	transform: translateX(2rem);
  translate-y-8	transform: translateY(2rem);
  translate-x-9	transform: translateX(2.25rem);
  translate-y-9	transform: translateY(2.25rem);
  translate-x-10	transform: translateX(2.5rem);
  translate-y-10	transform: translateY(2.5rem);
  translate-x-11	transform: translateX(2.75rem);
  translate-y-11	transform: translateY(2.75rem);
  translate-x-12	transform: translateX(3rem);
  translate-y-12	transform: translateY(3rem);
  translate-x-14	transform: translateX(3.5rem);
  translate-y-14	transform: translateY(3.5rem);
  translate-x-16	transform: translateX(4rem);
  translate-y-16	transform: translateY(4rem);
  translate-x-20	transform: translateX(5rem);
  translate-y-20	transform: translateY(5rem);
  translate-x-24	transform: translateX(6rem);
  translate-y-24	transform: translateY(6rem);
  translate-x-28	transform: translateX(7rem);
  translate-y-28	transform: translateY(7rem);
  translate-x-32	transform: translateX(8rem);
  translate-y-32	transform: translateY(8rem);
  translate-x-36	transform: translateX(9rem);
  translate-y-36	transform: translateY(9rem);
  translate-x-40	transform: translateX(10rem);
  translate-y-40	transform: translateY(10rem);
  translate-x-44	transform: translateX(11rem);
  translate-y-44	transform: translateY(11rem);
  translate-x-48	transform: translateX(12rem);
  translate-y-48	transform: translateY(12rem);
  translate-x-52	transform: translateX(13rem);
  translate-y-52	transform: translateY(13rem);
  translate-x-56	transform: translateX(14rem);
  translate-y-56	transform: translateY(14rem);
  translate-x-60	transform: translateX(15rem);
  translate-y-60	transform: translateY(15rem);
  translate-x-64	transform: translateX(16rem);
  translate-y-64	transform: translateY(16rem);
  translate-x-72	transform: translateX(18rem);
  translate-y-72	transform: translateY(18rem);
  translate-x-80	transform: translateX(20rem);
  translate-y-80	transform: translateY(20rem);
  translate-x-96	transform: translateX(24rem);
  translate-y-96	transform: translateY(24rem);
  translate-x-1/2	transform: translateX(50%);
  translate-x-1/3	transform: translateX(33.333333%);
  translate-x-2/3	transform: translateX(66.666667%);
  translate-x-1/4	transform: translateX(25%);
  translate-x-2/4	transform: translateX(50%);
  translate-x-3/4	transform: translateX(75%);
  translate-x-full	transform: translateX(100%);
  translate-y-1/2	transform: translateY(50%);
  translate-y-1/3	transform: translateY(33.333333%);
  translate-y-2/3	transform: translateY(66.666667%);
  translate-y-1/4	transform: translateY(25%);
  translate-y-2/4	transform: translateY(50%);
  translate-y-3/4	transform: translateY(75%);
  translate-y-full	transform: translateY(100%);
-->

<!-- Skew
  skew-x-0	transform: skewX(0deg);
  skew-y-0	transform: skewY(0deg);
  skew-x-1	transform: skewX(1deg);
  skew-y-1	transform: skewY(1deg);
  skew-x-2	transform: skewX(2deg);
  skew-y-2	transform: skewY(2deg);
  skew-x-3	transform: skewX(3deg);
  skew-y-3	transform: skewY(3deg);
  skew-x-6	transform: skewX(6deg);
  skew-y-6	transform: skewY(6deg);
  skew-x-12	transform: skewX(12deg);
  skew-y-12	transform: skewY(12deg);
-->

<!-- Transform Origin
  origin-center	transform-origin: center;
  origin-top	transform-origin: top;
  origin-top-right	transform-origin: top right;
  origin-right	transform-origin: right;
  origin-bottom-right	transform-origin: bottom right;
  origin-bottom	transform-origin: bottom;
  origin-bottom-left	transform-origin: bottom left;
  origin-left	transform-origin: left;
  origin-top-left	transform-origin: top left;
-->
`;
