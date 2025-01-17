export default function HomeMap() {
  return (
    <div className="flex items-center justify-center h-[40vh] w-[370px] container rounded-3xl mt-1">
      <div className="relative w-[90vw] h-[40vh] bg-white shadow-lg rounded-lg overflow-hidden border text-center">
        지도
             <div className="absolute bottom-4 left-4 text-gray-600">
          <p>현재 위치: 서울시 광운대학교</p>
        </div>
        <button
          className="absolute bottom-4 right-4 bg-[#7D170A] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#5a0f07] active:bg-[#3e0a05] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7D170A]"
          onClick={() => console.log("빠른 검색 버튼 클릭됨")}
        >
          빠른 검색
        </button>
      </div>
    </div>
  );
}