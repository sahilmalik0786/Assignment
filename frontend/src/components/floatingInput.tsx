import React, { useState } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
 
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        placeholder="" // <-- trick to make :placeholder-shown work
        onChange={onChange}
        className="peer w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <label
        className="absolute left-3 -top-3.5  text-secondarytext text-md transition-all bg-white p-1 "
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;