import clsx from "clsx";
import styles from "./InputWrapper.module.css";

type Props = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export const InputWrapper = (props: Props) => {
  return (
    <div
      className={clsx(
        styles.fieldWrapper,
        props.size === "small" ? styles.small : styles.medium,
      )}
    >
      {props.children}
    </div>
  );
};
