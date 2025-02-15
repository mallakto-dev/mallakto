export default defineEventHandler(async (event) => {
  const { BACKEND_URL } = useRuntimeConfig(event)
  try {
    const body = await readBody(event);
    if (body) {
      const order = await fetch(`${BACKEND_URL}/order/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      return order.json();
    }
  } catch (error) {
    return error
  }
});

