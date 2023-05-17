import styles from './paymentconfirmed.module.scss';
import classNames from 'classnames';

export interface PaymentconfirmedProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-paymentconfirmeds-and-templates
 */
export const Paymentconfirmed = ({ className }: PaymentconfirmedProps) => {
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
            <br />
            <div className={styles.container}>
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/real-estate-project-related/confirm-27.png"
                    className={styles.imageconfirm}
                />
            </div>
            <div className={styles.container}>
                <h1>Payment Confirmed</h1>
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
            <div className={styles.container}>
                <button className={styles.buttonedit}>Back to my account</button>
            </div><br/><br/>
        </div>
    );
};
