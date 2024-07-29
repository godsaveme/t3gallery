import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/5d3aff91-81bb-4023-b471-aaebb7965ab6-ni0r8m.jpeg",
  "https://utfs.io/f/8f2876aa-dfd7-4b6e-8845-562c73d0c49c-f1fios.jpeg",
  "https://utfs.io/f/0555240c-0953-4c76-967b-38d23ec31b93-szpttt.jpeg",
  "https://utfs.io/f/dd460726-de7a-4a05-a509-cdefe4272fec-psxzwb.jpeg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))



export default async function HomePage() {

  const posts = await db.query.posts.findMany()

  return (
    <main className="">
      <div>
        {
          posts.map(post => (
            <div key={post.id}>{post.name}</div>
          ))
        }
      </div>
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ))
        }

      </div>
    </main>
  );
}
