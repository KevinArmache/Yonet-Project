import Image from "next/image";
import styles from "./RecommendedCard.module.css";

const RecommendedCard = () => {
  return (
    <div className={`${styles.recommended_card} shadow-md`}>
      <div>
        <Image
          src="/asset/images/beatmaker.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          className={`${styles.recommended_image}`}
        />
      </div>
      <div className={`${styles.recommended_text} `}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          distinctio quibusdam soluta doloremque laborum nihil veritatis fuga
        </p>

        <span className={`${styles.recommended_time} mt-1 font-bold`}>
          il y'a une heure
        </span>
      </div>
    </div>
  );
};

export default RecommendedCard;
