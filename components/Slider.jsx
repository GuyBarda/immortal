import { useEffect, useRef } from 'react';

export default function Slider({ to }) {
    return (
        <div className="trainers">
            {[0, 0].map(() => (
                <div className={`trainers-slider ${to}`}>
                    <img src="/train1.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train1.jpg" alt="" />
                    <img src="/train2.jpg" alt="" />
                    <img src="/train1.jpg" alt="" />
                    <img src="/train2.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train1.jpg" alt="" />
                    <img src="/train2.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train1.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train1.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train3.jpg" alt="" />
                    <img src="/train1.jpg" alt="" />
                    <img src="/train2.jpg" alt="" />
                </div>
            ))}
        </div>
    );
}
