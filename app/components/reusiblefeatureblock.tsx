import React from "react";
import Image from "next/image";

interface Props {
    title: string,
    description: string,
    icon: React.ReactNode,
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    reversed?: boolean
}

const ReusibleFeatureblock: React.FC<Props> = ({
    title,
    description,
    icon,
    text1,
    text2,
    text3,
    text4,
    reversed = false
}) => {
    return (
        <>
            <div>
                <span className='text-lg font-mono text-black'>
                    Ready to Scale Your SaaS
                </span>
                <h2 className="mt-5 text-5xl w-200 text-black">Unlock the Full potential of Affilate Marketing with Affonso</h2>
            </div>
            <section className={` flex justify-between w-full gap-15  text-black ${reversed ? "md:flex-row-reverse" : ""
                }`}>
                <div className="w-full flex flex-col items-start justify-center">
                    <button className="px-6 py-3 bg-black text-white rounded-4xl font-mono text-2xl">Watch Video</button>
                    <h1 className="text-5xl py-6 font-sans">{title}</h1>
                    <p className="text-2xl text-gray-400 pb-4">{description}</p>
                    <div className="flex gap-3 items-center py-4 border-t-gray-300 border-t-2 w-100">
                        {icon}
                        <p className="text-2xl font-sans">{text1}</p>
                    </div>
                    <div className="flex gap-3 items-center py-4 border-t-gray-300 border-t-2 w-100">
                        {icon}
                        <p className="text-2xl font-sans">{text2}</p>
                    </div>
                    <div className="flex gap-3 items-center  py-4 border-t-gray-300 border-t-2 w-100">
                        {icon}
                        <p className="text-2xl font-sans">{text3}</p>
                    </div>
                    <div className="flex gap-3 items-center  border-t-gray-300 border-t-2 py-4 w-100">
                        {icon}
                        <p className="text-2xl font-sans">{text4}</p>
                    </div>
                </div>
                <div className="w-full">
                    <Image
                        className=""
                        src="/3.jpg"
                        alt="img"
                        width={600}
                        height={38}
                    />
                </div>
            </section>
        </>
    )
}
export default ReusibleFeatureblock;
