import Image from "next/image";
import style from "./ArticleCard.module.sass";
import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";

export interface ArticleCardProps {
  category?: string;
  title: string;
  authorImg: string;
  authorName: string;
  summary?: string;
  cover?: string;
  slug: string;
}

export default function ArticleCard({ category, title, authorImg, authorName, slug }: ArticleCardProps) {
  return (
    <Link href={`/${slug}`} className={style.clickable}>
      <article className={style.card}>
        <div className={style.card_body}>
          <div className={style.card_category}>
            <p>{category}</p>
          </div>
          <div>
            <h3>{title}</h3>
            <div className={style.author_infos}>
              <Image src={authorImg} alt={`${authorName} image`} width={40} height={40} />
              <p>{`written by ${authorName}`}</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className={style.card_action}>
          <p>go to article</p>
          <FiArrowRightCircle size={32} />
        </div>
      </article>
    </Link>
  );
}
