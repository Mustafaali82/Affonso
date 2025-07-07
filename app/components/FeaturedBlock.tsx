import Reusibleblock from "./reusiblefeatureblock";
import { FaRocket, FaShieldAlt, FaPlug } from "react-icons/fa";

export default function FeaturedBlock() {
    return (<section  className="w-full bg-white px-32 flex flex-col gap-20 py-20">
        <Reusibleblock
            title="From Zero TO Hero"
            description="lorem ipsum dolar elit. hello hello hello hello"
            icon={<FaRocket />}
            text1="lorem ipsum dolar elit."
            text2="lorem ipsum dolar elit."
            text3="lorem ipsum dolar elit."
            text4="lorem ipsum dolar elit."
        />
        <Reusibleblock
            title="From Zero TO Hero"
            description="lorem ipsum dolar elit. hello hello hello hello"
            icon={<FaRocket />}
            text1="lorem ipsum dolar elit."
            text2="lorem ipsum dolar elit."
            text3="lorem ipsum dolar elit."
            text4="lorem ipsum dolar elit."
            reversed
        />
                <Reusibleblock
            title="From Zero TO Hero"
            description="lorem ipsum dolar elit. hello hello hello hello"
            icon={<FaRocket />}
            text1="lorem ipsum dolar elit."
            text2="lorem ipsum dolar elit."
            text3="lorem ipsum dolar elit."
            text4="lorem ipsum dolar elit."
        />
    </section>
    )
}