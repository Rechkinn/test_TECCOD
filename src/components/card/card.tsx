import type { FC, PropsWithChildren } from "react";
import styles from "./card.module.css";

type TCard = { extraClass?: string } & PropsWithChildren;

const Card: FC<TCard> = ({ children, extraClass, ...props }) => {
  return (
    <article {...props} className={`${styles.card} ${extraClass}`}>
      {children}
    </article>
  );
};

export default Card;
