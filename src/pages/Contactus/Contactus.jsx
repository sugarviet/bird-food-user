import styles from './Contactus.module.css';
import Banner from './components/Banner';
import { Input, Button } from 'antd';


const Contactus = () => {

    const { TextArea } = Input;
    return (
        <div>
            <div><Banner /></div>
            <div className={styles.textBanner}>
                <div className={styles.hrContent}>
                    <hr className={styles.hrTop} />
                    <hr className={styles.hrBot} />
                </div>
                <h1 className={styles.textProducts}>Contact Us</h1>
                <p className={styles.textDescription}>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum <br /> diam justo sed rebum vero dolor duo.</p>
            </div>

            <div className={styles.body}>
                <div className={styles.bodyContact}>
                    <div className={styles.bodyContact1}>
                        <div className={styles.bodyContactContent}>
                            <h1 className={styles.bodyText}>Call Us</h1>
                            <div className={styles.iconText}>
                                <img className={styles.icon} src={'/src/assets/phone.png'}></img>
                                <p className={styles.bodyDescription}>+012 345 67890</p>
                            </div>
                        </div>
                        <div className={styles.bodyContactContent}>
                            <h1 className={styles.bodyText}>Email Us</h1>
                            <div className={styles.iconText}>
                                <img className={styles.icon1} src={'/src/assets/letter.png'}></img>
                                <p className={styles.bodyDescription}>info@example.com</p>
                            </div>
                        </div>
                        <div className={styles.bodyContactContent}>
                            <h1 className={styles.bodyText}>Office Address</h1>
                            <div className={styles.iconText}>
                                <img className={styles.icon} src={'/src/assets/address.png'}></img>
                                <p className={styles.bodyDescription}>123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div className={styles.bodyContactContent}>
                            <h1 className={styles.bodyText}>Follow Us</h1>
                            <div className={styles.iconText}>
                                <img className={styles.icon2} src={'/src/assets/twitter.png'}></img>
                                <img className={styles.icon2} src={'/src/assets/facebook.png'}></img>
                                <img className={styles.icon2} src={'/src/assets/linkedin.png'}></img>

                                <div className={styles.circleIcon}>
                                    <img className={styles.icon3} src={'/src/assets/youtube.png'}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bodyContactRight}>
                    <div>              <p className={styles.textContactRight}>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP <br /> in a few minutes. Just copy and paste the files, add a little code and you &apos;re done. Download Now.</p>
                        <Input style={{ width: '350px', height: '58px', borderRadius: '0', marginTop: '25px' }} placeholder="large size" />
                        <Input style={{ width: '350px', height: '58px', borderRadius: '0', marginLeft: '15px' }} placeholder="large size" />
                        <Input style={{ width: '715px', height: '58px', borderRadius: '0', marginTop: '15px' }} placeholder="large size" />
                        <TextArea style={{ width: '715px', borderRadius: '0', marginTop: '15px' }} rows={10} placeholder="maxLength is 6" maxLength={6} />
                    </div>
                    <Button
                        type='primary'
                        className={styles.bodyContactButton}
                    >
                      <p className={styles.bodyContactButtonText}>Send Message</p>
                    </Button>
                </div>

            </div>


        </div>
    )
}
export default Contactus;