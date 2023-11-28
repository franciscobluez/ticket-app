import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * The code in this file creates a div element represented by "flex justify-start align-baseline"
 * The div className sets the attributes the nesting elements repeated 5 times by <FontAwesomeIcon icon={faFire} className="text-red-400" />
 * So it will determine the number of icons that we are going to see set in a row(1,2,3,4,5 (Horizontally))
 *
 * const PriorityDisplay () => { ----This line of code: PriorityDisplay is a function declaration in ReactJS and it defines how the component would look like in the UI.
 * -We will also bring the function declaration to TicketCard.jsx component file
 *
 * So it's a PriorityDisplay (function declaration) (also, we call it 'const declaration') >>>> <div className="flex justify-start align-baseline"> (div element) >>>>         <FontAwesomeIcon icon={faFire} className="text-red-400" /> (attribute)
 */

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 0 ? "text-red-400" : "text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 1 ? "text-red-400" : "text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 2 ? "text-red-400" : "text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 3 ? "text-red-400" : "text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 4 ? "text-red-400" : "text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
