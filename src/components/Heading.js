import Button from "./Button";

function Heading({ title, canGoBack, leftContent, rightContent }) {
  return (
    <div className="heading flex justify-between items-center py-12">
      <div>
        {canGoBack && <div></div>}
        {leftContent}
      </div>
      <div className="">{rightContent}</div>
    </div>
  );
}

export default Heading;
