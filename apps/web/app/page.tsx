"use client";

import { trpc } from "~/trpc/client";
import { api } from "~/trpc/server";

// export default async function Home() {
export default function Home() {
  // const { message } = await api.abhishek.query({ email: "virat@kohli.com" });
  const { data } = trpc.abhishek.useQuery({ email: "virat@kohli09.com" });

  return (
    <main className="min-h-screen min-w-screen flex justify-center items-center">
      <div>
        {/* <h2>Server Status: {message}</h2> */}
        <h2>Name: {data?.message}</h2>
      </div>
    </main>
  );
}
