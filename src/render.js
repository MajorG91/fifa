export function renderGames(arr){
    document.querySelector('.msg').textContent=''
    const cardString = arr.map(obj=>`
        <div class='card'>
            <h2>${obj.year} év győztese: ${obj.winner}</h2>
            <p>Az eredmény: ${obj.score}</p>
            <p>A második helyezet: <strong>${obj.runner_up}</strong></p>
            <button onclick="showDetail(${obj.id})">Részletek..</button>
        </div>
        `).join('')
        document.querySelector('.countries').innerHTML= cardString
}