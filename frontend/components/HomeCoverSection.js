import Link from 'next/link';
import Image from 'next/image';


const HomeCoverSection = () => {
    const blog = {
        title: "Dummy Blog Title",
        description: "This is a dummy blog description for the hero section.",
        image: {
            filePath: "/images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg",
            blurhashDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
        },
        tags: ["dummy-tag"],
        url: "/blogs/dummy-blog",
    };

    return (
        <div className='w-full inline-block'>
            <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0%  to-dark/90 rounded-3xl z-0
            ' />
            <Image src={blog.image.filePath} placeholder='blur' blurDataURL= {blog.image.blurhashDataUrl}
            alt={blog.title} fill className='w-full h-full object-center object-cover rounded-3xl -z-10'  sizes='100vw'
            priority /> 

            <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-white">
            <Link href= '/blogs' className="inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
    Lorem 
    </Link>

                <Link href={blog.url} className='mt-6'>
                    <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                        <span className='bg-gradient-to-r from-accent to-accent
                         bg-[length:0px_6px]
                        hover:bg-[length:100%_6px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                        {blog.title}
                        </span>
                    </h1>
                </Link>
                <Link href='/' >
                <Link href= '/blogs' className="inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
    Lorem ipsum dolor sit.
    </Link>
                </Link>
                <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
                {blog.description}
            </p>
            </div>
        </article>
        </div>
    )
}

export default HomeCoverSection;
