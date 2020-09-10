const { repair, success, fail, get } = require("./enhancer.js");
// test away!
describe("repair", () => {
  it("should restore durability to 100", () => {
    expect(
      repair({
        name: "Shield of Repair",
        durability: 75,
        enhancement: 5,
      })
    ).toEqual({
      name: "Shield of Repair",
      durability: 100,
      enhancement: 5,
    });
  });

  describe("success", () => {
    it("should increment enchancement by 1 if less than 20", () => {
      expect(
        success({
          name: "Success Enhancement",
          durability: 100,
          enhancement: 19,
        })
      ).toEqual({
        name: "Success Enhancement",
        durability: 100,
        enhancement: 20,
      });
    });
  });
  describe("fail", () => {
    it("should decrement by 10 and decrement enhancement by 1 if greater than 16", () => {
      expect(
        fail({
          name: "Failed",
          durability: 90,
          enhancement: 17,
        })
      ).toEqual({
        name: "Failed",
        durability: 80,
        enhancement: 16,
      });
    });
  });
  it("should decrement durability by 10 if enhancement greater than 14", () => {
    expect(
      fail({
        name: "Passing Tests",
        durability: 90,
        enhancement: 15,
      })
    ).toEqual({
      name: "Passing Tests",
      durability: 80,
      enhancement: 15,
    });
  });
  it("should decrement durability by 5 if enhancement less than 15", () => {
    expect(
      fail({
        name: "Failing",
        durability: 90,
        enhancement: 14,
      })
    ).toEqual({
      name: "Failing",
      durability: 85,
      enhancement: 14,
    });
  });

  describe("get", () => {
    it("should modify name to prefix enhancement level if greater than 0", () => {
      expect(
        get({
          name: "Iron Sword",
          durability: 90,
          enhancement: 14,
        })
      ).toEqual({
        name: "[+14] Iron Sword",
        durability: 90,
        enhancement: 14,
      });
    });
    it("should not modify name if enhancement level is 0", () => {
      expect(
        get({
          name: "Getting",
          durability: 90,
          enhancement: 0,
        })
      ).toEqual({
        name: "Getting",
        durability: 90,
        enhancement: 0,
      });
    });
  });
});
