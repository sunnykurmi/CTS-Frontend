import React from "react";

const SecondStep = (props) => {
  return (
    <div className="form">
      <label>Workspace Name</label>
      <input
        type="text"
        name="workspaceName"
        placeholder="Eden"
        onChange={props.handleChange("workspaceName")}
      />

      <label>
        Workspace Url <span>(optional)</span>{" "}
      </label>
      <input
        type="text"
        name="workspaceUrl"
        placeholder="www.eden.com/     Example"
        onChange={props.handleChange("workspaceUrl")}
      />
    </div>
  );
};
export default SecondStep;
