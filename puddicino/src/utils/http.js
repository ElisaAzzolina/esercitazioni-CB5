const url = "https://dummyjson.com";

const GET = async (res) => {
  const response = await fetch(`${url}/${res}`);
  const data = await response.json();

  return data;
};

const POST = async (res, body) => {
  const response = await fetch(`${url}/${res}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: `${body}`,
      userId: 5,
    }),
  });
  const data = await response.json();

  return data;
};

export { GET, POST };
