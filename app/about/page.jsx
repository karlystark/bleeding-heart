
import Image from 'next/image';

export default function About() {
    return (
        <div className="About ">
            <div className="about-hero flex justify-center relative">
            <div className="description w-[600px] self-center mt-4">
                <h2 className="mb-2 text-8xl"><b>Bleeding Heart Studios</b></h2>
            </div>

            <Image className="hidden lg:block" src="/birdtree.png" alt="bleeding heart pigeon peeking out of plant" height="800" width="400" />
            {/* Plant Image */}
            {/* <Image
                className="ml-6 relative z-10"
                src="/plant.png"
                alt="plant"
                width="400"
                height="600"
            /> */}

            {/* Bird Image positioned behind the plant */}
            {/* <Image
                className="absolute top-20 right-80 z-0 transition transition-transform duration-300 hover:rotate-12"
                src="/bleedingheart.png"
                alt="bleeding heart pigeon"
                width="100"
                height="100"
            /> */}
            </div>
            <div className="about-description flex justify-start ml-20">
                <p className="text-xl">Bleeding Heart Studios is a project by rgc, who makes silly freaky art.</p>
            </div>
        </div>
    );
}
