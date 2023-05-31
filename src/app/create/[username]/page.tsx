import React from 'react'
import dbConnect from '@/lib/db';
import Profile from '@/models/Profile';

// async function createProfile(data: FormData) {
//     "use server";
//     console.log(data);
//     var obj:any = {socials: {}};
//     data.forEach((value, key) => {
//         if(key.includes('socials')){
//             var socials = key.split('[')[1].split(']')[0];
//             obj.socials[socials] = value;
//         }else{
//             obj[key] = value;
//         }
//     });
//     console.log(obj);

//     // Save the image to public/images
//     const image:any = await data.get('image');

//     console.log(image, image.name);
//     const path = require('path');
//     const fs = require('fs');
//     const { v4: uuidv4 } = require('uuid');
//     const ext = path.extname(image.name);
//     const filename = uuidv4() + ext;
//     const filepath = path.join(process.cwd(), 'public', 'images', filename);
//     // Now save the file
//     fs.writeFile(filepath, image.data, (err: any) => {
//         if(err){
//             console.log(err);
//         }
//     }
//     );
//     obj.image = filename;
//     // console.log(obj);
//     return obj;
// }

async function createProfile(data: FormData) {
    "use server"
    console.log(data);
    var obj: any = { socials: {} };
  
    data.forEach((value, key) => {
      if (key.includes('socials')) {
        var socials = key.split('[')[1].split(']')[0];
        obj.socials[socials] = value;
      } else {
        obj[key] = value;
      }
    });
  
    console.log(obj);
  
    // Save the image to public/images
    const image:any = await data.get('image');
    console.log(image, image.name, image.data, image.type, image.size, image.lastModified, image.base64);
  
    const path = require('path');
    const fs = require('fs');
    const { v4: uuidv4 } = require('uuid');
    const ext = path.extname(image.name);
    const filename = uuidv4() + ext;
    const filepath = path.join(process.cwd(), 'public', 'images', filename);
  
    // Now save the file
    fs.writeFile(filepath, image.data, (err: any) => {
      if (err) {
        console.log(err);
      }
    });
  
    obj.image = filename;
  
    console.log(obj);
    return obj;
  }

export default async function page({params}: {params: any;}){
    const { username } = params;
    return (
      <>
        <main className="flex justify-center items-center min-h-screen from-blue-500 to-green-400 bg-gradient-to-r first-letter:font-bold">
            <div className="flex flex-col justify-center items-center">
                <form className={
                    "flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8 m-4"
                    // form file upload
                    
                } action={createProfile}>
                    <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center border-b-2 border-gray-400 w-full">Create Profile</h1>
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="text" name="name" placeholder="Name" />
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="text" name="username" placeholder="Username" />
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="text" name="job" placeholder="Job" />
                    <label className={
                        "border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent flex flex-col justify-center items-center"
                    }>
                        <span className="text-gray-400">Select Profile Image</span>
                        <input type="file" name="image"/>
                    </label>
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="tel" name="phone" placeholder="Phone" />
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="email" name="email" placeholder="Email" />
                    <textarea className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent w-full" name="about" placeholder="About"></textarea>
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="text" name="interests" placeholder="Interests: gaming, coding..." />
                    <div className={
                        "flex flex-col justify-center items-center w-full"
                    }>
                        {/* Take url for github, twitter, linkedin and instagtram and so more */}
                        <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="url" name="socials[github]" placeholder="Github" />
                        <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="url" name="socials[twitter]" placeholder="Twitter" />
                        <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="url" name="socials[instagram]" placeholder="Instagram" />
                        <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="url" name="socials[linkedin]" placeholder="Linkedin" />
                    </div>
                    <input className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent" type="text" name="skills" placeholder="Skills: HTML, CSS, JS..." />
                    <button className="border-2 border-gray-400 rounded-lg p-2 m-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-transparent bg-blue-500 text-white font-bold hover:bg-blue-700" type="submit">Create Profile</button>
                </form>
            </div>
        </main>

      </>
    );
  }