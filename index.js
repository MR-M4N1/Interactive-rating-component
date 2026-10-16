const rateReporter = document.querySelector('.showRate');
const submitContainer = document.querySelector('.submitContainer');
const appreciateContainer = document.querySelector('.appreciateContainer');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedRate = document.querySelector(
        'input[name="rate"]:checked'
    );

    const userRate = selectedRate.value;

    submitContainer.classList.add('hidden');
    appreciateContainer.classList.remove('hidden');

    rateReporter.textContent = `You selected ${userRate} out of 5`;
});