export default defineEventHandler(async (event) => {
  const { BACKEND_URL } = useRuntimeConfig(event)
    try {
        const products = await fetch(`${BACKEND_URL}/items/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        return products.json();
    } catch (error) {
       return error
    }

});