const ProgressDisplay = ({ progress }) => {
  /**
   * The first <div> element has the w-full, bg-gray-200, and rounded-full classes. This makes the <div> element
   * -fill the entire width of its parent container,
   * -have a gray background, and have rounded corners.
   *
   * The second <div> element has the bg-blue-600, h-2.5, and rounded-full classes.
   * This makes the <div> element
   * have a blue background, be 2.5 pixels tall, and have rounded corners.
   */

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 ">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
