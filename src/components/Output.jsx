export default function Output({children}) {
  return (
    <div
      className="w-full h-11 flex items-center bg-transparent pl-3.5 text-[#656565] bg-gray-200 rounded focus:outline-none appearance-none placeholder:text-[#9D9D9D]"
    >
    {children}
    </div>
  );
}
