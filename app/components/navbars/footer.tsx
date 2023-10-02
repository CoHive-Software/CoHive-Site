import Link from 'next/link';
import Image from 'next/image';
import Contact from '../contact/contact'

export default function Footer() {
  return (
    <footer
      className='flex justify-center'
      style={{
        backgroundColor: 'transparent',
        color: '#FFFFFF',
      }}
    >
      <div className='w-7/12 flex flex-col justify-center'>
        <div className='h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-full mt-3 mb-3' />
        <div className='w-full flex flex-col md:flex-row justify-center flex-wrap text-md py-3 mb-3'>
          <div className='md:w-auto md:order-1'>
            <div className='flex items-center justify-center md:justify-start'>
              <Link href='/' className='flex items-center'>
                <Image
                  className='mr-2'
                  src='/whiteLogo.svg'
                  alt='cohiveLogo'
                  width={64}
                  height={64}
                />
                {/* <Image
                  className='ml-2'
                  src='/CoHiveWhiteText.svg'
                  alt='CoHiveName'
                  width={150}
                  height={28}
                /> */}
                <h2 className='text-3xl'>Contact Form</h2>
              </Link>
            </div>
          </div>
          {/* <div className='flex flex-wrap justify-center md:justify-start md:items-center md:order-2'>
            <div className='mx-4 my-2 md:hidden'>
              <Link href='/projects'>
                projects
              </Link>
            </div>
            <div className='hidden md:block'>
              <Link href='#projects'>projects</Link>
            </div>
            <Link className='mx-4 my-2' href='/blog'>
              blog
            </Link>
          </div> */}
        </div>
        <Contact />
        {/* <div className='flex justify-between xl:justify-around items-center text-center text-xl py-3 my-2'> */}
          <div className='text-xs text-center py-3 my-2'>© 2023 CoHive. All Rights Reserved</div>
          {/* <div className='flex items-center'>
            <ul className='list-none flex'>
              <li>
                <a href='https://www.linkedin.com/company/cohive-software/'>
                  <Image
                    src='/linkedIn.png'
                    alt='linkedIn'
                    width={32}
                    height={32}
                  />
                </a>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
}
