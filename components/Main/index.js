import clsx from "clsx";

import styles from "./main.module.scss";

function Main({ children, className }) {
  return (
    <main className={clsx(className, styles.main)}>
      <h1>Hello World!</h1>
      {children}
    </main>
  );
}

export default Main;
