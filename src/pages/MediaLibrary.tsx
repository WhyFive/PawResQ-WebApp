import { BottomNav } from "../components/BottomNav";
import { Image } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop",
];

export function MediaLibrary() {
  return (
    <div className="bg-orange-100 p-2">
      <div className="flex items-center text-center my-4 px-2">
        <Image className="w-6 h-6 text-green-500 mr-3" />
        <h1 className="text-2xl font-semibold text-black">Media Library</h1>
      </div>

      {/* Photo Grid */}
      <div className="overflow-y-auto flex-grow px-2 py-4 mb-4 bg-orange-200 rounded-lg shadow-md">
        <div className="grid grid-cols-3 gap-2">
          {photos.map((photo, index) => (
            <div key={index} className="relative group aspect-square w-full">
              <img
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
