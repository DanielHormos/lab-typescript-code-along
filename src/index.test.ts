import { deepEqual } from "node:assert/strict";
import test from "node:test";

//const data = {{id: "f370acf7-76e6-42de-81f5-233cf971fa14", name: "Daniel Hormos"}, {id: "4c62bc06-253d-4fbb-8595-440f060cd1b0", name: "Ali Reza"}

type Person = {
  id: string;
  name: string;
};

function uppercaseName(names: Person[]) {
  return [];
}

test("UpperCaseName workd with empty arrays", () => {
  const result = uppercaseName([]);
  deepEqual(result, []);
});
