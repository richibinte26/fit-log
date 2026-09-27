import Link from 'next/link';

export default function NotFound  ()  {
    return (
        <div className='main-h-screen flex flex-col items-center justify-center text-white bg-black text-center px-4'>
            <h1 className='text-6xl font-bold mb-4'>404</h1>
            <p className='text-lg text-gray-400 mb-6'>Oops,This page does not exist</p>

            <Link href="/" className='bg-custom text-black px-6 py-3 rounded-full font-semibold'>Go Back Home</Link>
        </div>
    );
};

