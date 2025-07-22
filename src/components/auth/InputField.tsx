import type { ReactNode } from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
};

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: Props) {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="text-sm text-gray-300 block mb-1">
        {label}
      </label>
      <div className="flex items-center bg-[#2b2b2b] rounded-md px-3">
        {icon && <span className="text-gray-400 mr-2">{icon}</span>}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent w-full py-2 outline-none text-sm text-white"
          required
        />
      </div>
    </div>
  );
}
