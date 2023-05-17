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
            <div />
        </div>
    );
};
