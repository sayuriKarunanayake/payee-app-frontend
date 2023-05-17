import styles from './reviewand-verify.module.scss';
import classNames from 'classnames';

export interface ReviewandVerifyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-reviewand-verifys-and-templates
 */
export const ReviewandVerify = ({ className }: ReviewandVerifyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <img
                    src="https://media.licdn.com/dms/image/C4E16AQGK2xT_nHGS_g/profile-displaybackgroundimage-shrink_200_800/0/1622715953237?e=2147483647&v=beta&t=s8o3iF-w3g8Y3maCPdAsN6uCllE3Nq7IhuSvAOGdSgY"
                    className={styles.img}
                />
                <div className={styles.title}>
                    <h1>IFpay</h1>
                </div>
            </div>
            <hr />
            <div className={classNames(styles['progress-container'], styles.progress)}>
                <div className={styles['progress-container-line']}></div>
                <div className={classNames(styles.circle)}>1</div>
                <div className={styles.circle}>2</div>
                <div className={styles.circle}>3</div>
                <div className={styles.circle}>4</div>
            </div>
            <div className={styles.container}>
                <h1>Review and Verify</h1>
            </div>
            <div className={styles.reviewdeatils}>
                <br />
                <form className={styles.form}>
                    <label>From account : </label>
                    <input type="text" value="Current account: 22-44-86 20813578" disabled />
                    <br />
                    <label>To account : </label>
                    <input type="text" value="Brian Cunnings: 22-44-86 20813578" disabled />
                    <br />
                    <label>Amount : </label>
                    <input type="text" value="$170" disabled />
                    <br />
                    <label>Payment reference : </label>
                    <input type="text" value="Lunch" disabled />
                    <br />
                    <label>Payment date : </label>
                    <input type="text" value="Now" disabled />
                    <br />
                </form>
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttonstyle}>Send for Payee Verification</button>
                <button className={styles.buttonedit}>Edit Details</button>
            </div>
        </div>
    );
};
