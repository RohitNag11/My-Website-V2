import { useRef, useEffect } from 'react';

export function useRenderCount(componentName = 'Component') {
    const renderCount = useRef(0);
    renderCount.current += 1;

    useEffect(() => {
        console.log(`${componentName} has rendered ${renderCount.current} times`);
    });
}