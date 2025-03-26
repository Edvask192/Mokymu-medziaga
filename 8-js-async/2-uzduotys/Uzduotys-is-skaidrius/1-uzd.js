function executeAfterDelay(callback) {
    setTimeout(callback, 2000);
}

executeAfterDelay(() => {
    console.log("Callback funkcija atlikta po 2 sekundziu.");
});
