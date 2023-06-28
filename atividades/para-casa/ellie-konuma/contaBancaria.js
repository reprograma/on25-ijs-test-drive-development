const findAccount = (name, accounts) => {
  const acc = accounts.find((acc) => acc.name == name);
  return acc ? { ok: acc } : { error: "account not found" };
};

const hasError = (res) => (Object.keys(res)[0] === "error" ? true : false);

const checkBalance = (name, accounts) => {
  const res = findAccount(name, accounts);
  if (hasError(res)) return res;

  let { balance } = res.ok;

  return { ok: balance };
};

const checkLimit = (name, accounts) => {
  const res = findAccount(name, accounts);
  if (hasError(res)) return res;

  let { limit } = res.ok;

  if (limit == null) return { error: "limit not active" };
  if (limit === 0) return { error: "limit not available" };

  return { ok: limit };
};

const enableLimit = (name, accounts) => {
  const acc = findAccount(name, accounts);
  if (acc.ok.limit === null) {
    accounts = accounts.map((acc) => {
      if (acc.name === name) acc.limit = 0;
      return acc;
    });
    return accounts;
  }

  return { error: "limit it is already activated" };
};

const disableLimit = (name, accounts) => {
  const acc = findAccount(name, accounts);
  if (acc.ok.limit === null) {
    return { error: "limit it is already disabled" };
  }
  accounts = accounts.map((acc) => {
    if (acc.name === name) acc.limit = null;
    return acc;
  });
  return accounts;
};

const ajustLimit = (name, value, accounts) => {
  const acc = findAccount(name, accounts);
  if (acc.ok.limit !== null) {
    accounts = accounts.map((acc) => {
      if (acc.name === name) acc.limit = value;
      return acc;
    });
    return accounts;
  }
};

const draft = (name, value, accounts) => {
  const balanceRes = checkBalance(name, accounts);
  if (hasError(balanceRes)) return balanceRes;

  const balance = balanceRes.ok;

  if (balance >= value) {
    return { ok: { balance: balance - value } };
  }

  const limitRes = checkLimit(name, accounts);
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
  findAccount,
  hasError,
  checkBalance,
  checkLimit,
  enableLimit,
  disableLimit,
  ajustLimit,
  draft,
};
