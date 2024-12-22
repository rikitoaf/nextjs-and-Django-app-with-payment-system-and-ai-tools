import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head';
import Footer from '@/components/Footer';

function contact() {
  return (
    <>
    <Head>
    <title>Contact Us</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Navbar/>
    <div className="flex flex-col justify-start items-center gap-[100px] p-4" style={{ backgroundColor: '#ffffff', color: '#333333' }}>
    <div className="justify-start items-center gap-[88px] inline-flex">
            <div className="rounded-lg overflow-hidden">

                    

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.3765578503343!2d90.37211796961314!3d23.836151198663288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1005c48efb1%3A0xd6688f471baecb3a!2sMirpur%20DOHS!5e0!3m2!1sen!2sbd!4v1719571642110!5m2!1sen!2sbd"
            width="600"
        height="450"

        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"></iframe>
        </div>
        <div className="flex-col justify-start items-start gap-14 inline-flex">
            <div className="flex-col justify-start items-start gap-14 flex">
                <div className="text-5xl font-semibold font-['Inter']" style={{ color: '#800080' }}>Contact us</div>
                <div className="w-[421px] justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-[#6467e9] text-2xl font-bold font-['Inter']">Visit us</div>
                        <div className="w-[167px] text-base font-normal font-['Inter'] leading-normal">2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-[#6467e9] text-2xl font-bold font-['Inter']">Contact</div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-base font-normal font-['Inter'] leading-normal">contact@company.com</div>
                            <div className="text-base font-normal font-['Inter'] leading-normal">(406) 555-0120</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<Footer/>
</>
  )
}

export default contact
