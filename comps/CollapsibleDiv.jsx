import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import useCollapse from "react-collapsed";

export default function CollapsibleDiv({
  isActive,
  title,
  children,
  paddingBottom,
}) {
  const [isExpanded, setExpanded] = useState(isActive);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  useEffect(() => {
    setExpanded(isActive);
  }, [isActive, setExpanded]);

  return (
    <Fade cascade triggerOnce duration={1000}>
      <div
        className="py-4 flex justify-between items-center"
        {...getToggleProps({
          onClick: () => setExpanded(() => !isExpanded),
        })}
      >
        {title}
        <div>
          {isExpanded ? (
            <i className="las la-caret-up text-2xl"></i>
          ) : (
            <i className="las la-caret-down text-2xl"></i>
          )}
        </div>
      </div>
      <div {...getCollapseProps()}>
        <Fade cascade triggerOnce duration={500}>
          {children}
        </Fade>
        {paddingBottom ? <div className="h-12"></div> : <div></div>}
      </div>
    </Fade>
  );
}
