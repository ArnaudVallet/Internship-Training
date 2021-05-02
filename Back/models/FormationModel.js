const mongoose = require('mongoose');
const Populate = require("../utils/autopopulate");

const FormationSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, "Veuillez saisir un titre à la formation."],
        unique: true
    },
    modules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
    }],
    // published: {
    //     type: Boolean,
    //     default: false
    // }
})

//FormationSchema.pre('find', Populate('modules'));
// FormationSchema.virtual('EstimatedTime'/*, {
    //     ref: 'Module',
    //     localField: 'modules',
    //     foreignField: '_id'
    //   }*/)
    //   .get( async() => {
    //     let data = await this.modules;
    //     let time;
    //     if(data){
    //         data.map(module => {
    //             time += module.time
    //         })
    //     }
    //     return time;
    // });

const Formation = mongoose.model('Formation', FormationSchema);

module.exports = Formation;
