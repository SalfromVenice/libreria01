import React from "react";

export interface ButtonProps {
  label: string;
}

const Sal = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Sal;
