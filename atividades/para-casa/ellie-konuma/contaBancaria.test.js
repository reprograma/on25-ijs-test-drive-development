const {
  findAccount,
  hasError,
  checkBalance,
  checkLimit,
  enableLimit,
  disableLimit,
  ajustLimit,
  draft,
} = require("./contaBancaria");

beforeEach(() => {
  accounts = [
    {
      name: "Isa",
      balance: 1000,
      limit: 1000,
    },
    {
      name: "Tracer",
      balance: 1000,
      limit: null,
    },
    {
      name: "Marceline",
      balance: 1100,
      limit: 0,
    },
  ];
});

describe("check if the account exists", () => {
  it("should return the account", () => {
    expect(findAccount("Isa", accounts)).toEqual({
      ok: { name: "Isa", balance: 1000, limit: 1000 },
    });
  });
  it("should return error", () => {
    expect(findAccount("Fernando", accounts)).toEqual({
      error: "account not found",
    });
  });
});

describe("check if result has error", () => {
  it("should be true", () => {
    expect(hasError({ error: "bubla" })).toEqual(true);
  });
  it("should be false", () => {
    expect(hasError({ ok: "" })).toEqual(false);
  });
});

describe("check balance", () => {
  it("should return the value of balance", () => {
    expect(checkBalance("Isa", accounts)).toEqual({ ok: 1000 });
  });
});
describe("check limit", () => {
  it("should return the limit", () => {
    expect(checkLimit("Isa", accounts)).toEqual({ ok: 1000 });
  });
  it("should return error", () => {
    expect(checkLimit("Tracer", accounts)).toEqual({
      error: "limit not active",
    });
  });
});

describe("turn on the limit", () => {
  it("should return limit = 0 on the account of tracer", () => {
    expect(enableLimit("Tracer", accounts)).toEqual([
      { name: "Isa", balance: 1000, limit: 1000 },
      { name: "Tracer", balance: 1000, limit: 0 },
      { name: "Marceline", balance: 1100, limit: 0 },
    ]);
  });
  it("should return error", () => {
    expect(enableLimit("Isa", accounts)).toEqual({
      error: "limit it is already activated",
    });
  });
});

describe("turn off the limit", () => {
  it("should return limit = null on the account of Marceline", () => {
    expect(disableLimit("Marceline", accounts)).toEqual([
      { name: "Isa", balance: 1000, limit: 1000 },
      { name: "Tracer", balance: 1000, limit: null },
      { name: "Marceline", balance: 1100, limit: null },
    ]);
  });
  it("should return error", () => {
    expect(disableLimit("Tracer", accounts)).toEqual({
      error: "limit it is already disabled",
    });
  });
});

describe("ajust limit", () => {
  it("should return the chosen limit = value ", () => {
    expect(ajustLimit("Marceline", 1001, accounts)).toEqual([
      { name: "Isa", balance: 1000, limit: 1000 },
      { name: "Tracer", balance: 1000, limit: null },
      { name: "Marceline", balance: 1100, limit: 1001 },
    ]);
  });
});

describe("withdraw from account", () => {
  it("make a draft of 1000 in account of Isa, and should return ok and the balance = 0", () => {
    expect(draft("Isa", 1000, accounts)).toEqual({ ok: { balance: 0 } });
  });

  it("make a draft of 1500 in account of Isa, and should return ok and the balance = -500 and limit = 500", () => {
    expect(draft("Isa", 1500, accounts)).toEqual({
      ok: { balance: -500, limit: 500 },
    });
  });

  it("make a draft of 2000 in account of Isa, and should return ok and the balance = -1000 and limit = 0", () => {
    expect(draft("Isa", 2000, accounts)).toEqual({
      ok: { balance: -1000, limit: 0 },
    });
  });

  it("make a draft of 1500 in account of Marceline, and should return error = do not exist enough balance and the limit", () => {
    expect(draft("Marceline", 1500, accounts)).toEqual({
      error: "limit not available",
    });
  });
  it("make a draft of 1500 in account of Tracer, and should return error = do not exist enough balance and the limit is not enabled", () => {
    expect(draft("Tracer", 1500, accounts)).toEqual({
      error: "limit not active",
    });
  });
});
