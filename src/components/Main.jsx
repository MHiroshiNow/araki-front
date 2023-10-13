import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.container}>
            <h2>京都産業大学文化団体連盟英語研究会 (ESS)</h2>
            <section className={styles.featuredEvent}>
                <h2>荒木杯</h2>
                <p>
                    今回、4年ぶりに「荒木杯」を開催する運びになりました。荒木杯は我々ESSが京都産業大学内で行う最大のイベントとなっており、全国から出場者が集い、英語のスピーチで競っていただくという内容でございます。また、今年はテーマが”Challenge”と設定されています。ぜひこの京都産業大学文化団体連盟英語研究会主催の荒木杯にご応募ください！
                </p>
            </section>
            <p>
                当部は３つのセクション（カンバセーション・ガイド・スピーチ）に分かれており、日々英語力の向上を目指し活動を行っております。
            </p>

            <section className={styles.section}>
                <h3>カンバセーションセクション</h3>
                <p>
                    英語での日常会話中心の活動を行っております。また、英語を使ってのゲームなどもあり、とても楽しいセクションですよ！
                </p>
            </section>

            <section className={styles.section}>
                <h3>ガイドセクション</h3>
                <p>
                    月に4回程度の京都の観光地での外国人旅行客に英語でガイドを行うというイベントがあるセクションです。基本ガイドは土日にあり、平日の活動日には英語を使った活動は勿論、ガイドの時に使用する説明書みたいなものの作成もあったりします。京都の知識を付けながら外国人と交流したい方はこのセクションがおすすめです！
                </p>
            </section>

            <section className={styles.section}>
                <h3>スピーチセクション</h3>
                <p>
                    主に「惹きつけるスピーチ」の仕方を追求し、日々の英語での活動はもちろん、「きちんと話す」という目標を掲げているセクションです。みんなの英語に対するモチベーションがとても高く、英語を上達させたい方にはとてもおすすめとなっております。
                </p>
            </section>

            <footer className={styles.footer}>
                <p>
                    京都産業大学文化団体連盟英語研究会<br/>
                    第34回荒木杯争奪全日本英語弁論大会<br/>
                    実行委員長　上原田駿
                </p>
            </footer>
        </div>
    );
}

export default Main;
