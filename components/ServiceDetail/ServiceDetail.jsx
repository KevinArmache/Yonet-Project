import Image from "next/image";
import styles from "./ServiceDetail.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ServiceDetail = () => {
  return (
    <div className={`${styles.container} pb-12`}>
      <div className={`${styles.imageofservice}`}>
        <Image
          src="/asset/images/beatmaker.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="description-service-detail p-2">
        <div className={`${styles.userinfo}`}>
          <div>
            <Image
              src="/asset/images/beatmaker.jpg"
              alt="Picture of the author"
              width={50}
              height={50}
              className={`${styles.userimage}`}
            />
            <span>@ChrisBeatz</span>
            <div className={`${styles.containerstars} flex`}>
              <Icon icon="icon-park-solid:star" color="yellow" />
              <Icon icon="icon-park-solid:star" color="yellow" />
              <Icon icon="icon-park-solid:star" color="yellow" />
              <Icon icon="icon-park-solid:star" color="yellow" />
              <Icon icon="icon-park-solid:star" color="yellow" />
            </div>
            <span>{`(4,8)`} 349 avis</span>
          </div>
          <div className={`${styles.descriptionservice}`}>
            <h2 className="p-5 font-bold text-4xl">
              Création d'un générique d'entrée
            </h2>
            <p className="p-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur,
            </p>
            <div className={`${styles.priceandprofil} p-5 `}>
              <span>250€</span>
              <Link href="/">Voir le profil</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
