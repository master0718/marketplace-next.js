'use client';

import { createContext, useState } from 'react';
import Footer from "@/components/footer";
import Header from "@/components/shared/header";

// Define the shape of the context
interface SearchContextType {
  keyword: string;
  setKeyword: (value: string) => void;
}

// Create the context with a default value
export const SearchContext = createContext<SearchContextType>({
  keyword: '',
  setKeyword: () => { }, // No-op function to avoid unused warning
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [keyword, setKeyword] = useState('');

  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper">{children}</main>
        <Footer />
      </div>
    </SearchContext.Provider>
  );
}
