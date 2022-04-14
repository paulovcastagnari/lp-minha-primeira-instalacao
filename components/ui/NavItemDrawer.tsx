import Link from "next/link";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

interface NavItemDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
  icon: JSX.Element;
  title: string;
}

export const NavItemDrawer = (props: NavItemDrawerProps) => {
  const { url, icon, title, drawerOpen, setDrawerOpen } = props;

  return (
    <li
      className="side-nav__item side-nav__item--drawer"
      onClick={() => {
        setDrawerOpen(!drawerOpen);
      }}
    >
      <Link href={url} passHref>
        <div className="side-nav__link">
          {icon}
          <span className="side-nav__title">{title}</span>
          <span
            className={`side-nav__drawer-icon ${
              drawerOpen && "side-nav__drawer-icon--active"
            }`}
          >
            {" "}
            <KeyboardArrowDownRoundedIcon />
          </span>
        </div>
      </Link>
    </li>
  );
};
