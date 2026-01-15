import { useEffect, useRef } from "react";

const useCookies = () => {
    const COOKIES_KEY = "dear-me-allow-cookies"
    let areCookiesAllowed = false;

    const executed = useRef(false);

    useEffect(() => {
        if (executed.current) {
        return;
        }

        executed.current = true;

        const cookiesKey = localStorage.getItem(COOKIES_KEY);
        console.log(cookiesKey);
    }, [])
    
    return areCookiesAllowed
}

export default useCookies