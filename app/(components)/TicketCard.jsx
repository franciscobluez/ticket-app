import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

/**
 * We are pulling in our item from here.
 * -Explaining this line:    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
 * - Previous line means: it's a class element and the child elements will be laid out according in the UI
 *
 * 
 * <div className="flex mb-3">
 * Above line means: it makes a div element a flex container for the UI adding<div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
        </div>
    </div>
*
*      <p className="whitespace-pre-wrap">
*        This is the ticket description! Please do this ticket
*--- Above 2 lines of code mean: -- <p className="whitespace-pre-wrap"> --- has been added between <hr> 
*-- This will render the text. --- whitespace-pre-wrap -- this class ensures that the text will be wrapped 
*--- to the next line without breaking words in the middle.
*
*
*/
const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
