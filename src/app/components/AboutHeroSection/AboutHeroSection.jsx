import React from "react";
import styles from "./BlueSection.module.css";

function BlueSection({ title,Pargraph }) {
  return (
    <div className="w-full mb-10 mt-12 flex justify-start items-center">
      <div className={styles.blueSection}>
        <h1 className={styles.blueSectionTitle}>About <span className="text-[#30B43C]">Kalos Fit</span></h1>
        <p className={styles.Pargraph}>{Pargraph}</p>
      </div>

    </div>
  );
}

export default BlueSection;
