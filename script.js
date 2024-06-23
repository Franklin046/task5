const catFactApiUrl = "https://catfact.ninja/fact";

document.getElementById("get-cat-fact").addEventListener("click", () => {
  fetch(catFactApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const catFactDiv = document.getElementById("cat-fact");
      catFactDiv.innerHTML = `
                <p>${data.fact}</p>
            `;
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
    });
});
