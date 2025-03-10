export default function TodayNews() {
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="w-full h-[65px] overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex space-x-4 pt-2 h-full w-max">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[50px] bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}