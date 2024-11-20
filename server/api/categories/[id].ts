export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;
    if(id) {
        try {
            const category = await fetch(`https://mallakto-backend.onrender.com/categories/${id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            return category.json();
        } catch (error) {
            return error
        }
    }
    throw new Error('No id provided');
  })
  
  