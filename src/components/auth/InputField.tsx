interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, type, name, value, onChange }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-white">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}