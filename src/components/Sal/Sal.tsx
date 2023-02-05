import React from "react";

export interface Props {
  myName: string
}

export const Sal: React.FC<Props> = ({ myName }: Props) => {
  return <div>
    <p>Ciao {myName}, questa è la mia prima libreria</p>
  </div>
}
