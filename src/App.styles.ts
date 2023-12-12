import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledApp = styled.div.attrs({
  className: "",
})`
  h1 {
    ${tw`text-3xl font-shrikhand underline`}
  }
`;
