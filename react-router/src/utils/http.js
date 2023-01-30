const BASE_URL = "https://dummyjson.com";

export const GET = async (resource) => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}`);

    if (res.status >= 400) {
      throw new Error("Abbiamo un problema di connessione");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return { status: false };
  } finally {
    // console.log("FINALLY");
  }
};

/* export default GET; */
