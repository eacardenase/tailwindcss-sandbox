import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LayoutPosition',
};

const LayoutPosition = () => {
  return (
    <main className='space-y-2 bg-slate-50'>
      {/* Positioning  */}
      <div className='relative h-12 w-1/2 bg-red-300'>
        <p>Parent Element</p>
        <div className='absolute bottom-0 right-0 bg-red-600'>
          <p>Absolute Child</p>
        </div>
      </div>

      {/* Top left corner  */}
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute left-0 top-0 h-16 w-16 bg-yellow-600'></div>
      </div>

      {/* Top right corner  */}
      <div className='relative h-32 w-32 bg-blue-100'>
        <div className='absolute right-0 top-0 h-16 w-16 bg-blue-600'></div>
      </div>

      {/* Bottom left corner  */}
      <div className='relative h-32 w-32 bg-purple-100'>
        <div className='absolute bottom-0 left-0 h-16 w-16 bg-purple-600'></div>
      </div>

      {/* Bottom right corner  */}
      <div className='relative h-32 w-32 bg-green-100'>
        <div className='absolute bottom-0 right-0 h-16 w-16 bg-green-600'></div>
      </div>

      {/* Span top edge  */}
      <div className='relative h-32 w-32 bg-pink-100'>
        <div className='absolute inset-x-0 top-0 h-16 bg-pink-600'></div>
      </div>

      {/* Span left edge  */}
      <div className='relative h-32 w-32 bg-purple-100'>
        <div className='absolute inset-y-0 left-0 w-16 bg-purple-600'></div>
      </div>

      {/* Span right edge  */}
      <div className='relative h-32 w-32 bg-cyan-100'>
        <div className='absolute inset-y-0 right-0 w-16 bg-cyan-600'></div>
      </div>

      {/* Span bottom edge  */}
      <div className='relative h-32 w-32 bg-orange-100'>
        <div className='absolute inset-x-0 bottom-0 h-16 bg-orange-600'></div>
      </div>

      {/* Display Classes  */}
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        <span className='inline bg-yellow-100'>This is inline</span> illo
        molestiae perspiciatis quia laudantium consectetur ducimus, deserunt
        velit doloremque amet quae repellat ea consequatur possimus!
        <span className='inline-block bg-blue-100'>This is inline-block</span>
        Corrupti ipsum fugiat, consequatur optio labore sint doloremque nobis.
        Velit harum, <span className='block bg-green-100'>This is block</span>
        repellendus molestias dignissimos consequatur dolores dolor adipisci
        voluptas amet! Obcaecati, unde voluptate porro
        <span className='hidden'>This is hidden</span> doloremque delectus
        tenetur. Ex tenetur, obcaecati cumque tempore fugiat nihil incidunt?
      </div>

      {/* Z-Index  */}
      <div className='relative h-36'>
        <div className='absolute left-10 z-40 h-24 w-24 bg-blue-200'>1</div>
        <div className='absolute left-20 h-24 w-24 bg-blue-300'>2</div>
        <div className='absolute left-40 z-10 h-24 w-24 bg-blue-400'>3</div>
        <div className='absolute left-60 z-20 h-24 w-24 bg-blue-500'>4</div>
        <div className='absolute left-80 h-24 w-24 bg-blue-600'>5</div>
      </div>

      {/* Floats  */}
      <div className='w-1/2'>
        <Image
          width={200}
          height={200}
          className='float-left mr-4 h-48 w-48'
          src='/assets/img/img1.jpg'
          alt='image 1'
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        dolores obcaecati itaque odit dolorem cum amet, a maxime temporibus id,
        aut expedita impedit est mollitia? Quisquam recusandae soluta dicta
        aperiam.
      </div>
    </main>
  );
};

export default LayoutPosition;

`
<!-- Position Classes
      static	    position: static;
      fixed	      position: fixed;
      absolute	  position: absolute;
      relative	  position: relative;
      sticky	    position: sticky;
    -->

<!-- Display Classes
      block	            display: block;
      inline-block	    display: inline-block;
      inline	          display: inline;
      flex	            display: flex;
      inline-flex	      display: inline-flex;
      table	            display: table;
      grid	            display: grid;
      inline-grid	      display: inline-grid;
      contents	        display: contents;
      list-item	        display: list-item;
      hidden	          display: none;
    -->

<!-- Z-Index
      z-0	    z-index: 0;
      z-10	  z-index: 10;
      z-20	  z-index: 20;
      z-30	  z-index: 30;
      z-40	  z-index: 40;
      z-50	  z-index: 50;
      z-auto	z-index: auto;
    -->

<!-- Float
      float-right	  float: right;
      float-left	  float: left;
      float-none	  float: none;
    -->
`;
