const StatusDisplay = ({ status }) => {
  /**
   * -This file is for the message text in a button or bubble displaying how far along we are on the function process of the UI
   * -The 'span' tag is used to create a span element
   * -The inline-block class makes the span element appear as an inline block element (the UI)
   * -The rest of the inline class is just determining the size and color of the bubble
   *
   */

  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
