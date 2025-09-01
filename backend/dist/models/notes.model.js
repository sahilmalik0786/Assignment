import { Document, model, Schema, Types } from 'mongoose';
const noteSchema = new Schema({
    title: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const notesModel = model('Notes', noteSchema);
export default notesModel;
//# sourceMappingURL=notes.model.js.map