import React, { useContext } from "react";

interface ICommandProps {
  command: string;
  setCommand: (paramns: string) => void;
}

export const CommandContext = React.createContext<ICommandProps>({
  command: "",
  setCommand: function (params: string): string {
    return params;
  },
});

export const UseCommandContext = () => {
  const command = useContext(CommandContext);

  return command;
};
