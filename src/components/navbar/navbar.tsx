import styles from "./navbar.module.sass";

interface NavbarProps {
  isHidden?: boolean;
}

export const Navbar = () => {
  return <div className={styles.navbarWrapper}></div>;
};
