import { useState } from "react";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";

interface Props {
    slides: React.ReactNode[];
}

export const Carousel = ({ slides }: Props) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    function nextSlide(): void {
        setCurrent(current === length - 1 ? current : current + 1);
    }

    function previousSlide(): void {
        setCurrent(current === 0 ? current : current - 1);
    }

    function handleTouchStart(e: React.TouchEvent<HTMLDivElement>): void {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    function handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
        if (touchPosition === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchPosition - currentTouch;

        if (diff > 10) {
            nextSlide();
            setTouchPosition(null);
        }

        if (diff < -10) {
            previousSlide();
            setTouchPosition(null);
        }
    }

    return (
        <div className="carousel">
            <div className="wrapper">
                <div className="content" style={{ transform: `translateX(-${current * 180}px)` }}>
                    {slides.map((slide, index) => {
                        return <div key={index} className="slide" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
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
