import Link from "next/link";

export default function HomePage(){
    return (
        <>
            <div>
                <h1>The home page</h1>
            </div>
            <ul>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/clients'>Clients</Link>
                </li>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
            </ul>
        </>
    )
}