import Link from "next/link";
import React from 'react'
 
 type Props = {}
 
 function Header({}: Props) {
   return (
     <div className="bg-black/20 w-screen flex justify-end items-center min-h-[50px]">
       <Link href="/">Home</Link>
       <Link href="/Bio">Bio</Link>
       <Link href="/Films">Films</Link>
       <Link href="/Contact">Contact</Link>
     </div>
   );
 }
 
 export default Header