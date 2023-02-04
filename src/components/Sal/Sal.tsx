import React from "react";

interface SalProps {
  myName: string
}

export const Sal = ({ myName }: SalProps) => {
  return <div className="flex">
    <p>Ciao {myName}, questa è la mia prima libreria</p>
  </div>
}
