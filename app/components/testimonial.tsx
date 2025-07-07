import FeedbackCard from "./FeedbackCard";
import Link from "next/link";
export default function Testimonial() {
    return (
        <>
            <section className="bg-black text-white py-20 flex justify-center items-center flex-col">
                <span className='text-lg font-mono'>
                    Read what people are saying
                </span>
                <h1 className='pt-4  pb-3 text-7xl w-250 text-center font-sans'>The Choice of SaaS Founders, The Trust of Brands</h1>
                <div className="flex items-start gap-6 pt-7">
                    <FeedbackCard
                        userimage="/3.jpg"
                        username="Mustafa"
                        userid="@mustafa12"
                        userdescription="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis"
                    />
                    <FeedbackCard
                        userimage="/3.jpg"
                        username="Mustafa"
                        userid="@mustafa12"
                        userdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis"
                    />
                    <FeedbackCard
                        userimage="/3.jpg"
                        username="Mustafa"
                        userid="@mustafa12"
                        userdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis"
                    />
                </div>
                <div className="flex justify-between items-start gap-6 pt-7">
                    <FeedbackCard
                        userimage="/3.jpg"
                        username="Mustafa"
                        userid="@mustafa12"
                        userdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis"
                    />
                    <FeedbackCard
                        userimage="/3.jpg"
                        username="Mustafa"
                        userid="@mustafa12"
                        userdescription="Lorem ipsum dolor sit amet,  Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis"
                    />
                    <FeedbackCard
                        userimage="/3.jpg"
                        username="Mustafa"
                        userid="@mustafa12"
                        userdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                    />
                </div>
                <Link className="text-lg font-mono px-6 py-3 rounded-2xl text-black bg-red-50 mt-10" href="#">Hear From Other</Link>
            </section>
        </>
    )
}