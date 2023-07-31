import Image from 'next/image';
import Link from 'next/link';

export default function DeskNav({ isNavHidden }) {
  const animationClassName = isNavHidden
    ? 'slideOut 0.3s ease-out forwards'
    : 'slideIn 0.3s ease-out forwards';

  return (
    <div className='flex justify-center'>
      <nav
        className='w-10/12 flex fixed justify-between border-b-2 text-md px-3 py-6 top-3'
        style={{
          backgroundColor: '#282a38',
          color: '#FFFFFF',
          animation: `${animationClassName}`
        }}
      >
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
            <li>
              <Link href='/projects'>projects</Link>
            </li>
            <li className='mx-12'>
              <Link href='/blog'>contact</Link>
            </li>
            <li>
              <Link href='/contact'>blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
