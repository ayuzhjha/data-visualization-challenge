"use client";

import React from "react";
import { usePathname } from "next/navigation";
import PillNav from "./PillNav";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const SiteHeader = () => {
    const pathname = usePathname();
    const activeSection = useScrollSpy(['#home', '#about', '#format', '#prizes'], 100);

    const activeHref = pathname === '/' && activeSection
        ? (activeSection === 'home' ? '/' : `/#${activeSection}`)
        : pathname;

    return (
        <div className="w-full flex justify-center pt-4">
            <PillNav
                logo="/flatlogo.png"
                mobileLogo="/icon.png"
                logoClassName="h-10 md:h-[63px]"
                logoAlt="DVC Logo"
                logoHref="https://acmxim.space"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/#about' },
                    { label: 'Format', href: '/#format' },
                    { label: 'Prizes', href: '/#prizes' }
                ]}
                activeHref={activeHref}
                className="mx-auto"
                ease="power2.easeOut"
                // baseColor="#111111" // Dark background for the nav
                pillColor="#ffffff" // White pill
                hoveredPillTextColor="#000000" // Black text on white pill
                pillTextColor="#ffffff" // White text on dark nav
            />
        </div>
    );
};

export default SiteHeader;
