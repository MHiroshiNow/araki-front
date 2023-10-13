import React from 'react';
import styles from './Rule.module.css';
function Rule() {
    return (
        <div className={`${styles.container} mt-4`}>
            <h2>Rule Page</h2>
            <p><strong>期日：</strong>令和5年11月18日（土）</p>
            <p><strong>場所：</strong>京都産業大学構内</p>
            <p><strong>形式：</strong>７分以内のprepared speech（８分打ち切り、時間はスピーチ本文の開始から計測する。）及び審査員との質疑応答を３分設ける。但し、原稿・動画による審査を予選として事前に設ける。</p>
            <p><strong>出場者：</strong>11名（うち１名は本会より推薦。）</p>
            <p><strong>参加資格：</strong>貴部に属するもので、英語を母国語としない者。（国籍、留学経験、学年等は問わない。）</p>
            <ul>
                <li>①各団体の予選への申し込み枠は２名までとする。</li>
                <li>②演題はchallengeとする。（既発表のものは無効）</li>
                <li>③発表時間は７分以内とする。</li>
                <li>④応募後のタイトル・テーマ等の変更は認めない。（細かいリライトは可能。）</li>
            </ul>
            <p><strong>応募方法：</strong>以下の３点を同封の上、応募すること。</p>
            <ol>
                <li>申し込み用紙。（所定欄を全て記入）</li>
                <li>スピーチ原稿1部。（A４版にダブルスペースで記入したもの。タイトルと名前のみ記入する。）</li>
                <li>動画（スピーチの前には氏名とタイトルのみを英語で吹き込んであること。大学名と氏名とタイトルも一緒に書くこと。）</li>
            </ol>
            <p><strong>締め切り：</strong>令和5年10月21日（土）（当日必着）</p>
            <p>尚、提出された原稿・動画の返却は行わない。また、締め切り期日後の応募受付は一切行わない。（審査結果は、本大会詳細と共に10月下旬に本人宛に連絡致します。）</p>
            <p><strong>応募先：</strong><a href="https://www.instagram.com/ess_ksu/" target="_blank" rel="noopener noreferrer">Instagram @ess_ksu</a></p>
        </div>
    );
}
export default Rule;
