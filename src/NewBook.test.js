import { act,render,fireEvent } from "@testing-library/react";
import NewBook from "./NewBook";

describe("Input Component", () => {
  it ( "rendered input" , () => {
       const input = getByTestId("SearchInput");
    expect(input).toBeFalsy();
  });
  
});

if("Change  on input" , async () =>  {
  await  act(async () => {
    const  { getByTestId } = render (<NewBook />);
    const input = getByTestId("SearchInput");
    fireEvent.change(input,{target : { value : ""}})
    expect(header.innerHTML).toBeTruthy();
  });
  
});