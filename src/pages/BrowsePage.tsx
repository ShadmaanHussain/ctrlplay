import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { data } from "./data";

const BrowsePage = () => {
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto mt-6 w-[80%] grid grid-cols-4 gap-4">
      <Card>
        <img src={data.background_image} alt="" className="rounded-t-xl"/>
        <CardHeader>
          <CardTitle className="text-2xl">{data.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BrowsePage;
