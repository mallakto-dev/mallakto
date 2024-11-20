export default defineEventHandler(async () => {
    try {
        const products = await fetch("https://mallakto-backend.onrender.com/items/", {
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