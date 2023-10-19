import Link from 'next/link';
import Image from 'next/image';

import { AuthProviders } from '@/components';
import { NavLinks } from '@/constant';

const Navbar = () => {
  const session = {};

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' width={116} height={43} alt='logo' />
        </Link>

        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link, index) => (
            <Link key={`navlinks-${index}-${link.text}`} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session ? (
          <>
            UserPhoto
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
