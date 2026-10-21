import { worldCupList } from './data'
import { renderGames } from './render'
import './style.css'
renderGames(worldCupList)

window.showDetail=function showDetail(id){
    console.log(id);
    const selectedCountries = worldCupList.find(obj=>obj.id==id)
    console.log(selectedCountries);
    alert(`${selectedCountries.winner} - ${selectedCountries.runner_up}(${selectedCountries.year}): \n
        ${selectedCountries.venue} \n 
        ${selectedCountries.location} \n  
        NÉZŐK SZÁMA: ${selectedCountries.attendance}
        `)
}

window.handleSearch=function handleSearch(){
    const searchedMatch = document.getElementById('kereso').value
    console.log(searchedMatch);
    const filteredMatch=worldCupList.filter(obj=>obj.winner.toLowerCase().includes(searchedMatch.toLowerCase()) || obj.runner_up.toLowerCase().includes(searchedMatch.toLowerCase()))
    renderGames(filteredMatch)
    const msg = filteredMatch.length==0 ? `Nincs találat! A keresett kifejezés: ${searchedMatch}` : `${searchedMatch} az alábbi döntőkben vett részt: `
    document.querySelector('.msg').textContent=msg
}

window.handleDelete=function handleDelete(){
    renderGames(worldCupList)
    document.querySelector('.msg').innerHTML=''
}