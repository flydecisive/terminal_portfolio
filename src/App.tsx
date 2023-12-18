/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styles from "./app.module.scss";
import Terminal from "./components/terminal/terminal";
import { CommandContext } from "./contexts/command";
import { ContentContext } from "./contexts/content";

function App() {
  const [command, setCommand] = useState<string>("");
  const [content, setContent] = useState<any>([
    { type: "header", disabled: true },
    { type: "terminal", disabled: false },
  ]);

  return (
    <CommandContext.Provider value={{ command, setCommand }}>
      <ContentContext.Provider value={{ content, setContent }}>
        <div className={styles.app}>
          <h1 className={styles.title}>
            Не знаете с чего начать? Попробуйте команду{" "}
            <span className={styles.span}>help</span>
          </h1>
          <Terminal />
        </div>
      </ContentContext.Provider>
    </CommandContext.Provider>
  );
}

export default App;
