"use client"; 

import '@/globals.css';
import { Provider } from 'react-redux';
import store from '@/store';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Provider store={store}>
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
