import { useState } from "react";

interface Props {
  children: string;
  length?: number;
}
const ExpandableText = ({ children, length = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= length) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, length);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
