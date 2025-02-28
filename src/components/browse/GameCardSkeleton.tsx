import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card className="relative bg-muted group">
      <Skeleton className="rounded-full absolute right-2 top-2 w-8 h-8" />
      <Skeleton className="rounded-t-xl w-full h-48" />
      <CardHeader className="relative z-10 px-4 py-1 mb-0">
        <Skeleton className="text-lg font-bold m-0 w-3/4 h-6" />
      </CardHeader>
      <CardContent className="flex justify-between items-center px-4 pb-4 pt-1 w-full">
        <Skeleton className="text-sm text-gray-500 w-1/2 h-4" />
        <Skeleton className="text-sm w-5 h-5 ml-2 p-3 rounded-sm" />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
