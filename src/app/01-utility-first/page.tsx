import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Utility First Framework',
};

const UtilityFirst = () => {
  return (
    <main className='flex h-screen items-center justify-center'>
      <div className='mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg'>
        <Image
          className='h-12 w-12'
          src='/assets/img/warning.svg'
          alt='warning'
          width={20}
          height={20}
        />
        <div>
          <div className='text-xl font-medium text-black'>Are You Sure?</div>
          <p className='text-slate-500'>You are about to delete a post</p>
        </div>
      </div>
    </main>
  );
};

export default UtilityFirst;
