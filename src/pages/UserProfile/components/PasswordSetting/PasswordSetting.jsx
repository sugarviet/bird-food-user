import styles from './PasswordSetting.module.css'

function PasswordSetting() {
    return (  
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.title}`}>Change user information here</span>
            <div>
                
            </div>
            <button className={`${styles.updateBtn}`}>Update information</button>
        </div>
    );
}

export default PasswordSetting;