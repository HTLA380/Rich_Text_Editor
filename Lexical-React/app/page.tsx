import dynamic from "next/dynamic";
const LexicalEditor = dynamic(() => import("./app"), { ssr: false });

export default function Page() {
  return (
    <main className="w-full min-h-screen py-8 flex justify-center items-center">
      <LexicalEditor />
    </main>
  );
}
