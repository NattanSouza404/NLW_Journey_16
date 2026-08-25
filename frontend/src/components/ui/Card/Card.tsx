import styles from "./Card.module.css";

export const Card = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <div id={id} className={`${styles.card} ${className || ""}`}>
      {children}
    </div>
  );
};
