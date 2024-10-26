import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AnibalMG from "../AnibalMG"; // importo mi componente CustomButton
describe("AnibalMG rating", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<AnibalMG defval = {3} precision = {0.5} maxrating = {10} color = 'primary' />);
        const rating = screen.getByLabelText("custom rating");
        expect(rating).toBeInTheDocument();
    });
});