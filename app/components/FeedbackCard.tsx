import React from "react";
import Image from "next/image";

interface Props {
    userimage: string,
    username: string,
    userid: string,
    userdescription: string,
}

const FeedbackCard: React.FC<Props> = ({
    userimage,
    username,
    userid,
    userdescription
}) => {
    return (
        <>
             <div className="py-10 px-8 flex flex-col gap-5 rounded-3xl bg-white text-black w-100">
                <div className="flex items-center gap-4">
                 <Image className="rounded-4xl" src={userimage} alt={username} width={60} height={30} />
                 <div>
                    <h3>{username}</h3>
                    <span>{userid}</span>
                 </div>
                </div>
                <div>
                    <p className="text-lg font-sans">{userdescription}</p>
                </div>
             </div>
        </>
    )
}

export default FeedbackCard;