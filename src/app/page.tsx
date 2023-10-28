import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container h-full max-w-lg bg-gray-50 p-6'>
        <h1 className='text-3xl text-blue-800'>Tailwind CSS Sandbox</h1>
        <ul className='mt-6'>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='01-utility-first'
            >
              Utility First Example
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='02-colors'
            >
              Colors
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='03-container-spacing'
            >
              Container & Spacing
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='04-typography'
            >
              Typography
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='05-sizing'
            >
              Sizing
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='06-layout-position'
            >
              Layout & Position
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='07-backgrounds-shadows'
            >
              Backgrounds & Shadows
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='08-borders'
            >
              Borders & Border Radius
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='09-filters'
            >
              Filters
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='10-interactivity'
            >
              Interactivity
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='11-breakpoints'
            >
              Breakpoints
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='12-columns'
            >
              Column Layouts
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link className='text-blue-500 hover:text-blue-300' href='13-flex'>
              Flexbox
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link className='text-blue-500 hover:text-blue-300' href='14-grid'>
              Grid
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='15-transform-transition'
            >
              Transform & Transitions
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='16-animation'
            >
              Animation
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='17-customization'
            >
              Customization & Config
            </Link>
          </li>
          <li className='my-4 border border-blue-200 p-2 text-lg'>
            <Link
              className='text-blue-500 hover:text-blue-300'
              href='18-dark-mode'
            >
              Dark Mode
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
