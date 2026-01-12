"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface NavItem {
    label: string;
    href: string;
}

interface PillNavProps {
    logo?: string;
    mobileLogo?: string;
    logoAlt?: string;
    logoHref?: string;
    logoClassName?: string;
    items: NavItem[];
    activeHref?: string;
    className?: string;
    ease?: string;
    baseColor?: string;
    pillColor?: string;
    hoveredPillTextColor?: string;
    pillTextColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
    logo,
    mobileLogo,
    logoAlt = "Logo",
    logoHref,
    logoClassName,
    items,
    activeHref = "/",
    className = "",
    ease = "power2.easeOut",
    baseColor = "#000000",
    pillColor = "#ffffff",
    hoveredPillTextColor = "#ffffff", // Color of text when pill is behind it
    pillTextColor = "#000000", // Color of text when pill is NOT behind it
}) => {
    const navRef = useRef<HTMLDivElement>(null);
    const pillRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Initialize refs array
    itemsRef.current = itemsRef.current.slice(0, items.length);

    const getActiveIndex = () => {
        const idx = items.findIndex(item => item.href === activeHref);
        return idx === -1 ? 0 : idx;
    }

    const movePill = (index: number) => {
        const target = itemsRef.current[index];
        if (!target || !pillRef.current) return;

        const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = target;

        // Animate pill position and size
        gsap.to(pillRef.current, {
            x: offsetLeft,
            y: offsetTop,
            width: offsetWidth,
            height: offsetHeight,
            duration: 0.4,
            ease: ease,
        });
    };

    // Initial and Active State handling
    useEffect(() => {
        const activeIndex = getActiveIndex();
        // Use a small timeout to wait for layout/fonts
        const timer = setTimeout(() => {
            movePill(activeIndex);
        }, 100);
        return () => clearTimeout(timer);
    }, [activeHref, items]);

    // Handle hover interactions
    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        movePill(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        movePill(getActiveIndex());
    };

    return (
        <nav
            className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between pl-4 pr-2 py-2 rounded-full shadow-lg border border-border/50 backdrop-blur-md bg-black/40 ${className}`}
            style={{
                // Override background color if needed, or remove this style to use class
                // backgroundColor: baseColor, 
            }}
            onMouseLeave={handleMouseLeave}
        >
            {/* Logo Section */}
            {logo && (
                <div className="mr-6 flex items-center pl-2">
                    {/* Desktop Logo */}
                    <div className="hidden md:block">
                        {logoHref ? (
                            <Link href={logoHref}>
                                <img src={logo} alt={logoAlt} className={`${logoClassName || 'h-6'} w-auto cursor-pointer`} />
                            </Link>
                        ) : (
                            <img src={logo} alt={logoAlt} className={`${logoClassName || 'h-6'} w-auto`} />
                        )}
                    </div>

                    {/* Mobile Logo */}
                    <div className="block md:hidden">
                        {logoHref ? (
                            <Link href={logoHref}>
                                <img src={mobileLogo || logo} alt={logoAlt} className={`${logoClassName || 'h-6'} w-auto cursor-pointer object-contain`} />
                            </Link>
                        ) : (
                            <img src={mobileLogo || logo} alt={logoAlt} className={`${logoClassName || 'h-6'} w-auto object-contain`} />
                        )}
                    </div>
                </div>
            )}

            {/* Nav Items Container - Centered Absolutely */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1" ref={navRef}>
                {/* The Pill - Absolute positioned background */}
                <div
                    ref={pillRef}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        backgroundColor: pillColor, // The background of the active item
                        zIndex: 1,
                        top: 0,
                        left: 0,
                    }}
                />

                {items.map((item, index) => {
                    // Determine text color based on hover/active state
                    // If this item is currently hovered (or active and no hover), it needs high contrast against pill
                    const isHoveredOrActive = hoveredIndex === index || (hoveredIndex === null && item.href === activeHref);

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className="relative z-10 px-3 py-2 text-xs md:px-6 md:py-3 md:text-base font-medium transition-colors duration-200 select-none"
                            style={{
                                // If the pill is here, use hoveredPillTextColor, else use pillTextColor (which is actually base text color)
                                // Wait, baseColor is nav bg, pillTextColor is likely the text color ON the nav bg.
                                // hoveredPillTextColor is text color ON the pill.
                                color: isHoveredOrActive ? hoveredPillTextColor : pillTextColor,
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </div>

            {/* Empty div to balance justify-between if needed, or just let logo take space and absolute center handle tabs */}
            <div></div>
        </nav>
    );
};

export default PillNav;
