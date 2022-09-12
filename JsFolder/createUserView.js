function updateViewCreate() {
    document.getElementById('app').innerHTML = /*html*/ `
    <h3>ORDDUELL</h3>
    Brukernavn: <input type="text" oninput="model.player.userName = this.value"><br>
    Age: <input type="number" oninput="model.player.age = this.value"><br>
    Passord: <input type="password" oninput="model.player.password = this.value"><br>
    Gjenta Passord: <input type="password" oninput="model.player.repeatPassword = this.value"><br>

    <button onclick="createUser()">Lag ny bruker</button>
    `;

}