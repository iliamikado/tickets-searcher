import { useCallback, useState } from "react";

export function useCount(initialValue: number, minValue: number, maxValue: number): [number, () => void, () => void] {
    const [value, setValue] = useState(initialValue);

    const increase = useCallback(() => {
        setValue((prevState) => {
            return prevState < maxValue ? prevState + 1 : prevState;
        });
    }, [maxValue]);

    const decrease = useCallback(() => {
        setValue((prevState) => {
            return prevState > minValue ? prevState - 1 : prevState;
        });
    }, [minValue]);

    return [value, increase, decrease];
}