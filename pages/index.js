import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="text-center w-full">
        <button
          onClick={() => signIn("google")}
          className="bg-white p-2 px-4 rounded-lg"
        >
          Login with Google
        </button>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen">
      <Nav />
      <div>te-ai logat pe tarlaua mea bă băiatule {session.user.email}</div>;
    </div>
  );
}
