import Link from "next/link";

interface NavItemSecondaryProps {
  activeView: number;
  setActiveViewHandler: (view: number) => void;
  index: number;
  url: string;
  icon: JSX.Element;
  title: string;
}

export const NavItemSecondary = (props: NavItemSecondaryProps) => {
  const { index, url, icon, title, activeView, setActiveViewHandler } = props;

  return (
    <li
      className={`side-nav__item side-nav__item--secondary ${
        activeView === index && "side-nav__item--active"
      } `}
      onClick={() => {
        setActiveViewHandler(index);
      }}
    >
      <Link href={url} passHref>
        <div className="side-nav__link side-nav__link--secondary">
          {icon}
          <span className="side-nav__title-secondary">{title}</span>
        </div>
      </Link>
    </li>
  );
};
