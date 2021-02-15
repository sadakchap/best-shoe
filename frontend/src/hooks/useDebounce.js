import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [dobouncedValue, setDobouncedValue] = useState(value);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDobouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [value]);
    return dobouncedValue
}

export default useDebounce
