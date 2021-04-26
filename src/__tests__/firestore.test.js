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

describe("fetchForage()", () => {
  it("should return an object of the foragable item with the correct properties", async () => {
    const response = await fetchForage(1);
    expect(response).toHaveProperty("name");
    expect(response).toHaveProperty("latin");
    expect(response).toHaveProperty("description");
    expect(response).toHaveProperty("identification");
  });
});
