import styles from "./app.module.scss";
import Terminal from "./components/terminal/terminal";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>
        Не знаете с чего начать? Попробуйте команду{" "}
        <span className={styles.span}>help</span>
      </h1>
      <Terminal />
    </div>
  );
}

export default App;
