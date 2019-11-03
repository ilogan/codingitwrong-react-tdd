const expectExport = require("expect");

describe("Smoke Test", () => {
  it("can handle the truth", () => {
    expectExport(true).toEqual(true);
  });
});
