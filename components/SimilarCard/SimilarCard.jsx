import React from "react";
import Image from "next/image";

function SimilarCard() {
  return (
    <div className="">
      <Image
        src="/asset/images/beatmaker.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <span className="service-similar-by-username text-sx">
        Sample Service Audio
        <br />
        Par @user
      </span>
    </div>
  );
}

export default SimilarCard;
