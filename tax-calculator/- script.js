const form = document.getElementById("tax-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const purchase = Number(document.getElementById("purchase").value);
    const tax = Math.round(purchase * 0.0825 * 100) / 100;
    const total = purchase + tax;

    document.getElementById("tax").value = tax.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
});