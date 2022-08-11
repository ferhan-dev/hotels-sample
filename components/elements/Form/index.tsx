import React from "react";

const AppForm: React.FC<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
> = (props) => {
  return <form style={{ width: "100%" }} {...props}></form>;
};

export default AppForm;
