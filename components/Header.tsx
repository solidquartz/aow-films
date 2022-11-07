import Link from "next/link";
import React from 'react'
 
 type Props = {}
 
 function Header({}: Props) {
   return (
     <div className="bg-black/20 object-cover flex justify-end items-center p-5">
       <Link href="/">Home</Link>
       <Link href="/Bio">Bio</Link>
       <Link href="/Films">Films</Link>
       <Link href="/Contact">Contact</Link>
     </div>
   );
 }
 
 export default Header