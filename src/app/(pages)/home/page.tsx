'use client';

import MyDragger from "@/components/DraggerComponent/MyDragger";

const url = "/api/formdata";
const saveUrl = "/api/formdata";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <MyDragger />
      </main>
    </>
  );
}
