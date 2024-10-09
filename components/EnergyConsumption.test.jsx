import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
    const show30DaysConsumption = jest.fn();  // Mock function for testing
    
    it("renders button on screen", () => {
        render(<Button onClick={show30DaysConsumption}>Last 30 days</Button>);  // Add button label as children
        const thirtyDaysButton = screen.getByText(/Last 30 days/i);  // Adjust case and match string
        expect(thirtyDaysButton).toBeInTheDocument();
    });
});
