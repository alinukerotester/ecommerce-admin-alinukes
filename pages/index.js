import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex">
        Salut, {session?.user?.name}
        <Image
          src={session?.user?.image}
          alt="poza personala"
          width={96}
          height={96}
        />
      </div>
    </Layout>
  );
}
