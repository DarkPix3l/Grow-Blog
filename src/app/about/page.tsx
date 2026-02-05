// Features Page

import InsetContainer from '@/app/_components/Layout/InsetContainer/InsetContainer'
import Section from '@/app/_components/Layout/Section/Section'
import Button from '@/app/_components/Ui/Button/Button'
import { Divider } from '@/app/_components/Ui/Divider/Divider'
import style from './page.module.sass'
import TextBody from '../_components/Ui/TextBody/TextBody'

export default function page() {
  return (
    <main>
      <Section id="features_section">
        <InsetContainer variant="fixed" className={style.features_container}>
          <article>
            <header>
              <h2>Your Words and Experiences Matter</h2>
              <TextBody>A minimalist space for maximalist ideas</TextBody>
            </header>

            <Divider orientation="horizontal" deko={false} className={style.separator} />
            <Section className={style.section}>
              <h3>About</h3>
              <TextBody>
                I&rsquo;m building this space to be more than just a collection of posts. It&rsquo;s a laboratory for
                design and code, and eventually, a place where language is no longer a barrier to storytelling.
              </TextBody>
              <TextBody>
                This is a personal project, built step-by-step. Right now, I am focusing on the core experience making
                ensuring the blog works seamless as possible before adding features.
              </TextBody>
            </Section>

            <Section className={style.section}>
              <h3>What&rsquo;s Next</h3>
              <TextBody>
                Once the foundation is solid, the goal is to bridge the gap between different languages. A story written
                in one corner of the world should be just as accessible and impactful in another. I&rsquo;m working
                toward a system where the translation doesn&rsquo;t just swap words, but preserves the tone and intent
                of the author.
              </TextBody>
            </Section>

            <Divider orientation="horizontal" deko={false} className={style.separator} />
            <TextBody>G/*</TextBody>

            <Button variant="go-back-btn-inset" goTo="/" ariaLabel="Go back button" classname={style.bubu}>
              Go Back
            </Button>
          </article>
        </InsetContainer>
      </Section>
    </main>
  )
}
