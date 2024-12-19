import React from "react";
import * as styles from "./Loading.module.scss";

const LoadingScreen = () => {
    return (
      <div className={styles.overlay}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
}

export default LoadingScreen;
