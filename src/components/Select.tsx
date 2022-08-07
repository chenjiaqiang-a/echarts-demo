import { FC, useEffect, useState } from 'react';

interface SelectProps {
    options: string[] | number[] | { value: string | number; label: string }[];
    value?: string | number;
    onChange?: (val: string | number) => void;
    label?: string;
}

const Select: FC<SelectProps> = (props) => {
    const { options, value, label, onChange = () => {} } = props;
    const [opt, setOpt] = useState<string | number | undefined>(value);
    
    const handleSelectChange = (e: any) => {
        setOpt(e.target.value);
        onChange(e.target.value);
    };

    useEffect(() => {
        if (typeof value !== 'undefined') {
            setOpt(value);
        }
    }, [value])
    return (
        <div className="select-container">
        {label && <div className="select-label">{label}</div>}
        <select value={opt} onChange={handleSelectChange}>
            {options.map((option) => {
                const optValue =
                    typeof option === 'object' ? option.value : option;
                const optLabel =
                    typeof option === 'object' ? option.label : option;
                return (
                    <option key={optValue} value={optValue}>
                        {optLabel}
                    </option>
                );
            })}
        </select>
        </div>
    );
};

export default Select;
