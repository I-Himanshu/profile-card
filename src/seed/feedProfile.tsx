import Profile from "@/models/Profile";
import dbConnect from "@/lib/db";
const feedProfile = async () => {
    await dbConnect();
    console.log("Profile Data Feeding g");
    const profileData = [
        {
            username: "john",
            name: "John Doe",
            job: "Web Developer",
            image: "/images/profile.jpg",
            phone: "1234567890",
            email: "johndoe@gmail.com",
            about: "FullStack web developer, Exploring the world of technology with experience of 3 year of coding, Love to learn new things",
            interests: ["coding", "learning", "photography", "travel"],
            socials: {
                "facebook": "https://www,facebook.com/error"
            },
            skills: ["HTML", "CSS", "JS", "MERN Stack", "NEXT.JS", "Firebase", "Linux", "Git & GitHub", "tailwindcss", "Bootstrap", "Material UI", "Flutter", "C", "C++", "Python", "SQL", "AWS", "Google Cloud"]

        },

        {
            username: "naruto",
            name: "Naruto Uzumaki",
            job: "Hokage",
            image: "/images/profile.jpg",
            phone: "1234567890",
            email: "naruto uzumaki",
            about: "Love to watch anime, want to feel every moment of anime in real life with help of my creativity, want ot be A multimiilionier, Hoping for a great life of myself",
            interests: ['observation', 'anime', 'novels'],
            socials: {
                'github': "https://www.github.com/facebook"
            },
            skills: ["guitar", "bargening" ]
        },
        {
            username: "nayan",
            name:  "Nayan Kumar",
            job: "Ethical Hacker",
            image: "/images/profile.jpg",
            phone: "9352476039",
            email: "nayankumarnayan601@gmail.com",
            about: "Want to meet new new girls, and want to attract them with my figure || Full Confident Chapri Boy",
            interests: ["eating", "sleeping", "playing", "coding"],
            socials: {
                "instagram": "https://www.instagram.com/nayan_kumar_601",
            },
            skills: ["HTML", "CSS", "JS", "MERN Stack", "NEXT.JS", "Firebase", "Linux", "Git & GitHub", "tailwindcss", "Bootstrap", "Material UI", "Flutter", "C", "C++", "Python", "SQL", "AWS", "Google Cloud"]
        }
    ];

    // try {
        console.log("Profile Data Importing");
        await Profile.insertMany(profileData);
        console.log("Profile Data Imported");
    // }
    // catch (error: any) {
    //     console.error(`Error: ${error.message}`);
    //     process.exit(1);
    // }


}


export default feedProfile;