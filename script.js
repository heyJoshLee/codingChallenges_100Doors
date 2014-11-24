
// sets up a function to create the Door object
var Door = function (doorNum, open) {
    this.doorNum = doorNum;
    this.open = false;
};

// array that stores the doors
var doors = [];

// makes 100 doors and puts them in the door array
var makeAllDoors = function () {
    while(doors.length < 100) {
    doors[doors.length] = new Door(doors.length  + 1);
    console.log(doors.length);
    }
};

var pass = function () {
    var passes = 1;
    while (passes <= 100) {
        for (var currentDoor = passes - 1; currentDoor <= doors.length - 1; currentDoor += passes){
            doors[currentDoor].open = !(doors[currentDoor].open);
        }
         passes += 1;
    }
    console.log(doors);
};

var playGame = function () {
    makeAllDoors();
    pass();
    for(var i = 0; i < doors.length; i ++) {
        document.getElementById('answer').insertAdjacentHTML('beforeend', 'Door: ' + doors[i].doorNum + " &nbsp; Open: " + doors[i].open + '<br>');
        console.log(doors[i].doorNum + " " + doors[i].open);
    }
};