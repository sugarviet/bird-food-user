import styles from "./TabSetting.module.css";

function TabSetting({ tab, isActive, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
    >
      <span className={`${styles.title}`}>{tab.title}</span>
      <span className={`${styles.description}`}>{tab.description}</span>
    </button>
  );
}

export default TabSetting;
