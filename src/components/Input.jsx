export default function Input({ name, value, placeholder, onChange, type = "text", disabled = false}) {
  return (
    <input
      className="w-full h-11 bg-transparent pl-3.5 text-[#656565] border border-[#e6e6e6] rounded focus:outline-none appearance-none placeholder:text-[#9D9D9D]"
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      onChange={(e) => onChange(e)}
    />
  );
}
