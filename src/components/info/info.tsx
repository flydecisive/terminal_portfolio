import styles from "./info.module.scss";

interface IInfoProps {
  type: string;
  text: string;
  color: string;
}

function Info({ type, text, color }: IInfoProps) {
  return (
    <p className={`${styles[color]} ${styles.info}`}>
      <span className={styles.type}>{type}</span>: {text}
    </p>
  );
}

export default Info;
