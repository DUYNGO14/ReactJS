interface InputProps {
    type: string;
    placeholder: string;
    className?: string;
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className, value, name, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            value={value || ''}
            name={name}
            onChange={onChange}
        />
    );
};

export default Input;