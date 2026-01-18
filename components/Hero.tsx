'use client'

import Avatar from './Avatar'
import { useMediaQuery } from 'react-responsive'
import { AiFillStepForward } from "react-icons/ai";
import { TbStereoGlasses } from "react-icons/tb";

const Hero = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-pink-500 to-blue-500">
            <div className='grid grid-cols-1'>
                <div className='absolute top-[30%] left-[5%] z-10'>
                    <h1 className='font-orbitron text-5xl md:text-[80px] lg:text-[110px] font-black leading-none tracking-tight'>
                        FUTURE IS NOW
                    </h1>
                    <p className='text-lg md:text-3xl font-orbitron mt-2 md:mt-1 tracking-widest opacity-90'>
                        DIVE INTO THE DEPTHS OF VIRTUAL REALITY
                    </p>
                </div>
                <div>
                    <div>


                    </div>
                    <div>
                        <img src="/Hero.png" alt="Hero Image" className="absolute right-0 bottom-0 w-[400px] sm:w-[650px] object-cover" />
                    </div>
                </div>
            </div>
            {!isMobile && (
                <div className="absolute bottom-[10%] left-[40%] card bg-white/20 backdrop-blur-sm w-80 shadow-sm p-2 rounded-2xl ">
                    <figure>
                        <Avatar />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-xl mt-2">Explore VR</h2>
                        <p className='text-md mt-2'>Discover new dimension where reality meets imagination. put on headset and explore the world of virtual reality</p>
                        <div className="card-actions justify-end mx-5">
                            <button className="btn btn-primary text-lg bg-gradient-to-r from-blue-500 to-pink-500 p-1 px-3 rounded-2xl mt-2">Buy Now</button>
                        </div>
                    </div>
                </div>
            )}
            <div className={`absolute ${isMobile ? 'bottom-[2%] gap-2' : 'bottom-[21%] gap-7'} flex flex-col`}>
                <div className='bg-white/50 w-80 h-16 rounded-4xl mx-[100px] flex items-center gap-2'>
                    <div className='bg-black w-14 h-14 rounded-full flex items-center justify-center mx-2'>
                        <TbStereoGlasses className='text-white text-3xl' />
                    </div>
                    <div>
                        <p className='text-2xl'>
                            Try VR now
                        </p>
                    </div>
                </div>
                <div className="border-2 border-white/50 bg-transparent w-80 h-16 rounded-4xl mx-[100px] flex items-center gap-2">
                    <div className='bg-black w-14 h-14 rounded-full flex items-center justify-center mx-2'>
                        <AiFillStepForward className='text-white text-3xl' />
                    </div>
                    <div>
                        <p className='text-2xl'>
                            Watch More
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero