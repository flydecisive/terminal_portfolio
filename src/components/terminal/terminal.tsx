/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styles from "./terminal.module.scss";
import TerminalInput from "../terminal-input/terminal-input";
import { useEffect } from "react";
import { UseCommandContext } from "../../contexts/command";
import { UseContentContext } from "../../contexts/content";
import Header from "../header/header";

function Terminal() {
  const { command } = UseCommandContext();
  const { content, setContent } = UseContentContext();

  useEffect(() => {
    if (command.length > 0) {
      const newContent = [...content];
      newContent.push({ type: "terminal", disabled: false });
      setContent(newContent);
      console.log(newContent);
    }
  }, [command]);

  const chooseContent = (el: any, index: number) => {
    if (el?.type === "terminal") {
      return <TerminalInput key={index} id={index} />;
    } else if (el?.type === "header") {
      return <Header key={index} />;
    }
  };

  return (
    <div className={styles.container}>
      {content.map((el: any, index: number) => chooseContent(el, index))}
    </div>
  );
}

export default Terminal;
