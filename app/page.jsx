import TicketCard from "./(components)/TicketCard";

/**
 * This is where the items will be shown. All the files that we have in (components) folder -
 * - will be shown on the page site thanks to this page.jsx file
 * (components) folder: files inside that folder is to establish icons, classes and functions
 *
 * <div className="lg:grid grid-cols-2 xl:grid-cols-4">
 * Above line creates a div element with the css classes for the grid
 *
 *
 *
 *
 */

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets/", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
                {posts.map((post: any) => (
                  // Insert the code related to 'posts' here
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
