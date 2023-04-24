import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    return useStorage(key, initialValue, localStorage);
}

export const useSessionStorage = (key, initialValue) => {
    return useStorage(key, initialValue, sessionStorage);
}

const useStorage = (key, initialValue, storageObject) => {
    const [value, setValue] = useState();

    return [value, setValue];
}