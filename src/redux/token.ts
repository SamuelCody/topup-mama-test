import ls from "localstorage-slim";

const loadToken = () => {
  try {
    const serializedState = ls.get("t");
    if (serializedState === null) {
      return undefined;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

const saveToken = (t: string) => {
  try {
    // const serializedState = JSON.stringify(t);
    ls.set("t", t, { ttl: 600 });
  } catch (err) {
    //
  }
};

export { loadToken, saveToken };
