import Slider from '@/components/Slider';
import SliderContainer from '@/components/SliderContainer';
import { Inter } from 'next/font/google';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section className="main-hero">
                <div>
                    <h1>Get Fit,</h1>
                    <h1>Get Strong,</h1>
                    <h1>Get Healthy!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam sit quisquam, molestiae ut enim ullam maxime
                        repudiandae. Praesentium officia, dolor labore fugit
                        numquam accusantium veniam magnam
                    </p>
                </div>
                <div className="image-container">
                    <Image
                        src="/immortal.jpg"
                        alt="next"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </section>
            <SliderContainer />
        </>
    );
}
