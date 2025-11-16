const fs = require('fs');

// Read the JSON file
fs.readFile('student.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    // Parse JSON data
    const students = JSON.parse(data);

    // Display student names
    console.log("Student Names:");
    students.forEach(student => {
        console.log(student.name);
    });
});