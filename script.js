

const showData = () => {
    const searchInput = document.getElementById('search_value').value;
    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchInput}
    ` 
    fetch(URL).then((res) => res.json()).then((data) => playersGrid(data))
}

const playersGrid = (data) => {
    const players = data.player;
    players.forEach(player => {
        let gridWarper = document.getElementById('grid_warper');
        const {strPlayer, strNationality, dateBorn, strThumb} = player;
        const grid = document.createElement('div');
        grid.classList.add("grind_single_item");
        grid.innerHTML = ` 
        <img src=${strThumb ? strThumb : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} alt="Image"}>
        <h3>Name: <span class="font-bold uppercase">${strPlayer}</span></h3>
                <div class="flex justify-between">
                    <h3>Born: ${dateBorn}</h3>
                    <h3>Nationality: ${strNationality}</h3>
                </div>
        `
        gridWarper.appendChild(grid)
    });
}

const submitBtn = () => {
    document.getElementById('grid_warper').innerHTML = "";
    showData()
    document.getElementById('search_value').value = '';
}