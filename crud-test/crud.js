const fs = require('fs');

const jsonFilePath = 'data.json';

// Function to read JSON data from the file.
const readData = () => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading JSON file: ', error.message);
    return [];
  }
};

// Function to write JSON data to the file
const writeData = (data) => {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
    console.log('Data written to file succesfully.');
  } catch (error) {
    console.error('Error writing JSON file: ', error.message);
  }
};

// Create operation
const createItem = (newItem) => {
  const data = readData();
  data.push(newItem);
  writeData(data);
};

// Read operation
const readAllItems = () => {
  return readData();
};

// Update operation
const updateItem = (itemId, updatedItem) => {
  const data = readData();
  const index = data.findIndex(item => item.id === itemId);

  if (index !== -1) {
    data[index] = {...data[index], ...updatedItem};
    writeData(data);
    console.log('Item updated succesfully.');
  } else {
    console.error('Item not found.');
  }
};

// Delete operation
const deleteItem = (itemId) => {
  const data = readData();
  const newData = data.filter(item => item.id !== itemId);

  if (data.length !== newData.length) {
    writeData(newData);
    console.log('Item deleted succesfully.');
  } else {
    console.error('Item not found.');
  }
};

createItem({id: 1, name: 'Item 1'});
createItem({id: 2, name: 'Item 2'});

const allItems = readAllItems();
console.log('All items: ', allItems);

updateItem(1, { name: 'Updated Item 1'});
console.log('All items: ', allItems);

deleteItem(2);
console.log('All items: ', allItems);