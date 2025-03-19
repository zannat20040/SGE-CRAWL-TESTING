// Input.tsx
import React from 'react';

interface InputProps {
  text: string  ;
  type: string ;
  name: string  ;
  value: string | number ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ text, type, name, value, onChange }) => {
  return (
    <input
      className="overscroll-none border-[1px] hover:border-[#3b82f6] w-full p-1 placeholder:text-xs placeholder:text-gray-300 focus:outline-[#3b82f6] rounded-md"
      placeholder={text}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
