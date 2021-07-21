import React from "react";
import App from "../../containers/App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("axios")

// using RTL
describe("App", () => {

  beforeEach(() => {
    // dont want to test this at the moment
    axios.get = jest.fn().mockRejectedValue({data: { title: "", body: ""}});
  })

  it("handleNewNote()", () => {

    render(
      <Router history={createMemoryHistory()}>
        <App />
      </Router>
    );

    userEvent.click(screen.getByText("Add Note"));

    expect(screen.getAllByTestId("note-element").length).toEqual(3);
  });

  it('handleDeleteNote()', () => {
    render(
      <Router history={createMemoryHistory()}>
        <App />
      </Router>
    );

    userEvent.click(screen.getAllByText("Delete")[0]);

    expect(screen.getAllByTestId("note-element").length).toEqual(1);
  });

  it('handleContentChange()', () => {
    render(
      <Router history={createMemoryHistory()}>
        <App />
      </Router>
    );
    
    fireEvent.input(screen.getByTestId("input__postnumber"), {target: {value: '2'}})

    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/2")
  });
});q
