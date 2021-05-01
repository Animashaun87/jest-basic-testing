const functions = require("./function");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name....");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());
  test("User is Bidemi", () => {
    const user = "Bidemi";
    expect(user).toBe("Bidemi");
  });

  test("User is Hannah", () => {
    const user = "Hannah";
    expect(user).toBe("Hannah");
  });
});

test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2 + 2 to Not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual: use to equal for object and array
test("User should be Bidemi Animashaun Object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Bidemi",
    lastName: "Animashaun",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("Should be less than or equal to 1800", () => {
  const load1 = 900;
  const load2 = 900;
  expect(load1 + load2).toBeLessThanOrEqual(1800);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "david", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data expect.assertions is used for async data
// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await
// test("User fetched name should be Leanne Graham", async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });
