'use client';

import React from 'react';

interface SearchInputProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

export default function SearchInput({ keyword, setKeyword }: SearchInputProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="search-container search-input-container">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={keyword}
          onChange={handleSearch}
          placeholder="Search by Product Name"
        />
      </div>
    </div>
  );
}
