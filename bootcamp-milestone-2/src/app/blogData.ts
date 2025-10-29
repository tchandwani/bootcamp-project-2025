export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Introduction to JSON",
    date: "October 16, 2025",
    description:
      "JSON (JavaScript Object Notation) is commonly used on the frontend to structure data. JSON is a universal format that is compatible with languages other than JavaScript.",
    image: "/json.png",
    imageAlt: "picture of json logo",
    slug: "introduction-to-json",
  },
  {
    title: "Backend for Beginners",
    date: "October 16, 2025",
    description:
      "The backend is the engine of the website. It handles all the logic, data storage, and processing that users don't see. Think of it as the car's engine, fuel tank, and internal mechanics.",
    image: "/backend.png",
    imageAlt: "picture comparing backend and frontend development",
    slug: "backend-for-beginners",
  },
];

export default blogs;