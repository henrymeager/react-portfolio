import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>
                An aspiring software developer, based in Oxfordshire, United
                Kingdom
              </h3>
              <p>
                I have recently graduated a full stack web development bootcamp
                run by iO Academy, and I'm now looking at landing my first role
                inside of the tech space. My strong foundational skills coupled
                with my desire to grow as a developer, makes me believe that I
                could be a great asset to any business. Scroll down to see some
                of my work!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
