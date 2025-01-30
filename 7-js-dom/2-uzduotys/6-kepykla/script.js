let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
    let employeesCount = document.getElementById('employees-count').valueAsNumber;
    let employeeMakesPerDay = document.getElementById('employee-makes-per-day').valueAsNumber;
    let dayReservations = document.getElementById('day-reservations').valueAsNumber;

    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    // let logInfo = {
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt
    // }

    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    // console.log(resultsDiv);
    resultsDiv.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${bakeryTotal} kepalų</p>`;
    resultsDiv.innerHTML += `<p><strong>Jai reikia spėti pagaminti:</strong> ${dayReservations} kepalų</p>`;
    resultsDiv.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${isBakeryGonnaMakeIt ? 'taip' : 'ne'}</p>`;
});


