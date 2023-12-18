import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.dev}>Мухин Максим</h2>
      <p className={styles.text}>
        Это интерактивное портфолио в стиле терминала
      </p>
    </div>
  );
}

export default Header;
