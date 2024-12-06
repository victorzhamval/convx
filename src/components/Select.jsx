export default function Select({name, value, children, onChange }) {
  return (
    <select
      className="w-full h-11 bg-transparent pl-3.5 text-[#9D9D9D] border border-[#e6e6e6] rounded focus:outline-none appearance-none"
      onChange={(e) => onChange && onChange(e)}
      name={name && name}
      value={value}
    >
      {children}
    </select>
  );
}
