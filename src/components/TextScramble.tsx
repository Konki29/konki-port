import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface TextScrambleProps {
    text: string;
    className?: string;
    speed?: number; // ms per character reveal, default 40
    delay?: number; // ms before starting, default 0
}

export function TextScramble({ text, className = "", speed = 40, delay = 0 }: TextScrambleProps) {
    const [displayed, setDisplayed] = useState("");
    const frameRef = useRef<number>(0);
    const startedRef = useRef(false);

    useEffect(() => {
        let revealIndex = 0;
        let intervalId: ReturnType<typeof setInterval>;

        const timeout = setTimeout(() => {
            startedRef.current = true;

            intervalId = setInterval(() => {
                if (revealIndex >= text.length) {
                    clearInterval(intervalId);
                    setDisplayed(text);
                    return;
                }

                // Build string: revealed chars + scramble for the rest
                const revealed = text.slice(0, revealIndex + 1);
                const scrambleLen = Math.min(6, text.length - revealIndex - 1);
                let scramble = "";
                for (let i = 0; i < scrambleLen; i++) {
                    scramble += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
                setDisplayed(revealed + scramble);
                revealIndex++;
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(intervalId);
            cancelAnimationFrame(frameRef.current);
        };
    }, [text, speed, delay]);

    return <span className={className}>{displayed}</span>;
}
