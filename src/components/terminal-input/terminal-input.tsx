import { useState } from "react";
import styles from "./terminal-input.module.scss";
import { UseCommandContext } from "../../contexts/command";

function TerminalInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const { setCommand } = UseCommandContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^a-z,A-Z]/, "");
    setInputValue(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      setCommand(inputValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.path}>
        <span className={styles.user}># user</span> in{" "}
        <span className={styles.author}>~/muhin-maksim</span>:
      </p>
      <input
        className={styles.input}
        type="text"
        maxLength={20}
        onInput={handleInput}
        onKeyDown={handleEnter}
      />
    </div>
  );
}

export default TerminalInput;
