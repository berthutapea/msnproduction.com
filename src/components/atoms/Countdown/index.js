import React, { useState } from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
    const [isCompleted, setIsCompleted] = useState(false);

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            setIsCompleted(true);
            return <span>Promo Sudah Habis</span>;
        } else {
            return (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center mr-2">
                        <span className=" btn-sm bottom-100 px-4 text-[18px] border-2 rounded-lg border-primary text-primary mx-2 my-2 sm:my-0 ">{days}</span>
                        <span>Hari</span>
                    </div>
                    <div className="flex flex-col items-center mr-2">
                        <span className="btn-sm  text-[18px] border-2 rounded-lg border-primary text-primary mx-2 my-2 sm:my-0">{hours}</span>
                        <span>Jam</span>
                    </div>
                    <div className="flex flex-col items-center mr-2">
                        <span className="btn-sm  text-[18px] border-2 rounded-lg border-primary text-primary mx-2 my-2 sm:my-0">{minutes}</span>
                        <span>Menit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="btn-sm  text-[18px] border-2 rounded-lg border-primary text-primary mx-2 my-2 sm:my-0">{seconds}</span>
                        <span>Detik</span>
                    </div>
                </div>
            );
        }
    };

    const targetDate = new Date('2024-07-19T00:00:00');

    return (
        <div className="container mx-auto mt-10">
            {isCompleted ? (
                <span>Promo Sudah Habis</span>
            ) : (
                <Countdown date={targetDate} renderer={renderer} />
            )}
        </div>
    );
};

export default CountdownTimer;
