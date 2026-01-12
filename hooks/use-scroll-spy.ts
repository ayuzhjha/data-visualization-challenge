"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[], offset: number = 0) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: `${offset}px 0px 0px 0px`,
                threshold: 0.5, // Trigger when 50% visible, or adjust as needed
            }
        );

        selectors.forEach((selector) => {
            const element = document.querySelector(selector);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [selectors, offset]);

    return activeId;
}
