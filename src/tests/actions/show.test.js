import { setShowTrip } from "../../actions/show";
import { types } from "../../types/types";

describe("Test in show-action", () => {
	test("All the actions must work", () => {
		const show = setShowTrip("SHOW!");

		expect(show).toEqual({
			type: types.showTrip,
			payload: "SHOW!",
		});
	});
});
