export default defineEventHandler(async (event) => {
  const { BACKEND_URL } = useRuntimeConfig(event)
try {
    const categories = await fetch(`${BACKEND_URL}/categories/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return categories.json();
} catch (error) {
    return error  
}
});