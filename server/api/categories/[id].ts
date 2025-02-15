export default defineEventHandler(async (event) => {
  const { BACKEND_URL } = useRuntimeConfig(event)
    const id = event.context.params?.id;
    if(id) {
        try {
            const category = await fetch(`${BACKEND_URL}/categories/${id}`, {
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
  
  