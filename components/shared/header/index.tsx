import Link from "next/link";
import Menu from "./menu";
import { APP_NAME } from "@/lib/constants";
import SearchInput from "@/components/search";
import { useContext } from "react";
import { SearchContext } from "@/app/(root)/layout";

const Header = () => {
  const { keyword, setKeyword } = useContext(SearchContext);
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {APP_NAME}
            </span>
          </Link>
        </div>

        <SearchInput keyword={keyword} setKeyword={setKeyword} />

        <div className='space-x-2'>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
