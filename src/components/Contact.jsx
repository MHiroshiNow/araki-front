import React from 'react';
import styles from './Contact.module.css';  // CSS Modulesのインポート

function Contact() {
    return (
        <div className={styles["contact-container"]}>
            <h2>Contact / 応募フォーム</h2>
            <div className={styles["google-form"]}>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfep_5he-Htl4aOF0nHwKPDpcQJhgo3N7HLD6XmPtQoHEzIWA/viewform?embedded=true" 
                    width="640" 
                    height="1374" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0"
                    title="ESS Application Form">
                    読み込んでいます…
                </iframe>
            </div>
        </div>
    );
}

export default Contact;
