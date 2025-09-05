import Image from "next/image";
import style from "./Article.module.sass";
import { TfiArrowCircleRight } from "react-icons/tfi";

interface ArticleCardProps {
  category: string;
  title: string;
  authorImg: string;
  authorName: string;
  summary: string;
  cover: string;
}

export default function ArticleCard({ category, title, authorImg, authorName, summary, cover }: ArticleCardProps) {
  return (
    <article className={style.card}>
      <div className={style.card_body}>
        <div className={style.card_category}>
          <p>{category}</p>
        </div>
        <h2>{title}</h2>
        <div className={style.author_infos}>
          <Image className={style.author_img} src={authorImg} alt={`${authorName} image`} width={50} height={50} />
          <p>{authorName}</p>
        </div>
      </div>
      <div className={style.card_action}>
        <p>go to article</p>
        <TfiArrowCircleRight />
      </div>
    </article>
  );
}
