/* eslint-disable @typescript-eslint/no-explicit-any */
import layoutStyles from "../command-layout.module.scss";
import styles from "./help.module.scss";

function Help() {
  const commandsList = [
    { command: "help", text: "выводит список всех команд" },
    { command: "about", text: "выводит информацию о разработчике" },
    { command: "contacts", text: "выводит список контактов разработчика" },
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
      <ul className={styles.list}>
        {commandsList.map((el: any, index: number) => createCommand(el, index))}
      </ul>
    </div>
  );
}

export default Help;
