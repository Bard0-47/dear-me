import { useState } from "react";

const useCookies = () => {
    const COOKIES_KEY = "dear-me-allow-cookies"
    /* Get current selected option */
    const [areCookiesAllowed, setAreCookiesAllowed] = useState<boolean>(() => {
        const savedValue = localStorage.getItem(COOKIES_KEY);
        return savedValue ? JSON.parse(savedValue) : false;
    })

    /* Functions */
    const allowCookies = () => {
        setAreCookiesAllowed(true);
        localStorage.setItem(COOKIES_KEY, JSON.stringify(true));
    }
    
    const denyCookies = () => {
        setAreCookiesAllowed(false);
        localStorage.setItem(COOKIES_KEY, JSON.stringify(false));
    };

    const toggleCookies = () => {
        setAreCookiesAllowed(prev => {
            const newValue = !prev;
            localStorage.setItem(COOKIES_KEY, JSON.stringify(newValue));
            return newValue;
        });
    };

    return { 
        areCookiesAllowed, 
        allowCookies,
        denyCookies,
        toggleCookies
    }
}

export default useCookies