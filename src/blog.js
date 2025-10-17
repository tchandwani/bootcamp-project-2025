var blogs = [
    {
        title: "Introduction to JSON",
        date: "October 16, 2025",
        description: "JSON (JavaScript Object Notation) is commonly used on the frontend to structure data. JSON is a universal format that is compatible with languages other than JavaScript.",
        image: "json.png",
        imageAlt: "picture of json logo",
        slug: "introduction-to-json",
    },
    {
        title: "Backend for Beginners",
        date: "October 16, 2025",
        description: "The backend is the engine of the website. It handles all the logic, data storage, and processing that users don't see. Think of it as the car's engine, fuel tank, and internal mechanics.",
        image: "backend.png",
        imageAlt: "picture comparing backend and frontend development",
        slug: "backend-for-beginners",
    },
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";
    var title = document.createElement("h1");
    title.textContent = blog.title;
    blogDiv.appendChild(title);
    var date = document.createElement("p");
    date.textContent = blog.date;
    date.className = "blog-date";
    blogDiv.appendChild(date);
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    blogDiv.appendChild(image);
    var description = document.createElement("p");
    description.textContent = blog.description;
    blogDiv.appendChild(description);
    var link = document.createElement("a");
    link.href = `./${blog.slug}.html`;
    link.textContent = "Read More";
    link.target = "_blank";
    blogDiv.appendChild(link);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
