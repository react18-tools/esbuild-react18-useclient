import { expectTypeOf, test } from "vitest";
import reactUseClientPlugin from "../dist/index";
import pluginFromSrc from "../src/index";

test("plugin types work properly", () => {
  expectTypeOf(reactUseClientPlugin).toMatchTypeOf(pluginFromSrc);
});
