import styles from './authorisepay.module.scss';
import classNames from 'classnames';

export interface AuthorisepayProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-authorisepays-and-templates
 */
export const Authorisepay = ({ className }: AuthorisepayProps) => {
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
            <div className={classNames(styles['progress-container'], styles.progress)}>
                <div className={styles['progress-container-line']}></div>
                <div className={classNames(styles.circle)}>1</div>
                <div className={styles.circle}>2</div>
                <div className={styles.circle}>3</div>
                <div className={classNames(styles.circle, styles.active)}>4</div>
            </div>
            <div className={styles.container}>
                <h1>Authorise Payment</h1>
            </div>
            <br />
            <div className={styles.container}>
                <h3>Please enter your 5 digit passcode</h3>
                <br />
                <input type="text" />
            </div>
            <div className={styles.buttondiv}>
                <button className={styles.buttonstyle}>Complete Payment</button>
            </div>
        </div>
    );
};
