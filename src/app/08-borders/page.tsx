import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Borders',
};

const Borders = () => {
  return (
    <main className='flex flex-col items-center justify-center py-6'>
      {/* Border Width & Colors  */}
      <div className='m-3 w-96 border p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-2 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-4 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-2 border-blue-400 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-2 border-slate-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-x-2 border-red-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-y-2 border-yellow-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-t-2 border-cyan-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 border-b-2 border-cyan-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      {/* Border Radius  */}

      <div className='m-3 w-96 rounded border-2 border-green-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 rounded-md border-2 border-green-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 rounded-lg border-2 border-green-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 rounded-xl border-2 border-green-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 rounded-full border-2 border-green-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 rounded-t-3xl border-2 border-green-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      <div className='m-3 w-96 rounded-br-3xl rounded-tl-3xl border-2 border-orange-500 p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci.
      </div>

      {/* Outline  */}
      <button className='outline outline-4 outline-offset-4 outline-purple-500'>
        Click
      </button>
    </main>
  );
};

export default Borders;

`
<!-- Border Widths
      border-0	    border-width: 0px;
      border-2	    border-width: 2px;
      border-4	    border-width: 4px;
      border-8	    border-width: 8px;
      border	      border-width: 1px;
      border-x-0	  border-left-width: 0px;
                    border-right-width: 0px;
      border-x-2	  border-left-width: 2px;
                    border-right-width: 2px;
      border-x-4    border-left-width: 4px;
                    border-right-width: 4px;
      border-x-8	  border-left-width: 8px;
                    border-right-width: 8px;
      border-x	    border-left-width: 1px;
                    border-right-width: 1px;
      border-y-0  	border-top-width: 0px;
                    border-bottom-width: 0px;
      border-y-2	  border-top-width: 2px;
                    border-bottom-width: 2px;
      border-y-4	  border-top-width: 4px;
                    border-bottom-width: 4px;
      border-y-8	  border-top-width: 8px;
                    border-bottom-width: 8px;
      border-y	    border-top-width: 1px;
                    border-bottom-width: 1px;
      border-t-0	  border-top-width: 0px;
      border-t-2	  border-top-width: 2px;
      border-t-4	  border-top-width: 4px;
      border-t-8	  border-top-width: 8px;
      border-t	    border-top-width: 1px;
      border-r-0	  border-right-width: 0px;
      border-r-2	  border-right-width: 2px;
      border-r-4	  border-right-width: 4px;
      border-r-8	  border-right-width: 8px;
      border-r	    border-right-width: 1px;
      border-b-0	  border-bottom-width: 0px;
      border-b-2	  border-bottom-width: 2px;
      border-b-4	  border-bottom-width: 4px;
      border-b-8	  border-bottom-width: 8px;
      border-b	    border-bottom-width: 1px;
      border-l-0	  border-left-width: 0px;
      border-l-2	  border-left-width: 2px;
      border-l-4	  border-left-width: 4px;
      border-l-8	  border-left-width: 8px;
      border-l	    border-left-width: 1px;
    -->

<!-- Border Radius
      rounded-none	    border-radius: 0px;
      rounded-sm	      border-radius: 0.125rem; /* 2px */
      rounded	          border-radius: 0.25rem; /* 4px */
      rounded-md	      border-radius: 0.375rem; /* 6px */
      rounded-lg	      border-radius: 0.5rem; /* 8px */
      rounded-xl	      border-radius: 0.75rem; /* 12px */
      rounded-2xl	      border-radius: 1rem; /* 16px */
      rounded-3xl	      border-radius: 1.5rem; /* 24px */
      rounded-full	    border-radius: 9999px;
    -->

<!-- Outline
      outline-0	outline-width: 0px;
      outline-1	outline-width: 1px;
      outline-2	outline-width: 2px;
      outline-4	outline-width: 4px;
      outline-8	outline-width: 8px;
  -->
`;
