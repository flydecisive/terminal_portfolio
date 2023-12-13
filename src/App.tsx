import { useState } from "react";
import styles from "./app.module.scss";
import Terminal from "./components/terminal/terminal";
import { CommandContext } from "./contexts/command";

function App() {
  const [command, setCommand] = useState<string>("");

  console.log(command);

  return (
    <CommandContext.Provider value={{ command, setCommand }}>
      <div className={styles.app}>
        <h1 className={styles.title}>
          Не знаете с чего начать? Попробуйте команду{" "}
          <span className={styles.span}>help</span>
        </h1>
        <Terminal />
      </div>
    </CommandContext.Provider>
  );
}

export default App;
