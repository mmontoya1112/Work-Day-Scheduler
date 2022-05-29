var currentMoment = moment()
var currentDay = document.getElementById('currentDay')
currentDay.innerHTML = currentMoment.format('MMMM Do YYYY, h:mm:ss a')

var workDay = [
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
]

var workDayValue = [
    09, 10, 11, 12, 13, 14, 15, 16, 17,
]

var timeBlock;
var hourBlock;
var eventBlock;
var saveButton;

function createSchedule(){
    $.each(workDay, function(index, time){

        //creating rows for our time blocks//
        timeBlock = $('<div>')
        timeBlock.addClass('row')

        //creating section for hour block//
        hourBlock = $('<div>')
        hourBlock.addClass('hour col-2 col-lg-1')
        hourBlock.css('text-align', 'center', 'padding-top', '31px')
        hourBlock.text(time)
        timeBlock.append(hourBlock)

        //creating event section//
        eventBlock = $('<textarea>')
        eventBlock.addClass('col-8 col-lg-10')
        eventBlock.attr('id', workDayValue[index])
        timeBlock.append(eventBlock)

        //creating save button sections//
        saveButton = $('<button>')
        saveButton.addClass('saveBtn fa fa-save col-2 col-lg-1')
        saveButton.attr('id', workDayValue[index])
        saveButton.attr('type', 'submit')
        saveButton.css('font-size', '24px')
        timeBlock.append(saveButton)

        $('.container').append(timeBlock)
    })
}
function styleSchedule(){
    $.each(workDayValue, function (index, time){
        eventBlock = $("#" + workDayValue[index]);

// styling for past hours
    if ((parseInt(taskBlock[0].id) < currentMoment.hour())) {
        taskBlock.addClass("past");
    }  
    //add else if for present and future time here
    })
}


createSchedule()