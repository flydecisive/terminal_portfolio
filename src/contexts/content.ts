/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";

interface IContentProps {
  content: [{ type: string; disabled: boolean }];
  setContent: (params: any) => void;
}

export const ContentContext = React.createContext<IContentProps>({
  content: [{ type: "", disabled: false }],
  setContent: function (params: any): any {
    return params;
  },
});

export const UseContentContext = () => {
  const content = useContext(ContentContext);

  return content;
};
