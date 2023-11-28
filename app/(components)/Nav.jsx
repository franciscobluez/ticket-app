import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

/*
 *Link LegacyBehavior code will be removed and it's deprecated. Best choice is to
 * make code in <a> </a> format.
 * Defining colors. Following code is bound to globals.css file
 * Classes for the buttons are here.
 */
const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-primary text-white h-16 px-4">
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        <span className="font-bold text-xl">Ticket App</span>
      </Link>
      <Link href="/TicketPage/new">
        <FontAwesomeIcon icon={faTicket} className="mr-2" />
        <span>Tickets</span>
      </Link>
      <div className="flex flex-col items-center">
        <p className="white text-default-text">
          franciscoguardadotech@gmail.com
        </p>
      </div>
    </nav>
  );
};

export default Nav;
