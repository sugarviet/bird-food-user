import styles from './ContactUsContent.module.css';

import { Input, Button } from 'antd';


const ContactUsContent = () => {

    const { TextArea } = Input;
    return (
        <div>
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
                    <div>
                        <p className={styles.textContactRight}>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP <br /> in a few minutes. Just copy and paste the files, add a little code and youre done. Download Now.</p>
                        <Input className={styles.textContactInput} style={{ width: '350px', height: '58px', border: '2px solid #ced4da', borderRadius: '0', marginTop: '25px' }} placeholder="Your Name" />
                        <Input className={styles.textContactInput} style={{ width: '350px', height: '58px', border: '2px solid #ced4da', borderRadius: '0', marginLeft: '15px' }} placeholder="Your Email" />
                        <Input className={styles.textContactInput} style={{ width: '715px', height: '58px', border: '2px solid #ced4da', borderRadius: '0', marginTop: '15px' }} placeholder="Subject" />
                        <TextArea className={styles.textContactInput} style={{ width: '715px', border: '2px solid #ced4da', borderRadius: '0', marginTop: '15px' }} rows={10} placeholder="Message" maxLength={6} />
                    </div>
                    <Button
                        type='primary'
                        className={styles.bodyContactButton}
                    >
                        <p className={styles.bodyContactButtonText}>Send Message</p>
                    </Button>
                </div>

            </div>

            <div className={styles.googlemap}>
                <iframe style={{ height: '450px', width: '1320px' }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3918.6099415304902!2d106.80730807476709!3d10.84113285799739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685946889313!5m2!1sen!2s"
                    frameBorder="0" allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    )
}
export default ContactUsContent;