import styles from "./terminal.module.scss";
import TerminalInput from "../terminal-input/terminal-input";

function Terminal() {
  return (
    <div className={styles.container}>
      <TerminalInput />
    </div>
  );
}

export default Terminal;
