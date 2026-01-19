import style from "./CategoryTitle.module.sass"
import { Divider } from '../Divider/Divider'
interface CategoryTitleProps {
  title: string
}
export default function CategoryTitle({title}:CategoryTitleProps) {
  return (
    <>
      <h3 className={style.title}>{title}</h3>
      <Divider className={style.ver_div} orientation="vertical" flexDir="row" deko={false} />
    </>
  )
}
