import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, find the element and scroll to it
        if (hash) {
            // Small timeout to allow content to render/route transition to settle
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // If no hash but route changed (and not just query params), scroll to top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToAnchor;
