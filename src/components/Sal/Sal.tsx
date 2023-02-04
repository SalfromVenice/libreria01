import React from "react";

export interface SalProps {
  myName: string
}

export const Sal = ({ myName }: SalProps) => {
  return <div>
    <p>Ciao {myName}, questa è la mia prima libreria</p>
  </div>
}
