import { InstaIcon } from "@Components/icons/insta";
import styles from "./navbar.module.sass";

interface NavbarProps {
  isHidden?: boolean;
}

export const Navbar = ({ isHidden }: NavbarProps) => {
  return (
    <div className={styles.navbarWrapper}>
      <ul className={styles.navbarWrapper}>
        <li className={styles.menuItemText}>Home</li>
        <li className={styles.menuItemText}>
          <InstaIcon className={styles.instaIcon} />
        </li>
      </ul>
    </div>
  );
};
