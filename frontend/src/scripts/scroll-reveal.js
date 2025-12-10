// src/scrits/scroll-reveal.js

import { RouteOff } from "lucide-react";

export function initScrollReveal() {
    if (typeof window === "undefined") return;

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));
}

// Ejecutar en la carga inicial
document.addEventListener("DOMContentLoaded", initScrollReveal);

//Ejecutar en navegacion de View Transitions (si las usas en el futuro)
document.addEventListener("astro:page-load", initScrollReveal);