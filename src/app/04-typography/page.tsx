import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Typography',
};

const Typography = () => {
  return (
    <main>
      {/* Font Family  */}
      <div className='font-sans'>Tailwind is Awesome</div>
      <div className='font-serif'>Tailwind is Awesome</div>
      <div className='font-mono'>Tailwind is Awesome</div>

      {/* Font Size  */}
      <div className='text-xs'>Tailwind is Awesome</div>
      <div className='text-sm'>Tailwind is Awesome</div>
      <div className='text-base'>Tailwind is Awesome</div>
      <div className='text-lg'>Tailwind is Awesome</div>
      <div className='text-xl'>Tailwind is Awesome</div>
      <div className='text-2xl'>Tailwind is Awesome</div>
      <div className='text-3xl'>Tailwind is Awesome</div>

      {/* Font Weight  */}
      <div className='font-light'>Tailwind is Awesome</div>
      <div className='font-normal'>Tailwind is Awesome</div>
      <div className='font-medium'>Tailwind is Awesome</div>
      <div className='font-semibold'>Tailwind is Awesome</div>
      <div className='font-bold'>Tailwind is Awesome</div>

      {/* Letter Spacing  */}
      <div className='tracking-tighter'>Tailwind is Awesome</div>
      <div className='tracking-tight'>Tailwind is Awesome</div>
      <div className='tracking-normal'>Tailwind is Awesome</div>
      <div className='tracking-wide'>Tailwind is Awesome</div>
      <div className='tracking-wider'>Tailwind is Awesome</div>
      <div className='tracking-widest'>Tailwind is Awesome</div>

      {/* Text Alignment  */}
      <div className='text-left'>Tailwind is Awesome</div>
      <div className='text-center'>Tailwind is Awesome</div>
      <div className='text-right'>Tailwind is Awesome</div>

      {/* Text Decoration  */}
      <div className='underline decoration-blue-300 decoration-4'>
        Tailwind is Awesome
      </div>

      {/* Decoration Style  */}
      <div className='underline decoration-blue-300 decoration-double decoration-2'>
        Tailwind is Awesome
      </div>
      <div className='underline decoration-blue-300 decoration-wavy decoration-2'>
        Tailwind is Awesome
      </div>

      {/* Decoration Offset  */}
      <div className='underline decoration-blue-300 decoration-4 underline-offset-8'>
        Tailwind is Awesome
      </div>

      {/* Text Transform  */}
      <p className='normal-case'>Tailwind is Awesome</p>
      <p className='lowercase'>Tailwind is Awesome</p>
      <p className='uppercase'>Tailwind is Awesome</p>
      <p className='capitalize'>Tailwind is Awesome</p>
    </main>
  );
};

export default Typography;

`
  <!-- Font Family
  font-sans	
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  font-serif	
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
  font-mono	
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

-->

<!-- 
  Font Size
  text-xs	    font-size: 0.75rem; /* 12px */
  text-sm	    font-size: 0.875rem; /* 14px */
  text-base	  font-size: 1rem; /* 16px */
  text-lg	    font-size: 1.125rem; /* 18px */
  text-xl	    font-size: 1.25rem; /* 20px */
  text-2xl	  font-size: 1.5rem; /* 24px */
  text-3xl	  font-size: 1.875rem; /* 30px */
  text-4xl	  font-size: 2.25rem; /* 36px */
  text-5xl	  font-size: 3rem; /* 48px */
  text-6xl	  font-size: 3.75rem; /* 60px */
  text-7xl	  font-size: 4.5rem; /* 72px */
  text-8xl	  font-size: 6rem; /* 96px */
  text-9xl	  font-size: 8rem; /* 128px */ 
-->

<!-- Font Weight
  font-thin	      font-weight: 100;
  font-extralight	font-weight: 200;
  font-light	    font-weight: 300;
  font-normal	    font-weight: 400;
  font-medium	    font-weight: 500;
  font-semibold	  font-weight: 600;
  font-bold	      font-weight: 700;
  font-extrabold	font-weight: 800;
  font-black	    font-weight: 900;
-->

<!-- Letter Spacing
  tracking-tighter	letter-spacing: -0.05em;
  tracking-tight	  letter-spacing: -0.025em;
  tracking-normal	  letter-spacing: 0em;
  tracking-wide	    letter-spacing: 0.025em;
  tracking-wider	  letter-spacing: 0.05em;
  tracking-widest	  letter-spacing: 0.1em;
-->

<!-- Text Alignment
  text-left	    text-align: left;
  text-center	  text-align: center;
  text-right	  text-align: right;
  text-justify	text-align: justify;
-->

<!-- Text Decoration
  decoration-auto	      text-decoration-thickness: auto;
  decoration-from-font	text-decoration-thickness: from-font;
  decoration-0	        text-decoration-thickness: 0px;
  decoration-1	        text-decoration-thickness: 1px;
  decoration-2	        text-decoration-thickness: 2px;
  decoration-4	        text-decoration-thickness: 4px;
  decoration-8	        text-decoration-thickness: 8px;
-->

<!-- Text Transform
  uppercase	  text-transform: uppercase;
  lowercase	  text-transform: lowercase;
  capitalize	text-transform: capitalize;
  normal-case	text-transform: none;
-->
`;
