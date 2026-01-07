import style from './page.module.sass'
import InsetContainer from '../_components/Layout/InsetContainer/InsetContainer'
import Button from '../_components/Ui/Button/Button'
import notFoundStyle from './not-found.module.sass'
import { FiArrowLeftCircle } from 'react-icons/fi'

export default function notFound() {
  return (
    <main className={style.maincontainer}>
      <InsetContainer className={notFoundStyle.center}>
        <div className={notFoundStyle.wrapper}>
          <h2>
            404<span> | Not found</span>
          </h2>
          <Button variant="go-back-btn-top" goTo="/" ariaLabel="go back button">
            <FiArrowLeftCircle size={32} />
            <p>Back to Home</p>
          </Button>
        </div>
      </InsetContainer>
    </main>
  )
}
