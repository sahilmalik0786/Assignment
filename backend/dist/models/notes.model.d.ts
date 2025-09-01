import { Document, Types } from 'mongoose';
interface INotes extends Document {
    title: string;
    user: Types.ObjectId;
}
declare const notesModel: import("mongoose").Model<INotes, {}, {}, {}, Document<unknown, {}, INotes, {}, {}> & INotes & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default notesModel;
//# sourceMappingURL=notes.model.d.ts.map