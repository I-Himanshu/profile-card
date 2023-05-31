import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dbConnect from '@/lib/db'
import Profile from '@/models/Profile'

// const USER_INFO : {
//     name: string,
//     job: string,
//     image: string,
//     phone: string,
//     email: string,
//     about: string,
//     interests: string[],
//     socials:{
//         [key: string]: string
//     },
//     skills: string[]
// } = {
//     "name": "Himanshu Kumar",
//     "job": "Fullstack Developer",
//     "image": "/images/mypic.jpg",
//     "phone": "9876543210",
//     "email": "himanshu.kumar5403@gmail.com",
//     "about": "Fullstack web developer, Exploring the world of technology with experience of 3 year of coding, Love to learn new things",
//     "interests": ["coding", "learning", "photography", "travel"],
//     "socials": {
//         "instagram": "https://www.instagram.com/me.is.himanshu",
//         "linkedin": "https://www.linkedin.com/in/i-himanshu",
//         "github": "https://www.github.com/i-himanshu",
//         "medium": "https://medium.com/@i-himanshu"
//     },
//     "skills": ["HTML", "CSS", "JS", "MERN Stack", "NEXT.JS", "Firebase", "Linux", "Git & GitHub", "tailwindcss", "Bootstrap", "Material UI", "Flutter", "C", "C++", "Python", "SQL", "AWS", "Google Cloud"]
// }


export default function ProfileCard({USER_INFO}:{
    USER_INFO: {
        name: string,
        username: string,
        job: string,
        image: string,
        phone: string,
        email: string,
        about: string,
        interests: string[],
        socials:{
            [key: string]: string
        },
        skills: string[]
}
}) {
    console.log(USER_INFO, "Components")
    return (
        (
            <div className="card max-w-lg w-full">
            <div className="overflow-hidden max-w-[40%] mx-auto z-10 block relative rounded-full border-8 border-gray-400">
                <Image src={USER_INFO.image} alt="profile" width={500} height={500}/>
            </div>
            <div className="relative px-4 -mt-24">
                <div className="bg-white p-6 rounded-lg shadow-lg pt-28">
                    <div className="flex items-baseline gap-1">
                        <span className="inline-block bg-indigo-500 text-white text-xs rounded-full uppercase font-semibold tracking-wide px-3 py-1">Dev</span>
                        <div className=" text-gray-600 uppercase text-xs font-semibold tracking-wider">{USER_INFO.job}</div>
                    </div>
                    <h4 className="mt-1 text-lg font-semibold uppercase leading-tight truncate">{USER_INFO.name}</h4>
                    <div className="mt-1">
                        <span className="text-gray-600 text-sm">Joined </span>
                        <span className="text-gray-600 text-sm font-medium">Aug 2020</span>
                    </div>

                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">About</span>
                        <div className="text-gray-600 text-sm font-medium">{USER_INFO.about}</div>
                    </div>

                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">Interests</span>
                        <div className="mt-2 flex flex-wrap gap-1">
                            {
                                USER_INFO.interests.map((interest)=><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{interest}</span>)
                            }
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">Social</span>
                        <div className="mt-2 flex flex-wrap gap-3">
                            {
                                Object.keys(USER_INFO.socials).map((key,i)=><Link href={
                                    USER_INFO.socials[key]
                                } className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" key={i}>{key}</Link>)
                            }
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">Skills</span>
                        <div className="mt-2 flex flex-wrap gap-1">
                            {
                                USER_INFO.skills.map((skill)=><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{skill}</span>)
                            }
                        </div>  
                    </div>
                </div>
            </div>


        </div>
          )  
  )
}
