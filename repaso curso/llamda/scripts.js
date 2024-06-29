function fetchData(callback) {
    console.log("Fetching data...");


    setTimeout(() => {
        const data = {
            user: "John Doe",
            age: 30,
            email: "john.doe@example.com"
        };

        console.log("Data fetched.");
        callback(null, data);
    }, 2000);
}


function handleData(error, data) {
    if (error) {
        console.error("Error fetching data:", error);
        document.getElementById('output').innerText = "Error fetching data.";
    } else {
        console.log("Data received:", data);
        document.getElementById('output').innerHTML = `
            <strong>User:</strong> ${data.user} <br>
            <strong>Age:</strong> ${data.age} <br>
            <strong>Email:</strong> ${data.email}
        `;
    }
}


document.getElementById('fetchDataBtn').addEventListener('click', () => {
    fetchData(handleData);
});
