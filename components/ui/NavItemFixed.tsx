import Link from "next/link";

interface NavItemFixedProps {
  activeView: number;
  setActiveViewHandler: (view: number) => void;
  index: number;
  url: string;
  icon: JSX.Element;
  title: string;
}

export const NavItemFixed = (props: NavItemFixedProps) => {
  const { index, url, icon, title, activeView, setActiveViewHandler } = props;

  return (
    <li
      className={`side-nav__item ${
        activeView === index && "side-nav__item--active"
      } `}
      onClick={() => {
        setActiveViewHandler(index);
      }}
    >
      <Link href={url} passHref>
        <div className="side-nav__link">
          {icon}
          <span className="side-nav__title">{title}</span>
        </div>
      </Link>
    </li>
  );
};
