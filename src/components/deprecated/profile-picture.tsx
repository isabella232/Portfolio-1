import React from "react";
import Image from "next/image";
const ProfilePicture = () => {
  return (
    <div className="flex flex-col items-center py-4 ml-4">
      <Image
        src="/assets/img/pp.jpg"
        width={200}
        height={200}
        className="rounded-full"
      />
      <span className="mt-4 font-medium dark:text-gray-300 text-indigo-700 text-3xl">
        Arno Demarchi
      </span>
    </div>
  );
};

export default ProfilePicture;
