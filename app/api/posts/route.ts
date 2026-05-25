import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,

  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  const Cloud_plant_data = await cloudinary.search
    .expression('folder="AnekLeaf"')
    .sort_by("created_at", "desc")
    .max_results(50)
    .execute();

  return Response.json(Cloud_plant_data.resources);
}
