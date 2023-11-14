import { Metadata } from 'next';

import Customization from './customization';

export const metadata: Metadata = {
  title: 'Customization',
};

const Page = () => {
  return (
    <main className='bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800'>
      <Customization />;
    </main>
  );
};

export default Page;
