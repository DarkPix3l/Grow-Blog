import Image from "next/image";
import styles from "./page.module.sass";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>GROW BLOG/_</h1>
      <div className={styles.separator}>
        <p>A blog that grows with you. Whether you’re sharing thoughts, tutorials, or stories, our platform adapts to your style. Write freely, design your space with simple tools, and let your audience enjoy a clean, distraction-free reading experience.</p>
      </div>
    </main>
  );
}
