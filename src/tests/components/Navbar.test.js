import { render, screen } from "@testing-library/react";
import { Navbar } from "../../components/navbar/Navbar";

test("Title", () => {
	render(<Navbar />);
	const title = screen.getByText(/TrueHome Vuelos/i);
	expect(title).toBeInTheDocument();
});
