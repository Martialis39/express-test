var async = require('async')
var assignment = require('./models/assignment')
var readlineSync = require('readline-sync')


//
// var inputs = []

// for (var i = 0; i < 3; i++) {
//     var inputData1 = readlineSync.question("Enter the satisfactions rating (5 ratings, separated by commas, range 0 - 3) for employee nr " + (i + 1) + ".")
//     inputData1 = i + "," + inputData1;
//     inputs.push(inputData1.split(",").map(x => Number(x)))
// }
// var inputData1 = readlineSync.question("Enter the Member Count, followed by their satisfactions rating (5 ratings, separated by commas, range 0 - 3)")
//


inputs = [
    [1, 2, 3, 1, 2],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2]
]
console.log(inputs);


var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin1@ds143242.mlab.com:43242/assignment';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

for (let j = 0; j < 3; j++) {
    var sampleData = new assignment({
        member_count: inputs[j][0],
        sum_one: inputs[j][1],
        sum_two: inputs[j][2],
        sum_three: inputs[j][3],
        sum_four: inputs[j][4],
        sum_five: inputs[j][5],
    }).save(function (err) {
        if (err) throw err;
        console.log('Saved')
    })

}

//var t = new mongoose.Schema('Assignment', AssignmentSchema)
// var sampleData = new assignment({
//     member_count: 4,
//     sum_one: 1,
//     sum_two: 1,
//     sum_three: 1,
//     sum_four: 1,
//     sum_five: 5,
// }).save(function (err) {
//     if (err) throw err;
//     console.log('Saved')
// })

setTimeout(function () {

    let d = mongoose.assignment.find({
        member_count: 1
    })
    console.log(d.member_count)

}, 2000)