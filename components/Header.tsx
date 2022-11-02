import Link from "next/link";
import React from 'react'
 
 type Props = {}
 
 function Header({}: Props) {
   return (
     <div>
       <Link href="/">Home</Link>
       <Link href="/bio">Bio</Link>
       <Link href="/films">Films</Link>
       <Link href="/contact">Contact</Link>
     </div>
   );
 }
 
 export default Header