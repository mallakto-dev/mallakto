export default defineEventHandler(async () => {
try {
    const categories = await fetch("https://mallakto-backend.onrender.com/categories/", {
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