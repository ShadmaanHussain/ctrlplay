import GameCardSkeleton from "@/components/browse/GameCardSkeleton";

const CardListSkeleton = () => {
  return (
    <div className="mt-6 mb-8 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <GameCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CardListSkeleton;
