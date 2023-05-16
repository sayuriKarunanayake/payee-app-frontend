import styles from './make-apayment.module.scss';
import classNames from 'classnames';

export interface MakeApaymentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-make-apayments-and-templates
 */
export const MakeApayment = ({ className }: MakeApaymentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <img
                    src="https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png"
                    className={styles.img}
                />
                <h1>Bank</h1>
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
                <h1>Make a Payment</h1>Choose an account to pay from
            </div>

            <div className={styles.container}>
                <br />
                <br />
                <select>
                    <option>Current account: 22-44-86 20813578</option>
                    <option>Savings account: 22-33-86 30458578</option>
                </select>
            </div>
            <div className={styles.payingOption}>
                <br />
                <br />
                <form className={styles.formpaydetails}>
                    <p>Who are you paying</p>
                    <input type="radio" />
                    <label>An existing payee</label>

                    <br />
                    <input type="radio" />
                    <label>Pay someone new</label>

                    <br />
                    <input type="radio" />
                    <label>Pay a company</label>

                    <br />
                    <br />

                    <button className={styles.buutonpaydetails}>Payment Details</button>
                </form>
            </div>
        </div>
    );
};
