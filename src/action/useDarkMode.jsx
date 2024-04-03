import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        const className = 'dark-mode';
        const bodyClass = document.body.classList;
        isDarkMode ? bodyClass.add(className) : bodyClass.remove(className);
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    return { isDarkMode, toggleDarkMode: () => setIsDarkMode(prev => !prev) };
};


export default useDarkMode;