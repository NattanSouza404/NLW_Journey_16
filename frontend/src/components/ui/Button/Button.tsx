import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  children,
  className,
  type = "button",
  onClick,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${className || ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
