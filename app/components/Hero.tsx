import Link from 'next/link';
import Image from 'next/image'
export default function Hero() {
    return (
        <>
            <section  className='p-3 pt-20 pb-0 flex justify-center items-center flex-col gap-3  rounded-2xl custom-bg m-3 h-full'>
                <span className='text-lg font-mono'>
                    Ready to Scale Your SaaS
                </span>
                <h1 className='pt-4  pb-3 text-7xl w-180 text-center font-sans'>Grow Your SaaS with an Affilate Program</h1>
                <p className='text-lg w-150 pb-3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero id mollitia voluptate incidunt. Dolores?</p>
                <Link className="text-lg font-mono mt-5 px-6 py-3 rounded-2xl text-black bg-red-50" href="#">Start Your 14-day free trial</Link>
                <Image className='relative top-10' src="/bg1.png" alt="img" width={1400} height={800} />
            </section>
        </>
    )
}