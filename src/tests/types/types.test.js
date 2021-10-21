import { types } from "../../types/types";

describe("Pruebas con nuestros tipos", () => {
	test("Debe de tener estos types", () => {
		expect(types).toEqual({
			citiesGet: "[Cities] Get city",

			availableCities: "[Available] Get cities available",

			saveReservation: "[Save] Save reservation",

			showTrip: "[] Set show trip",

			saveHour: "[] Save hour",
		});
	});
});
