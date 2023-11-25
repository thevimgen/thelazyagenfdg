//Button/__test__/Button.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TheLazyagen } from "../";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(
      <TheLazyagen
        text="hi this is a button"
        size="15px"
        color="red"
        bg="blue"
      />,
    );
    const thelazyagen = screen.getByRole("button");
    expect(thelazyagen).toBeInTheDocument();
  });
});
