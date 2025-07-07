import Image from "next/image";
import Link from 'next/link';
export default function Header() {
    return (
        <>
            <header>
                <nav className="flex justify-between items-center p-7 py-7">
                    <div className="flex gap-8 justify-center items-center">
                        <Link className="text-lg font-mono" href="#">Product</Link>
                        <Link className="text-lg font-mono" href="#">Pricing</Link>
                        <Link className="text-lg font-mono" href="#">Resources</Link>
                    </div>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                        />
                    </div>
                    <div className="flex gap-8 justify-center items-center">
                        <Link className="text-lg font-mono" href="#">Login</Link>
                        <Link className="text-lg font-mono px-6 py-3 rounded-2xl text-black bg-red-50" href="#">Launch Your Program</Link>
                    </div>
                </nav>
            </header>
        </>
    );

}