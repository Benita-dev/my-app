import Link from "next/link";

export default function Home() {
  return  (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
     </> 
  );
}
    // <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
    //   <head>
    //     <title>My first next js app</title>
    //   </head>  