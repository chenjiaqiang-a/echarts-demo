import { FC, useEffect, useState } from 'react';

interface RadioProps {
    value?: number | string;
    onChange?: (val: number | string) => void;
    options: string[] | number[] | { value: number | string; label: string }[];
}

const Radio: FC<RadioProps> = (props) => {
    const { value, onChange = () => {}, options } = props;
    const [opt, setOpt] = useState<number | string | null>(null);

    useEffect(() => {
        if (value) {
            setOpt(value);
        }
    }, [value]);
    const handleOptChange = (val: string | number) => {
        if (!value) {
            setOpt(val);
        };
        onChange(val);
    };
    return (
        <div className="radio-group">
            {options.map((option, idx) => {
                const optValue =
                    typeof option === 'object' ? option.value : option;
                const optLabel =
                    typeof option === 'object' ? option.label : option;
                return (
                    <div className="radio-wrap" key={idx}>
                        <input
                            type="radio"
                            value={optValue}
                            checked={value === optValue}
                            onChange={(e) => handleOptChange(e.target.value)}
                        />
                        <span className="radio-label">{optLabel}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Radio;
