type FoodBarProps = {
  level: number;
};

function FoodBar({ level }: FoodBarProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold mb-2.5 text-center">COMIDA</div>
      <div className="w-12 h-72 bg-arena border-solid border-4 border-marron-900 rounded-3xl relative cursor-pointer transition transform duration-200 hover:scale-105">
        <div
          className="bg-marron-900 absolute bottom-0 left-0 right-0 rounded-3xl"
          style={{ height: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default FoodBar;
