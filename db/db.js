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
    form: {},
  }],
  items: [new Schema({ any: {} }, { strict: false, timestamps: true })],
}, { strict: false, timestamps: true });
const Collections = mongoose.model('collections', collectorSchema);


// Collections
const getAllCollections = () => Collections.find();

const getCollectionByName = name => Collections.findOne({ collection_name: name });

const addCollection = name => Collections.create(
  { collection_name: name },
);

const removeCollection = name => Collections.findOneAndDelete(
  { collection_name: name },
);

const updateCollection = (oldName, newName) => Collections.findOneAndUpdate(
  { collection_name: oldName },
  { $set: { collection_name: newName } },
);


// Fields
const addField = (collection, field) => Collections.findOneAndUpdate(
  { collection_name: collection },
  { $push: { fields: field } },
);

const removeField = (collection, fieldID) => Collections.findOneAndUpdate(
  { collection_name: collection },
  { $pull: { fields: { _id: fieldID } } },
);

const updateField = (collection, fieldID, newField) => Collections.findOne(
  { collection_name: collection },
  (err, col) => {
    col.fields.id(fieldID).Header = newField;
    col.save();
  },
);


// Items
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
  getCollectionByName,
  addCollection,
  removeCollection,
  updateCollection,
  addField,
  removeField,
  updateField,
  addItem,
  removeItem,
  updateItem,
};
