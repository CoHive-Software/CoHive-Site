import Image from 'next/image';
import Link from 'next/link';

export default function DeskNav({ isNavHidden }) {
  const animationClassName = isNavHidden
    ? 'slideOut 0.3s ease-out forwards'
    : 'slideIn 0.3s ease-out forwards';

  return (
    <div className='flex justify-center bg-black text-pearl'>
      <nav
        className='w-full flex flex-col items-center fixed top-0 bg-black'
        style={{
          animation: `${animationClassName}`
        }}
      >
        <div className='flex flex-col items-center justify-around w-full text-md'>
          <div className='flex flex-row justify-between w-7/12 py-6'>
            <div className='flex items-center'>
              <Link href='/' className='flex items-center'>
                <Image
                  className='mr-2'
                  src='/whiteLogo.svg'
                  alt='cohiveLogo'
                  width={64}
                  height={64}
                />
                <Image
                  className='ml-2'
                  src='/CoHiveWhiteText.svg'
                  alt='CoHiveName'
                  width={150}
                  height={28}
                />
              </Link>
            </div>
            <div className='flex items-center'>
              <ul className='list-none flex'>
                {/* <li>
                  <Link href='#projects'>projects</Link>
                </li>
                <li className='mx-12'>
                  <Link href='/blog'>blog</Link>
                </li> */}
                {/* <li>
                  <Link href='#contact'>Contact Us</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className='h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-7/12' />

        </div>
      </nav>
    </div>
  );
}
