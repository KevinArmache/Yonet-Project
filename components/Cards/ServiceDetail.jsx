import Image from "next/image";
import styles from "./ServiceDetail.module.css";

const ServiceDetail = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="image-service-detail">
        <Image
          src="/asset/images/beatmaker.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="description-service-detail p-3">
        <div className={`${styles.userinfo}`}>
          <Image
            src="/asset/images/beatmaker.jpg"
            alt="Picture of the author"
            width={30}
            height={50}
            className={`${styles.userimage}`}
          />
          <span>@JhonDoe</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
