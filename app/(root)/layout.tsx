'use client';

import { createContext, useState } from 'react';
import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export const SearchContext = createContext({
  keyword: '',
  setKeyword: (value: string) => { },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [keyword, setKeyword] = useState('');
  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      <div className='flex h-screen flex-col'>
        <Header />
        <main className='flex-1 wrapper'>{children}</main>
        <Footer />
      </div>
    </SearchContext.Provider>
  );
}
