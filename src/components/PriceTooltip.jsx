import React, { useLayoutEffect, useRef, useState } from 'react'

const PriceTooltip = ({ price, children }) => {
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        if (showTooltip && tooltipRef.current && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();

            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            let newPosition = { top: -tooltipRect.height, left: 0 }

            if (containerRect.left + tooltipRect.width > viewportWidth) {
                newPosition.left = -(tooltipRect.width - containerRect.width);
            }

            if (containerRect.top - tooltipRect.height < 0) {
                newPosition.top = containerRect.height + 10;
            }

            setTooltipPosition(newPosition);
        }

    }, [showTooltip])


    return (
        <div
            ref={containerRef}
            className="relative inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            {showTooltip && (
                <div
                    ref={tooltipRef}
                    className="absolute bg-black text-white px-3 py-2 rounded shadow-lg z-50 transition-opacity"
                    style={{
                        top: tooltipPosition.top,
                        left: tooltipPosition.left
                    }}
                >
                    <div className="text-sm">
                        <p>Precio normal: ${price}</p>
                        <p>Con descuento: ${(price * 0.9).toFixed(2)}</p>
                        <p className="text-xs text-gray-300">* Precio válido hasta agotar stock</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PriceTooltip