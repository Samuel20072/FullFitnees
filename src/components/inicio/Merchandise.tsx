// src/components/LatestStories.tsx
import story1 from "../../assets/fullFinnes.png";
import story2 from "../../assets/gym.jfif";
import story3 from "../../assets/rumba.png";

const featured = {
  image: story1,
  category: "Food and Drink",
  title: "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
  date: "Aug 13, 2024",
  timeToRead: "4 min read",
  summary:
    "Explore the best California eats every foodie can't miss. From street tacos to artisan chocolate, these picks define the LA experience.",
};

const sidebarStories = [
  {
    image: story2,
    category: "Shopping",
    title: "15 South London Markets You’ll Love: Best Markets in South London",
    date: "Aug 9, 2024",
    timeToRead: "4 min read",
  },
  {
    image: story3,
    category: "Hotels",
    title: "10 incredible hotels around the world you can book with points in 2024",
    date: "Aug 10, 2024",
    timeToRead: "4 min read",
  },
  {
    image: story2,
    category: "Travel Budget",
    title: "Visiting Chicago on a Budget: Affordable Eats and Attraction Deals",
    date: "Aug 6, 2024",
    timeToRead: "4 min read",
  },
];

export default function LatestStories() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Stories</h2>
          <button className="border border-gray-800 px-4 py-1 rounded-full text-sm hover:bg-gray-800 hover:text-white transition">
            Read more articles
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main Story */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 h-64">
              <img
                src={featured.image}
                alt="Featured"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500">{featured.category}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-1">
              {featured.title}
            </h3>
            <p className="text-xs text-gray-500 mb-1">
              {featured.date} • {featured.timeToRead}
            </p>
            <p className="text-sm text-gray-600">{featured.summary}</p>
          </div>

          {/* Sidebar Stories */}
          <div className="flex flex-col gap-6">
            {sidebarStories.map((story, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{story.category}</p>
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                    {story.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {story.date} • {story.timeToRead}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
