const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);


const uri = 'mongodb://localhost:27017/collector';
mongoose.connect(uri, { useNewUrlParser: true });


const collectorSchema = new Schema({
  collection_name: 'String',
  fields: [{
    Header: 'String',
    accessor: 'String',
  }],
  items: [new Schema({}, { strict: false })],
}, { strict: false });
const Collections = mongoose.model('collections', collectorSchema);


const getAllCollections = () => Collections.find();

const addCollection = name => Collections.create(
  { collection_name: name },
);

const removeCollection = name => Collections.findOneAndDelete(
  { collection_name: name },
);


const addField = (collection, field) => Collections.findOneAndUpdate(
  { collection_name: collection },
  { $push: { fields: field } },
);

const removeField = (collection, field) => Collections.findOneAndUpdate(
  { collection_name: collection },
  { $pull: { fields: field } },
);

const updateField = (collection, oldField, newField) => Collections.findOneAndUpdate(
  { collection_name: collection, field: oldField },
  { $set: { 'field.$': newField } },
);


const addItem = (collection, item) => Collections.findOneAndUpdate(
  { collection_name: collection },
  { $push: { items: item } },
);

const removeItem = (collection, itemId) => Collections.findOneAndUpdate(
  { collection_name: collection },
  { $pull: { items: { _id: itemId } } },

);

const updateItem = (collection, itemId, item) => Collections.findOneAndUpdate(
  { collection_name: collection, 'items._id': itemId },
  { $set: { 'items.$': item } },
);

module.exports = {
  getAllCollections,
  addCollection,
  removeCollection,
  addField,
  removeField,
  updateField,
  addItem,
  removeItem,
  updateItem,
};
