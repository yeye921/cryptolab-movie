import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './reset.css';
import './globals.css';
import StyledComponentsRegistry from './registry';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Content from './_components/Content';
import RecoilRootProvider from './_utils/recoilRootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cryptolab MovieApp',
  description: '크립토랩 프론트엔드 구현 테스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <RecoilRootProvider>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </RecoilRootProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
