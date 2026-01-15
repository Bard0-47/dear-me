import { useState, useEffect, useRef } from "react";

const useCookies = () => {
    const COOKIES_KEY = "dear-me-allow-cookies"
    let areCookiesAllowed = false;

    const executed = useRef(false);

    useEffect(() => {
        if (executed.current) {
        return;
        }


    }, [])
    
    return areCookiesAllowed
}

export default useCookies