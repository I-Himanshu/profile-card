import ProfileCard from "@/components/ProfileCard";
import React from "react";
import dbConnect from "@/lib/db";
import Profile from "@/models/Profile";



async function getProfile(username: string) {
  "use server";
  await dbConnect();
  const USER_INFO = await Profile.findOne({ username: username });
  return USER_INFO.toObject();
}


export default async function page({params}: {params: any;}){
  const { username } = params;
  const USER_INFO = await getProfile(username);
  console.log(USER_INFO);
  return (
    <>
      <main className="flex justify-center items-center bg-gray-400 min-h-screen">
        <ProfileCard USER_INFO={{ ...USER_INFO }} />
      </main>
    </>
  );
}
