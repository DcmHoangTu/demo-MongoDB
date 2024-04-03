const mongoose = require('mongoose');
const ModuleSchema = mongoose.Schema(
   {
      name: String,
      code: Number
   }
);

const ModuleModel = mongoose.model("module", ModuleSchema);
module.exports = ModuleModel;