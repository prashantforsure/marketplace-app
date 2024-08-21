import MaxWidthWrapper from "@/components/maxWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button"

import ItemCard from "@/components/ItemCard";


const items = [
  { imageSrc: '/image1.jpg', itemName: 'Video Templates' },
  { imageSrc: '/image3.jpg', itemName: 'Graphics' },
  { imageSrc: '/image4.jpg', itemName: 'Presentation Templates' },
  { imageSrc: '/image5.jpg', itemName: 'Add-ons' },
];

export default function Home() {
  return ( 
    <div>
  <MaxWidthWrapper>
    <div className="py-20 flex flex-col text-center items-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Unlimited creative assets, <br />
      all in 
        <span className="text-blue-600"> One Place</span>.
      </h1>
      <p className="mt-6 text-lg font-semibold ">
      Access an unrivaled range of quality assets and templates from global artists, with one simple subscription.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href='/items'> 
        <Button>
          All Items
        </Button>
        </Link>
        <Link href='/'>
        <Button variant="outline">Outline</Button>
        </Link>
      </div>
    </div>
  </MaxWidthWrapper>
  <div className="border-t border-gray-300">
  <MaxWidthWrapper>
  <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Our Items</h1>
      <div className="flex flex-wrap -mx-2">
        {items.map((item, index) => (
          <ItemCard key={index} imageSrc={item.imageSrc} itemName={item.itemName} />
        ))}
      </div>
    </div>
        </MaxWidthWrapper>
  </div>
  </div>
  );
}
