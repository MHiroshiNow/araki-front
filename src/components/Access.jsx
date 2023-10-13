import React from 'react';
import styles from './Rule.module.css';

function Access() {
    return (
        <div className={`${styles.container} mt-4`}>
            <h2>Access</h2>
            
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.449336984213!2d135.75722860000002!3d35.070504100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a7ddbb804e83%3A0xc53a1e9e9e89a0cd!2z5Lqs6YO955Sj5qWt5aSn5a2m!5e0!3m2!1sja!2sjp!4v1696325401320!5m2!1sja!2sjp"
                    width="100%"
                    height="450"
                    style={{border: "0"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <p>JR京都駅 (地下鉄京都駅)・ 阪急烏丸駅 (地下鉄四条駅) から</p>
            <ul>
                <li>地下鉄で「国際会館駅」下車→京都バス（40系統）で京都産業大学前下車</li>
                <li>地下鉄で「北大路駅」下車→市バス（北3号系統）または京都バスで京都産大前下車</li>
            </ul>

            <p>京阪出町柳駅から</p>
            <ul>
                <li>京阪電鉄鴨東線で出町柳駅（乗り継ぎ）→叡山電車（鞍馬線）で二軒茶屋駅下車→二軒茶屋シャトルバス（無料）で京都産業大学</li>
                <li>京都バス（広河原32・静原・城山34・市原35・京都産業大学 快速35・36）で京都産業大学前下車（※）</li>
            </ul>

            <p>（※）土日・祝日および休校日は便数が極めて少ないため、ご注意ください。</p>
            
            <p><strong>詳しくは</strong> <a href="https://www.kyoto-su.ac.jp/access.html" target="_blank" rel="noopener noreferrer">こちら</a>を参照してください。</p>
        </div>
    );
}

export default Access;
