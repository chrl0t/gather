/**
 * @jest-environment node
 */
import { fetchListOfForages, fetchForage } from "../api/firestore";

describe("fetchListOfForages()", () => {
  it("should return an array of foragable items with correct properties", async () => {
    const response = await fetchListOfForages("Spring");
    const firstResult = Object.keys(response[0]);
    const expected = ["name", "availability", "locations", "warnings"];
    expect(firstResult).toEqual(expect.arrayContaining(expected));
  });
});
