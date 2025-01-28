
import Head from "next/head";
import Link from "next/link";


export default function Volumes(){
    return (
        <>
        
<header>
    <h2>All Volumes</h2>
    <ul>
    <li><Link href = {"volumes/fellowship-of-the-ring"}>The Fellowship of the Ring</Link></li>
    <li><Link href = {"volumes/the-two-towers"}>The Two Towers</Link></li>
    <li><Link href = {"volumes/the-return-of-the-king"}>The Return of the King</Link></li>
    
    
    </ul>
</header>
<main>
  
</main>
        </>
       
    )
}