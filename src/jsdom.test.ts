import { equal, deepEqual } from "assert/strict";
import { JSDOM } from "jsdom";
import test from "node:test";

test("select paragraph and acces textcontent", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p>`);

  equal(dom.window.document.querySelector("p")!.textContent, "Hi!");
});

test("Check how many p tags in file", () => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <p>Hi</p>
    <p>Hi</p>
    <p>Hi</p>
    <p>HidyHow!</p>`);
  const result = dom.window.document.querySelectorAll("p").length;
  deepEqual(result, 4);
});

test("check if element has a certain class", () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <p class="nice">Hi</p>`);

  const anchor = dom.window.document.querySelector("p");
  const hasNiceClass = anchor.classList.contains("nice");
  deepEqual(hasNiceClass, true);
  console.log(hasNiceClass);
});
