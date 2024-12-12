import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed mt-0 w-full h-12 bg-cyan-200">
            <div className="flex flex-wrap justify-center items-center h-full px-4 gap-8">
                <Link href="/">
                    Home
                </Link>
                {/* <Link href="/ssr">
                    Server-Side Rendered (SSR)
                </Link>
                <Link href="/isr">
                    Incremental Static Regeneration (ISR)
                </Link> */}
                <Link href="/list">
                    List
                </Link>
            </div>
        </div>
    );
}