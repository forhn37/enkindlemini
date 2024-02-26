import Header from "../comp/header";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header value="ENKINDLE"/>
      <div className="flex justify-center items-center w-full h-5/6">{children}</div>
    </>
  );
}
