function updateViewLogin() {

    document.getElementById('app').innerHTML = `
    <h1>ORDDUELL</h1>
    <div class="container-login">
        <div class="inputname">Brukernavn: </div>
        <input type="text" oninput="model.player.userName = this.value">
        <div class="inputname">Passord: </div>
        <input type="password" oninput="model.player.password = this.value">
        <button onclick="logIn()" class="login-btn">Logg inn</button>
        <button onclick="updateViewCreate()" class="login-btn">Ny bruker</button>
    </div>
    `
}