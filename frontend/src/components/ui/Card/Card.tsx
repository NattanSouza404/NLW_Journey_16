import styles from "./Card.module.css";

export const Card = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={id} className={`${styles.card} ${className || ""}`}>
      {children}
    </div>
  );
};
