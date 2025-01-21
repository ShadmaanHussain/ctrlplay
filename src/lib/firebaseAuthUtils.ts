import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";

export const SignUpWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }
};

export const SignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during sign out: ", error);
  }
};
