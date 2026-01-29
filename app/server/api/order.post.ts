export default defineEventHandler(async (event) => {
    const body = readBody(event);
    if(body) {
        try {
            const order = await fetch(`${process.env.NUXT_BACKEND_URL}/order`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
              });
            return order.json();
        } catch (error) {
            return error
        }
    }
    throw new Error('No body provided');
  });