const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        if (body) {
            const order = await fetch(`${config.public.NUXT_BACKEND_URL}/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            if (order.ok) {
                return order.json();
            } else {
                const text = await order.text(); throw createError({ statusCode: order.status, statusMessage: 'Backend error', data: text })
            }
        }
    } catch (error) {
        return error
    }
});

