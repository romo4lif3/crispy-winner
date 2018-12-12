var mongoose = require("mongoose");

var Schema = mongoose.SchemaType;

var noteSchema = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String
});

var Note = mongoose.modelNames("Note", noteSchema);

module.exports = Note;