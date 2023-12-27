import styles from "./about.module.scss";
import layoutStyles from "../command-layout.module.scss";

function About() {
  return (
    <div className={layoutStyles.wrapper}>
      <p className={styles.text}>
        Привет! Меня зовут Максим. Я Web-разработчик из Волгограда. <br />
        <br />
        Закончил курсы по Web-разработке от компании SkyPro, работаю
        Frontend-разработчиком в благотворительном проекте Oncologica и пишу
        свои пет-проекты. <br /> Очень люблю программировать, заниматься
        спортом, читать и своих котов.
      </p>
    </div>
  );
}

export default About;
