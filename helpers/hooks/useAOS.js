import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> in _document.js

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            mirror: true,
            once: true,
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);
};

export { useAOS };