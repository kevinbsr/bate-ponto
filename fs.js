const fs = require('fs');

// Path to the JSON file
const jsonFilePath = 'data.json';

// Read the existing JSON data
let existingData;

try {
  existingData = require(`./${jsonFilePath}`);
  if (!Array.isArray(existingData)) {
    // If existingData is not an array, initialize it as an empty array
    existingData = [];
  }
} catch (error) {
  // Handle file read error or invalid JSON
  console.error('Error reading JSON file:', error.message);
  process.exit(1); // Exit the script with an error code
}

// New data to be added
const newData = {
  name: 'Luisa',
  // add other properties as needed
};

// Ensure that existingData is an array before attempting to push new data
if (Array.isArray(existingData)) {
  // Add new data to the existing data
  existingData.push(newData);

  // Write the updated data back to the JSON file
  fs.writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2));

  console.log('New data added successfully.');
} else {
  console.error('existingData is not an array.');
}
