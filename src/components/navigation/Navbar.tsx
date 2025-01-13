import useMediaQuery from "@/hooks/useMediaQuery";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { Link } from "react-router";
import MobileNavigation from "./MobileNavigation";
import CommonNavigation from "./CommonNavigation";
import { Button } from "../ui/button";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

function Navbar() {
  const isMobileView = useMediaQuery(640);
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { user, loading } = authContext;
  console.log(user);
  console.log(loading);

  const SignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };

  const SignOut = async () => {
    try {
      await signOut(auth);
    }
    catch (error) {
      console.error('Error during sign out: ', error);
    }
  }

  return (
    <div className="py-4 px-8 border-b-gray-100 bg-background">
      <div
        className={`container mx-auto flex items-center ${
          isMobileView ? "justify-between" : ""
        }`}
      >
        {isMobileView && <MobileNavigation />}
        <div
          className={`text-2xl font-bold ${
            isMobileView ? "text-center" : "mr-10"
          }`}
        >
          <Link to="/">
            CTRL<span className="text-red-600">PLAY</span>
          </Link>
        </div>
        {!isMobileView && <CommonNavigation />}
        <div className={!isMobileView ? "ml-auto" : ""}>
          {user ? (
            <Button onClick={SignOut}>Sign Out</Button>
          ) : (
            <Button onClick={SignUpWithGoogle}>Sign In</Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
