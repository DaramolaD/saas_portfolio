import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global w-full h-full min-h-lvh bg-bg1-normal flex justify-center items-center text-white flex-col gap-5">
      <h1 className="text-2xl md:text-6xl">404</h1>
      <h2 className="text-lg md:text-xl">Page Not Found</h2>
      <p className="text-md md:text-lg">Don&apos;t worry there are other pages you will find instresting</p>
      <Link href="/" className="underline text-primary">Return Home</Link>
    </div>
  );
}
