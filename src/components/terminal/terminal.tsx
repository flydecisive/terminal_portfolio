/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styles from "./terminal.module.scss";
import TerminalInput from "../terminal-input/terminal-input";
import { useEffect } from "react";
import { UseCommandContext } from "../../contexts/command";
import { UseContentContext } from "../../contexts/content";
import Header from "../header/header";
import Help from "../commands/help/help";
import Info from "../info/info";

function Terminal() {
  const { command, setCommand } = UseCommandContext();
  const { content, setContent } = UseContentContext();

  const detectCommand = () => {
    switch (command) {
      case "help": {
        return { type: "help", disabled: false };
      }

      default: {
        return { type: "error", disabled: false };
      }
    }
  };

  useEffect(() => {
    if (command.length > 0) {
      const newContent = [...content];
      newContent.push(detectCommand());
      newContent.push({ type: "terminal", disabled: false });
      setContent(newContent);
    }
  }, [command]);

  useEffect(() => {
    setCommand("");
  }, [content]);

  const chooseContent = (el: any, index: number) => {
    if (el?.type === "terminal") {
      return <TerminalInput key={index} id={index} />;
    } else if (el?.type === "header") {
      return <Header key={index} />;
    } else if (el?.type === "help") {
      return <Help key={index} />;
    } else if (el?.type === "error") {
      return <Info type={el?.type} text="команда не найдена" color="red" />;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {content.map((el: any, index: number) => chooseContent(el, index))}
      </div>
    </div>
  );
}

export default Terminal;
