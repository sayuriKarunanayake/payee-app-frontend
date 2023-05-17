import styles from './pay-details.module.scss';
import classNames from 'classnames';

export interface PayDetailsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-pay-detailss-and-templates
 */
export const PayDetails = ({ className }: PayDetailsProps) => {
    return (
        <div className={styles.root}>
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
                <h1>Payment Details</h1>
            </div>
            <div className={styles.formpaydetails}>
                <br />
                <br />
                <form>
                    <label>Payee Name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Sort Code:</label>
                    <br />
                    <div className={classNames(styles.sortcode)}>
                        <input type="text" className={styles.sortcodeinput} />
                        <input type="text" className={styles.sortcodeinput} />
                        <input type="text" className={styles.sortcodeinput} />
                    </div>
                    <br />
                    <label>Account Number:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Payment Amount:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Payment Reference:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Payment Date:</label>
                    <br />
                    <div className={styles.datebutton}>
                        <input type="Radio" />
                        <label>Now</label>
                        <br />
                        <input type="Radio" />
                        <label>A later date</label>
                    </div>
                    <br />

                    <input type="submit" value="Review Details" className={styles.buttonsubmit} />
                </form>
            </div>
        </div>
    );
};
