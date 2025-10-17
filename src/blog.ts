type Blog = {
    title: string;
    date: string;
    description: string;
    image: string; //ex. "./images/me.png"
    imageAlt: string; // description of image
    slug: string; // slug - URL name used to redirect to a specific page
}

const blogs: Blog[] = [
    {
        title: "Introduction to JSON",
        date: "October 16, 2025",
        description: "JSON (JavaScript Object Notation) is commonly used on the frontend to structure data. JSON is a universal format that is compatible with languages other than JavaScript.",
        image: "json.png",
        imageAlt: "picture of json logo",
        slug: "https://introtojson.com/blogs/how-to-use-json-in-2025",
        
    },
    {
        title: "Backend for Beginners",
        date: "October 16, 2025",
        description: "The backend is the engine of the website. It handles all the logic, data storage, and processing that users don't see. Think of it as the car's engine, fuel tank, and internal mechanics.",
        image: "backend.png",
        imageAlt: "picture comparing backend and frontend development",
        slug: "https://backendforbeginners.com/blogs/what-is-backend",
        
    }
]
function append

