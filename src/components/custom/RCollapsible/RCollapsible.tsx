import { CollapsibleContent } from "@/components/ui/collapsible";
import { Collapsible } from "@radix-ui/react-collapsible";
import classNames from "classnames";
import React from "react";

interface RCollapsibleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const RCollapsible: React.FC<RCollapsibleProps> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState("0px");
  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);
  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div
          style={{ height: contentHeight }}
          className={classNames(
            "overflow-hidden transition-[height] duration-300 ease-in-out",
            { "mb-6": isOpen }
          )}
        >
          <CollapsibleContent ref={contentRef}>
            {children}
          </CollapsibleContent>
        </div>
      </Collapsible>
    </>
  );
};

export default RCollapsible;
