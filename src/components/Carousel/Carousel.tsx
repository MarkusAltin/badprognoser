import { useState } from "react";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";

interface Props {
    slides: React.ReactNode[];
}

export const Carousel = ({ slides }: Props) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    function nextSlide(): void {
        setCurrent(current === length - 1 ? current : current + 1);
    }

    function previousSlide(): void {
        setCurrent(current === 0 ? current : current - 1);
    }

    return (
        <div className="carousel">
            <div className="wrapper">
                <div className="content" style={{ transform: `translateX(-${current * 180}px)` }}>
                    {slides.map((slide, index) => {
                        return <div key={index} className="slide" >
                            {slide}
                        </div>
                    })}
                </div>
                <div className="buttons">
                    <button className="button left" onClick={previousSlide}>
                        <LeftArrow />
                    </button>
                </div>
                <div className="buttons">
                    <button className="button right" onClick={nextSlide}>
                        <RightArrow />
                    </button>
                </div>
            </div>
        </div>
    )
}