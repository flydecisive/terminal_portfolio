/* eslint-disable @typescript-eslint/no-explicit-any */
import layoutStyles from "../command-layout.module.scss";
import styles from "./help.module.scss";

function Help() {
  const commandsList = [
    { command: "help", text: "выводит список всех команд" },
  ];

  const createCommand = (el: any, index: number) => {
    return (
      <li key={index} className={styles.elem}>
        <span className={styles.command}>{el.command}</span>
        <span>{el.text}</span>
      </li>
    );
  };
  return (
    <div className={layoutStyles.wrapper}>
      <h3 className={styles.heading}>Список команд:</h3>
      <ul className={styles.list}>
        {commandsList.map((el: any, index: number) => createCommand(el, index))}
      </ul>
    </div>
  );
}

export default Help;
