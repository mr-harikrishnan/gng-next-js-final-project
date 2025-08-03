import Link from "next/link";

type TypeProps = {
    topic: string;
    desc: string;
    img: string;
}

type DataProps = {
    data: TypeProps
}

function VideoCourseCard({ data }: DataProps) {
    return (
        <div className='w-full '>

            <div className='relative'>
                <img
                    className='rounded-lg'
                    src={data.img} alt="" />
                <p className='absolute text-[18px]  bg-[#387975] rounded-[30px] text-white px-5.5 py-1 top-3 left-3'>Free</p>
            </div>

            

            <div className='mt-8 flex flex-col gap-4 sm:hidden '>
                <h1 className='font-morebold text-[22px]'>{data.topic}</h1>
                <p>{data.desc}</p>
                <Link href={""} className='text-[#387975] text-[18px] underline underline-offset-2 '>View More</Link>
            </div>

            <div className='mt-8 flex flex-col gap-4 md:hidden'>
                <h1 className='font-morebold text-[22px] '>{data.topic.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h1>
                <p>{data.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                <Link href={""} className='text-[#387975] text-[18px] underline underline-offset-2 '>View More</Link>
            </div>

            <div className='mt-8 hidden flex-col gap-4 md:flex'>
                <h1 className='font-morebold text-[22px] '>{data.topic}</h1>
                <p>{data.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                <Link href={""} className='text-[#387975] text-[18px] underline underline-offset-2 '>View More</Link>
            </div>

        </div>
    )
}

export default VideoCourseCard