import { useState } from "react";
import styles from "./terminal-input.module.scss";
import { UseCommandContext } from "../../contexts/command";
import { UseContentContext } from "../../contexts/content";

interface ITerminalInputProps {
  id: number;
}

function TerminalInput({ id }: ITerminalInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  // const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { setCommand } = UseCommandContext();
  const { content, setContent } = UseContentContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^a-z,A-Z]/, "");
    setInputValue(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      setCommand(inputValue);
      const newContent = [...content];
      newContent[id].disabled = true;
      setContent(newContent);
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
        disabled={content?.[id].disabled}
      />
    </div>
  );
}

export default TerminalInput;
