document.addEventListener("DOMContentLoaded", function() {
    const newQuoteBtn = document.getElementById("new-quote-btn");
    const quoteElement = document.getElementById("quote");

    newQuoteBtn.addEventListener("click", async function() {
        const quote = await getQuote();
        quoteElement.textContent = `"${quote}"`;
    });

    async function getQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data.content;
    }
});
