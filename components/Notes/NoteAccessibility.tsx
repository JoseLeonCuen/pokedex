import React from "react";
import { Ability } from "../../utils/types";
import { capitalize, cleanString } from "../../utils";
import Note from "./Note";
import Badge from "../Badge/Badge";

const InfoType: React.FC = () => {
  return (
    <Note title="Accessibility Notes">
      <div className="px-4">
        <p>This web app offers some accessibility options listed below:</p>
        <ul className="list-disc">
          <li><span>Access key &quot;h&quot; take users to this page (home)</span></li>
          <li><span>Numbered Access keys matching generations (1 for Kanto)</span></li>
        </ul>
        <br />
        <p>Note: Access keys are available depending on your OS:</p>
        <ul className="list-disc">
          <li><span>Windows Browsers: <Badge>Shift</Badge> + <Badge>Alt</Badge> + <Badge>Access key</Badge></span></li>
          <li><span>Mac Browsers: <Badge>Control</Badge> + <Badge>Option</Badge> + <Badge>Access key</Badge></span></li>
        </ul>
      </div>
    </Note>
  )
}

export default InfoType;