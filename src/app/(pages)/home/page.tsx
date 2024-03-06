import Dragger from "@/components/core/Dragger/Dragger";


const url = "/api/formdata";
const saveUrl = "/api/formdata";

export default function Home() {
  return (
    <>
      <main className="w-full">
            <Dragger />
      </main>
    </>
  );
}
