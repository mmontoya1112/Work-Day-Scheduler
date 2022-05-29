var currentMoment = moment()
var currentDay = document.getElementById('currentDay')
currentDay.innerHTML = currentMoment.format('MMMM Do YYYY, h:mm:ss a')


var table = document.getElementById('planner');
var cells = table.getElementsByTagName('td');

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(){
        console.log('clicked');
        var input = document.createElement('textarea');
        cells.append(input)
        // input.setAttribute('type', 'text');
        // input.value = this.innerHTML;
        // input.style.backgroundColor = "LightGoldenRodYellow";

        // this.innerHTML = '';
        // this.append(input);
        // this.firstElementChild.select();

    }
)} 

// it needs to be in local storage
// localStorage.setItem('mostRecentScore', score)