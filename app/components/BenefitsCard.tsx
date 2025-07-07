import Image from "next/image";

interface Props {
    imagesrc: string,
    text: string,
    description: string
}

const BenefitsCard: React.FC<Props> = ({
  imagesrc,
  text,
  description
}) => {
  return (
    <>
      <div className=" w-full flex justify-center items-center flex-col shadow-lg rounded-3xl">
          <Image className="pt-5" src={imagesrc} alt={text} width={400} height={300} />
          <h2 className="w-full text-left px-6 text-2xl py-3 font-sans ">{text}</h2>
          <p className="px-6 pb-5">{description}</p> 
      </div>
    </>
  )
}

export default BenefitsCard;