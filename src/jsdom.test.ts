import { deepEqual } from "assert";
import { equal } from "assert/strict";
import { JSDOM } from "jsdom";
import test from "node:test";

test("select paragraph and acces textcontent", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi</p>`);

  equal(dom.window.document.querySelector("p")!.textContent, "Hi!");
});

test.skip("", () => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    p>Hi</p>
    <p>HidyHow!</p>`);
  const result = dom.window.document.querySelectorAll("p").length;
  deepEqual(result, 2);
});
