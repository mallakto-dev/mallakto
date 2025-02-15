export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body) {
      const order = await fetch(`https://mallakto-backend.onrender.com/order/`, {
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

