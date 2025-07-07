import Link from 'next/link';
import BenefitsCard from './BenefitsCard';
export default function Benefits() {
    return (
        <>
            <section className="bg-white text-black py-20 px-32 flex justify-center items-center flex-col">
                <span className='text-lg font-mono'>
                    Why Affasano
                </span>
                <h1 className='pt-4  pb-3 text-6xl w-180 text-center font-sans'>Who Benefits the Most?</h1>
                <div className='flex gap-10 mt-5'>
                    <BenefitsCard
                        imagesrc='/3.jpg'
                        text='Subsription-Bases SaaS'
                        description='Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis'
                    />
                    <BenefitsCard
                        imagesrc='/3.jpg'
                        text='Subsription-Bases SaaS'
                        description='Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis'
                    />
                    <BenefitsCard
                        imagesrc='/3.jpg'
                        text='Subsription-Bases SaaS'
                        description='Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Phasellus tristique et orci et vulputate. Morbi consectetur mauris ac lorem pellentesque, at pharetra metus mattis'
                    />
                </div>
                <Link className="text-lg font-mono mt-8 px-6 py-3 rounded-2xl text-white bg-black" href="#">Start Your 14-day free trial</Link>

            </section>
        </>
    )
}