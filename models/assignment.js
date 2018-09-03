var mongoose = require('mongoose');

var Schema = mongoose.Schema;

console.log("Ran schema")

var AssignmentSchema = new Schema({
    member_count: {
        type: Number,
        required: true,

    },
    sum_one: {
        type: Number,
        set: keepWithinRange,
        min: 0,
        max: 3
    },
    sum_two: {
        type: Number,
        set: keepWithinRange,
        min: 0,
        max: 3
    },

    sum_three: {
        type: Number,
        set: keepWithinRange,
        min: 0,
        max: 3
    },

    sum_four: {
        type: Number,
        set: keepWithinRange,
        min: 0,
        max: 3

    },
    sum_five: {
        type: Number,
        set: keepWithinRange,
        min: 0,
        max: 3
    }
});

function keepWithinRange(v) {
    if (v > 3) {
        console.log("You exceeded the maximum input value (3), setting your input as 3.")
        return 3;
    }

    if (v < 0) {
        console.log("The minimum value is 0, setting your input as 0.")
        return 0;
    }
    return v;
}

// Virtual for author's full name
AssignmentSchema
    .virtual('average')
    .get(function () {
        return (this.sum_one + this.sum_four + this.sum_three + this.sum_two) / this.member_count;
    });

AssignmentSchema
    .virtual('happiness')
    .get(function () {
        return (this.sum_one + this.sum_four + this.sum_three + this.sum_two) / 15;
    });


// // Virtual for author's lifespan
// AuthorSchema
//     .virtual('lifespan')
//     .get(function () {
//             return (this.date_of_death.getYear() - this.date_of_death.getYear()).toString();
//         )

//         // Virtual for author's URL
//         AuthorSchema
//         .virtual('url')
//         .get(function () {
//             return '/catalog/author/' + this._id;
//         });

//Export model
module.exports = mongoose.model('Assignment', AssignmentSchema);

console.log("Running assignment");