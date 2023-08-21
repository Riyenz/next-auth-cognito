import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  const onSignIn = (e: any) => {
    e.preventDefault();

    signIn("cognito");
  };

  const onSignOut = (e: any) => {
    e.preventDefault();

    signOut();
  };

  if (status === "loading") return null;

  const authButton = session ? (
    <button onClick={onSignOut}>Sign out</button>
  ) : (
    <button onClick={onSignIn}>Sign in</button>
  );

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          Logo
        </Link>
        {authButton}
      </div>
    </header>
  );
};

export default Header;
