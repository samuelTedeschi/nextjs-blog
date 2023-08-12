import Link from "next/link";

export default function FirstPost(){
    return(
        <>
        <h1>Primero Post</h1>
        <h2>
            <Link href="/">voltar para a home</Link>
        </h2>
        </>
    ) 
}