import { get } from 'https';

// Get the icon_names parameter from the command line
const iconNames = process.argv[2];
if (!iconNames) {
  console.error('Usage: node generate-symbols-font-url.js <icon_names>');
  process.exit(1);
}

// Split the icon names by comma, remove duplicates, and sort them
const sortedIconNames = [...new Set(iconNames.split(','))].sort();

// Construct the URL with the provided icon_names
const url = `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&icon_names=${sortedIconNames.join(',')}`;

get(url, (res) => {
  let data = '';

  // Collect the data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Process the data once fully received
  res.on('end', () => {
    try {
      // Extract the src URL using a regular expression
      const match = data.match(/src:\s*url\(([^)]+)\)/);
      if (match && match[1]) {
        console.log('Symbols font download URL:', match[1]);
      } else {
        console.error('Could not find the src URL in the response.');
      }
    } catch (err) {
      console.error('Error processing the response:', err.message);
    }
  });
}).on('error', (err) => {
  console.error('Error fetching the URL:', err.message);
});
