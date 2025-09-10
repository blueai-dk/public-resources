analytics.subscribe('checkout_completed', async (event) => {
    try {
        const productId = await browser.sessionStorage.getItem("baiChatbotId");
        const sessionId = await browser.sessionStorage.getItem(productId + "baiSessionId");
        const lastInteraction = await browser.localStorage.getItem("bai-last-interaction");
        if (!sessionId || !lastInteraction || !productId) {
            console.error("Required cookie values are missing.");
            return;
        }
        const checkout = event.data.checkout;
        const checkoutTotalPrice = checkout.totalPrice.amount;
        const payload = {
            sessionId: sessionId,
            chatbotId: productId,
            event: "Purchase",
            amount: checkoutTotalPrice,
            lastInteraction: lastInteraction,
        }
        const response = await fetch("https://backend.userlink.ai/chatbot/registerTracking", {
            keepalive: true,
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            console.error("Failed to register tracking:", response.statusText);
        } else {
            console.log("Tracking registered successfully.");
        }
    } catch (error) {
        console.error("Error during checkout tracking:", error);
    }
});
