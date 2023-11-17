import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backgrounds & Shadows',
};

const BackgroundsAndShadows = () => {
  return (
    <main>
      {/* Background Classes  */}
      <div
        style={{
          backgroundImage: `url("assets/img/img1.jpg")`,
        }}
        // className='h-64 w-[1000px] bg-no-repeat'
        className='h-64 w-72 bg-cover bg-center bg-no-repeat'
      ></div>

      {/* Gradients  */}
      <div className='h-24 bg-gradient-to-r from-cyan-500 to-purple-500'></div>
      <div className='h-24 bg-gradient-to-l from-cyan-500 to-purple-500'></div>
      <div className='h-24 bg-gradient-to-tr from-yellow-300 to-red-500'></div>
      <div className='h-24 bg-gradient-to-br from-yellow-300 to-red-500'></div>
      <div className='h-24 bg-gradient-to-bl from-green-500 to-pink-500'></div>

      {/* Shadows  */}
      <div className='ml-4 mt-6 w-96 p-3 shadow'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        dignissimos assumenda deserunt doloribus neque labore odio eveniet.
        Expedita, eum?
      </div>
      <div className='ml-4 mt-6 w-96 p-3 shadow-md'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        dignissimos assumenda deserunt doloribus neque labore odio eveniet.
        Expedita, eum?
      </div>
      <div className='ml-4 mt-6 w-96 p-3 shadow-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        dignissimos assumenda deserunt doloribus neque labore odio eveniet.
        Expedita, eum?
      </div>
      <div className='ml-4 mt-6 w-96 p-3 shadow-xl shadow-cyan-300/30'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        dignissimos assumenda deserunt doloribus neque labore odio eveniet.
        Expedita, eum?
      </div>
      <div className='ml-4 mt-6 w-96 p-3 shadow-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        dignissimos assumenda deserunt doloribus neque labore odio eveniet.
        Expedita, eum?
      </div>
      <div className='mb-10 ml-4 mt-6 w-96 p-3 shadow-inner shadow-blue-500/60'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        dignissimos assumenda deserunt doloribus neque labore odio eveniet.
        Expedita, eum?
      </div>

      {/* Mix Blend  */}
      <div className='flex justify-center -space-x-24'>
        <div className='bg-blue-400 mix-blend-multiply'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          totam quam voluptas error earum veritatis, possimus corporis nulla
          eveniet tempore.
        </div>
        <div className='bg-pink-400 mix-blend-multiply'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          velit optio, iusto modi obcaecati magnam veniam est ullam et
          consectetur!
        </div>
      </div>
    </main>
  );
};

export default BackgroundsAndShadows;

`
<!-- Background Size
  bg-auto	    background-size: auto;
  bg-cover	  background-size: cover;
  bg-contain	background-size: contain;
-->

<!-- Background Repeat
  bg-repeat	      background-repeat: repeat;
  bg-no-repeat	  background-repeat: no-repeat;
  bg-repeat-x	    background-repeat: repeat-x;
  bg-repeat-y	    background-repeat: repeat-y;
  bg-repeat-round	background-repeat: round;
  bg-repeat-space	background-repeat: space;
-->

<!-- Background Position
  bg-bottom	      background-position: bottom;
  bg-center	      background-position: center;
  bg-left	        background-position: left;
  bg-left-bottom	background-position: left bottom;
  bg-left-top	    background-position: left top;
  bg-right	      background-position: right;
  bg-right-bottom	background-position: right bottom;
  bg-right-top	  background-position: right top;
  bg-top	        background-position: top;
-->

<!-- Background Attachment
  bg-fixed	  background-attachment: fixed;
  bg-local	  background-attachment: local;
  bg-scroll	  background-attachment: scroll;
-->

<!-- 
  Shadows
  shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  shadow-none	  box-shadow: 0 0 #0000;
-->
`;
