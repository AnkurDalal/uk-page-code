import styles from "../Timeline.module.css";

export default function Timeline({ data }) {
  const { headingLines, items } = data;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        {headingLines.map((line) => (
          <span className={styles.headingLine} key={line}>
            {line}
          </span>
        ))}
      </h2>

      <div className={styles.timeline}>
        {items.map((item, index) => {
          const contentOnLeft = index % 2 !== 0;
          const itemClassName = `${styles.item} ${
            contentOnLeft ? styles.left : styles.right
          }`;

          return (
            <article className={itemClassName} key={item.id}>
              <div className={styles.centerGroup}>
                <span className={styles.dot} aria-hidden="true"></span>
                <div className={styles.icon} aria-hidden="true">
                  <img src={item.icon} alt="" />
                </div>
              </div>

              <div className={styles.text}>
                <p className={styles.metric} style={{ color: item.color }}>
                  {item.highlight}
                </p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
