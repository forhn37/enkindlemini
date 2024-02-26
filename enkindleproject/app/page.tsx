import Welcomemessage from "./comp/mainhead";
import Button from "./comp/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-800 w-full h-full flex items-center justify-center ">
      <div className="outline-1 w-11/12 outline h-2/5 rounded-md bg-gray-200 flex justify-center items-center flex-col">
        <Welcomemessage />
        <Link href={'/main'} className="w-11/12 h-1/6">
        <Button value='start' />
        </Link>
      </div>
    </main>
  );
}
