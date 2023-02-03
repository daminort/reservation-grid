import React, { FC  } from 'react';
import { TooltipProps } from './Tooltip.interface';
import { Tooltip as ReactTooltip } from "react-tooltip";

const ToolTip: FC<TooltipProps> = (props) => {
  return (
    <div>
      <ReactTooltip
        anchorId={props.id}
        place="top"
        content={props.content}
      />
    </div>
  )
}

export {ToolTip};