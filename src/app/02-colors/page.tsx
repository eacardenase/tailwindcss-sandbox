import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colors',
};

const Colors = () => {
  return (
    <main className='container mx-auto flex h-screen max-w-lg flex-col items-center justify-center'>
      {/* Default colors */}
      {/* white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  */}

      {/* Text Colors */}
      <div>
        <p className='text-lg text-black'>Tailwind is Awesome</p>
        <p className='text-lg text-white'>Tailwind is Awesome</p>
        <p className='text-lg text-red-500'>Tailwind is Awesome</p>
        <p className='text-lg text-green-500'>Tailwind is Awesome</p>
        <p className='text-lg text-zinc-500'>Tailwind is Awesome</p>
        <p className='text-lg text-emerald-500'>Tailwind is Awesome</p>
        <p className='text-lg text-zinc-300'>Tailwind is Awesome</p>
        <p className='text-lg text-slate-500'>Tailwind is Awesome</p>
      </div>

      {/* Background Colors */}
      <div>
        <p className='bg-slate-600 text-lg text-orange-400'>
          Tailwind is Awesome
        </p>
        <p className='bg-emerald-400 text-lg'>Tailwind is Awesome</p>
        <p className='bg-yellow-300 text-lg'>Tailwind is Awesome</p>
        <p className='bg-indigo-800 text-lg text-indigo-300'>
          Tailwind is Awesome
        </p>
      </div>

      {/* Text Underline */}
      <div>
        <p className='text-lg underline decoration-blue-500'>
          Tailwind is Awesome
        </p>
        <p className='text-lg underline decoration-emerald-600'>
          Tailwind is Awesome
        </p>
        <p className='text-lg underline decoration-yellow-500'>
          Tailwind is Awesome
        </p>
      </div>

      {/* Border Colors */}
      <div>
        <input
          type='text'
          className='rounded-lg border-2 border-blue-400 px-2 py-1'
          placeholder='Tailwind is Awesome'
        />
        <input
          type='text'
          className='ml-1 rounded-lg border-2 border-orange-400 px-2 py-1'
          placeholder='Tailwind is Awesome'
        />
      </div>

      {/* Divide Colors */}
      <div className='w-full divide-y divide-blue-400'>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      {/* Outline Colors */}
      <div className='space-x-3'>
        <button className='outline outline-red-400'>Hello</button>
        <button className='outline outline-blue-300'>Hello</button>
      </div>

      {/* Box Shadow Colors (Opacity defaults to 100, but you can set it)*/}
      <div>
        <button className='mt-2 rounded-xl bg-cyan-400 px-4 py-1 text-white shadow-md shadow-cyan-300'>
          Subscribe
        </button>
        <button className='mx-2 rounded-xl bg-cyan-400 px-4 py-1 text-white shadow-md shadow-purple-300/60'>
          Subscribe
        </button>
      </div>

      {/* Accent Colors */}
      <div className='space-x-2'>
        <input type='checkbox' className='accent-purple-500' checked />
        <input type='checkbox' className='accent-orange-500' checked />
      </div>

      {/* Arbitrary Colors */}
      <div className='w-full space-y-1'>
        <div className='bg-[#427fab]'>Hello</div>
        <div className='bg-[rgb(255,0,0)]'>Hello</div>
        <div className='bg-[steelblue]'>Hello</div>
      </div>
    </main>
  );
};

export default Colors;
