"use client";

import { Banner } from "@/components/banner";
import Image from "next/image";
import { useEffect, useState } from "react";

type PlantData = {
  asset_id: string;
  secure_url: string;
  public_id: string;
  display_name: string;
};

export function Content() {
  const [plantData, setPlantData] = useState<PlantData[]>([]);

  // FETCHING POST FROM API ROUTE
  useEffect(() => {
    async function cloudImageFetch() {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPlantData(data);
      } catch (err) {
        console.log(err);
      }
    }
    cloudImageFetch();
  }, []);

  return (
    <main className="min-h-0 flex-1 overflow-y-auto">
      <Banner />
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {plantData.map((post) => (
          <div
            key={post.asset_id}
            className="group overflow-hidden rounded-md border"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={post.secure_url}
                alt="Plant image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                priority
              />
            </div>

            <div className="p-2">
              <p className="mt-1 text-sm text-neutral-400">
                {/* TEXT DISPLAY - PLANT NAMES */}
                {post.display_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
