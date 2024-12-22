import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>


      <div className="container mx-auto py-8">
      <div className="h-[445px] justify-between items-center inline-flex mb-12">
                <div className="w-[801px] h-[445px] relative">
                    <div className="w-[797px] h-[445px] left-0 top-0 absolute bg-[#6467e9]/10" />
                    <div className="w-[425px] h-[345px] left-[104px] top-[50px] absolute">
                        <div className="w-[425px] left-0 top-[63px] absolute text-[#222222] text-3xl font-bold font-['Inter'] leading-[54.15px]">Lorem Ipsum is simply dummy text of the printing and.</div>
                        <div className="w-[414px] h-[95px] left-0 top-[250px] absolute text-[#515151] text-[15px] font-normal font-['Inter'] leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    
                    </div>
                </div>
                <img className="w-[739px] h-[445px]" src="https://via.placeholder.com/739x445" />
            </div>
            
         
         <div className="flex flex-col gap-12 md:gap-20">
            {/* Our Mission and Vision */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-6">
                    <div className="text-3xl font-bold text-gray-800">Our Mission</div>
                    <div className="flex flex-col gap-2">
                        <div className="text-lg text-gray-700">Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)</div>
                        <div className="text-lg text-gray-700">Our delivery model helps you cut costs and deliver within budget.</div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                        <div className="text-sm font-semibold">Read more</div>
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
                <img className="w-full md:w-[575px] h-auto rounded-lg" src="https://via.placeholder.com/575x473" alt="Mission Image" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <img className="w-full md:w-[575px] h-auto rounded-lg" src="https://via.placeholder.com/575x473" alt="Vision Image" />
                <div className="flex flex-col gap-6">
                    <div className="text-3xl font-bold text-gray-800">Our Vision</div>
                    <div className="flex flex-col gap-2">
                        <div className="text-lg text-gray-700">Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)</div>
                        <div className="text-lg text-gray-700">Our delivery model helps you cut costs and deliver within budget.</div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                        <div className="text-sm font-semibold">Read more</div>
                        <div className="w-4 h-4 relative">
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Founder Member */}
            <div className="flex flex-col items-center gap-8 py-12 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-3xl font-bold text-gray-800 text-center">Our Founder member</div>
                    <div className="relative w-full md:w-[727px] h-auto">
                        <div className="text-lg text-gray-600 text-center px-4 md:px-0">The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. The alumni started at 2009. </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    {/* Founder Member Cards */}
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <div className="relative w-[100px] h-[100px]">
                                <div className="absolute inset-0 bg-purple-100 rounded-full shadow"></div>
                                <img className="absolute inset-0 w-full h-full rounded-full shadow" src="https://via.placeholder.com/100x100" alt=""/>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="text-lg font-bold text-purple-800">Kaes Mahmud</div>
                                <div className="text-sm text-gray-800">Position</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Clubs */}
            <div className="bg-white py-12 rounded-lg">
                <div className="text-3xl font-bold text-gray-800 text-center mb-8">Our Clubs</div>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 md:px-12">
                    {/* Club Cards */}
                    {[
                        { title: 'Blood Donation Club', description: 'Learn how to apply makeup for different occasions, skin types, and preferences. Our video tutorials are easy to follow, fun to watch, and suitable for all levels of experience' },
                        { title: 'Sports Club', description: 'Learn how to apply makeup for different occasions, skin types, and preferences. Our video tutorials are easy to follow, fun to watch, and suitable for all levels of experience' },
                        { title: 'Career Club', description: 'Learn how to apply makeup for different occasions, skin types, and preferences. Our video tutorials are easy to follow, fun to watch, and suitable for all levels of experience' },
                    ].map((club, index) => (
                        <div key={index} className="flex-1 p-6 bg-blue-50 rounded-lg shadow flex flex-col items-center gap-4">
                            <div className="text-2xl font-medium text-gray-800">{club.title}</div>
                            <div className="w-[150px] h-[150px] relative">
                            </div>
                            <div className="text-lg text-gray-800 text-center">{club.description}</div>
                            <div className="px-4 py-2 bg-blue-600 rounded-lg text-white font-bold">Read More</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="w-[1524px] h-[856px] relative  ">
                <div className="h-[856px] left-[370px] top-0 absolute flex-col justify-start items-end gap-6 inline-flex">
                    <div className="justify-start items-end gap-6 inline-flex">
                        <img className="w-[281px] h-[196px]" src="https://via.placeholder.com/281x196" />
                        <img className="w-[281px] h-[418px]" src="https://via.placeholder.com/281x418" />
                        <div className="w-[281px] flex-col justify-start items-start gap-6 inline-flex">
                            <img className="self-stretch h-[196px]" src="https://via.placeholder.com/281x196" />
                            <img className="self-stretch h-[196px]" src="https://via.placeholder.com/281x196" />
                            <img className="self-stretch h-[196px]" src="https://via.placeholder.com/281x196" />
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                        <img className="w-[281px] h-[196px]" src="https://via.placeholder.com/281x196" />
                        <img className="w-[281px] h-[196px]" src="https://via.placeholder.com/281x196" />
                        <img className="w-[572px] h-[196px]" src="https://via.placeholder.com/572x196" />
                    </div>
                </div>
                <div className="w-[349px] h-[225px] left-0 top-0 absolute text-black text-5xl font-bold font-['Inter']">A Photo Gallery of<br/>Our Events</div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}