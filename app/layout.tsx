import { Metadata } from 'next';
import { lato, abril } from '../public/fonts';
import { Abril_Fatface, Lato, Roboto_Mono, Inter } from 'next/font/google';
import Navigation from './components/navbars/navigation';
import Footer from './components/navbars/footer';

import 'app/globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CoHive Software',
  description:
    "Welcome to CoHive Software, a leading software engineering company empowering businesses.",
    openGraph: {
      type: "website",
      url: "https://cohivesoftware.com",
      title: "CoHive Software",
      description: "Welcome to CoHive Software, a leading software engineering company empowering businesses.",
      images: 'https://cohivesoftware.com/circleLogo3.svg'
    },
    twitter: {
      card: "summary_large_image",
      title: "CoHive Software",
      description: "Welcome to CoHive Software, a leading software engineering company empowering businesses.",
      images: 'https://cohivesoftware.com/circleLogo3.svg'
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${lato.variable} ${abril.variable}`}>
      <body className="md:bg-bg-bees bg-cover bg-top-6 bg-no-repeat bg-fixed">
        <Navigation />
        <main className='flex-1 my-1 mx-2'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
