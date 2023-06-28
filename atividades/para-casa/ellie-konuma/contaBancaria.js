let accounts = [
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

const findAccount = (name) => {
  const acc = accounts.find((acc) => acc.name == name);
  return acc ? { ok: acc } : { error: "account not found" };
};

const hasError = (res) => (Object.keys(res)[0] === "error" ? true : false);

const checkBalance = (name) => {
  const res = findAccount(name);
  if (hasError(res)) return res;

  let { balance } = res.ok;

  return { ok: balance };
};

const checkLimit = (name) => {
  const res = findAccount(name);
  if (hasError(res)) return res;

  let { limit } = res.ok;

  if (limit == null) return { error: "limit not active" };
  if (limit === 0) return { error: "limit not available" };

  return { ok: limit };
};

const enableLimit = (name) => {
  const acc = findAccount(name);
  if (acc.ok.limit === null) {
    accounts = accounts.map((acc) => {
      if (acc.name === name) acc.limit = 0;
      return acc;
    });
    return accounts;
  }

  return { error: "limit it is already activated" };
};

const disableLimit = (name) => {
  const acc = findAccount(name);
  if (acc.ok.limit === null) {
    return { error: "limit it is already disabled" };
  }
  accounts = accounts.map((acc) => {
    if (acc.name === name) acc.limit = null;
    return acc;
  });
  return accounts;
};

const ajustLimit = (name, value) => {
  const acc = findAccount(name);
  if (acc.ok.limit !== null) {
    accounts = accounts.map((acc) => {
      if (acc.name === name) acc.limit = value;
      return acc;
    });
    return accounts;
  }
};

const draft = (name, value) => {
  const balanceRes = checkBalance(name);
  if (hasError(balanceRes)) return balanceRes;

  const balance = balanceRes.ok;

  if (balance >= value) {
    return { ok: { balance: balance - value } }; // aqui tem que ser retornado o value
  } // tem que mudar no obj da conta em uso

  const limitRes = checkLimit(name);
  if (hasError(limitRes)) return limitRes;

  const limit = limitRes.ok;

  let total = balance + limit;

  if (total >= value) {
    remaining = balance - value;
    return { ok: { balance: remaining, limit: remaining + limit } };
  } else if (total < value) {
    return { error: "do not exist enough balance and the limit" };
  }
};

module.exports = {
  accounts,
  findAccount,
  hasError,
  checkBalance,
  checkLimit,
  enableLimit,
  disableLimit,
  ajustLimit,
  draft,
};
