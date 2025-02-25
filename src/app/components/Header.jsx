import Link from "next/link";
// import DarkModeSwitch from './DarkModeSwitch';
// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-4">
        {/* <SignedIn>
          <UserButton />
        </SignedIn> */}
        <li>
          <Link href={"/sign-in"}>Sign in</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/favorites"}>Favorites</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>

      <Link href={"/"} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
}
