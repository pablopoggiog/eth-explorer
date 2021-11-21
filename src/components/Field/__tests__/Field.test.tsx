import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Field } from "..";

const mockShowAlert = jest.fn();
document.execCommand = jest.fn();

jest.mock("react-alert", () => {
  return {
    useAlert: () => {
      return { show: mockShowAlert };
    },
  };
});

describe("Field", () => {
  const props = { label: "label test", text: "text test" };

  it("displays the correct label and text when provided", () => {
    const label = "label test";
    const text = "text test";

    render(<Field {...props} />);

    const renderedLabel = screen.getByText(label);
    const renderedText = screen.getByDisplayValue(text);

    expect(renderedLabel).toBeInTheDocument();
    expect(renderedText).toBeInTheDocument();
  });

  it("calls execCommand (which copies a value to the clipboard) and alert.show (shows a successful alert) when the user clicks on the button to copy the text", () => {
    render(<Field {...props} />);

    const copyButton = screen.getByRole("button");

    userEvent.click(copyButton);

    document.execCommand = jest.fn();
    expect(mockShowAlert).toHaveBeenCalledTimes(1);
  });
});
