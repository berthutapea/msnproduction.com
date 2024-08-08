import React, { useState } from 'react';
import WaMSN from "../../../assets/images/icon/wa.svg"

const ButtonWa = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        const number = '6281398097276';
        const text = 'Mulia Sejati Nusantara Production';
        const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed z-10 bottom-2 right-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative">
                {isHovering && (
                    <div className="absolute px-2 py-1 text-black bg-white rounded-md shadow-lg -top-2 right-100">
                        Hubungi Kami
                    </div>
                )}
                <img
                    src={WaMSN}
                    alt="WhatsApp MSN PRODUCTION"
                    className="sm:w-50 w-36"
                />
            </div>
        </button>
    );
};

export default ButtonWa;
