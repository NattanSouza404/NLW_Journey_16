import styles from './InputWrapper.module.css';

type Props = {
    children?: React.ReactNode;
}

export const InputWrapper = (props: Props) => {
    return (
        <div className={styles.fieldWrapper}>
            {props.children}
        </div>
    )
};
