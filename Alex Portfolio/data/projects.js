import image from "../src/assets/datenight.png";
import image2 from "../src/assets/bootCampBuddy.png";
import image3 from "../src/assets/README.png";

const projects =
[
    {
        "title": "Date Night",
        "description": "A web application that allows users to select a mood and then be given a movie in which the genre matches the mood selected.",
        "image": image,
        "id": 1,
        "link": "https://atengelsgjerd.github.io/Date-Night/",
        "github": "https://github.com/atengelsgjerd/Date-Night",
        "technologies": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "The Movie Database API", "The Cocktail Database API"]
    },
    {
        "title": "Bootcamp Buddy",
        "description": "A web application for coding bootcamp students to find resources on a variety of topics.",
        "image": image2,
        "id": 2,
        "link": "https://bootcamp-buddy.onrender.com/login",
        "github": "https://github.com/atengelsgjerd/Bootcamp-Buddy",
        "technologies": ["HTML", "Handlebars", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "bcrypt", "Axios", "Render"]
    },
    {
        "title": "Professional README Generator",
        "description": "A command-line application that dynamically creates a professional README.md from a user's input.",
        "image": image3,
        "id": 3,
        "link": "",
        "github": "https://github.com/atengelsgjerd/Bootcamp-Buddy",
        "technologies": ["HTML", "JavaScript", "Node.js", "Inquirer"]
    }
];

export default projects;