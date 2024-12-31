import useMediaQuery from "@/hooks/useMediaQuery";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { Link } from "react-router";
import MobileNavigation from "./MobileNavigation";
import CommonNavigation from "./CommonNavigation";
import { Button } from "../ui/button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";

function Navbar() {
  const isMobileView = useMediaQuery(640);

  const SignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        console.error("Error in user Credential");
        return;
      }
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      console.log(token);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };

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
          <Button onClick={SignUpWithGoogle}>Sign In</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
