import { Fragment } from "react";
import ShopRoundedIcon from "@material-ui/icons/ShopRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import EmojiEventsRoundedIcon from "@material-ui/icons/EmojiEventsRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import AirplayRoundedIcon from "@material-ui/icons/AirplayRounded";

import { NavItemFixed } from "../../components/ui/NavItemFixed";

interface SidebarProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeView: number;
  setActiveView: React.Dispatch<React.SetStateAction<number>>;
}

export const SideBar = (props: SidebarProps): JSX.Element => {
  const { showMenu, setShowMenu, activeView, setActiveView } = props;

  const setActiveViewHandler = (view: number) => {
    setActiveView(view);
  };

  return (
    <Fragment>
      <div
        className={`sidebar__background ${
          showMenu && "sidebar__background--show"
        }`}
        onClick={() => {
          setShowMenu(false);
        }}
      ></div>
      <nav className={`sidebar ${showMenu && "sidebar--show"}`}>
        <ul className="side-nav">
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={0}
            url="/portal"
            icon={<ShopRoundedIcon />}
            title="Loja"
          />
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={1}
            url="/portal"
            icon={<AppsRoundedIcon />}
            title="Meus produtos"
          />
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={5}
            url="/portal"
            icon={<StarsRoundedIcon />}
            title="Conteúdo exclusivo"
          />
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={2}
            url="/portal"
            icon={<EmojiEventsRoundedIcon />}
            title="Certificados"
          />
          {/* <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={3}
            url="/portal"
            icon={<MenuBookRoundedIcon />}
            title="Material"
          /> */}
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={6}
            url="/portal"
            icon={<ReceiptRoundedIcon />}
            title="Pedidos"
          />
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={7}
            url="/portal"
            icon={<AirplayRoundedIcon />}
            title="Acessos"
          />
          <NavItemFixed
            activeView={activeView}
            setActiveViewHandler={setActiveViewHandler}
            index={4}
            url="/portal"
            icon={<ContactSupportRoundedIcon />}
            title="Suporte"
          />
        </ul>
        <div className="sidebar-legal">
          &copy;
          {` ${new Date().getFullYear()} Energia Lucrativa. Todos os direitos reservados.`}
        </div>
      </nav>
    </Fragment>
  );
};
