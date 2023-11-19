const fs = require('fs').promises;

const updateFile = async (fileName, fileContent) => {
    try {
        // Read the existing content of the file
        const existingContent = await fs.readFile(fileName, 'utf-8');

        // Combine the existing content with the new content
        const updatedContent = fileContent;

        // Write the updated content back to the file
        await fs.writeFile(fileName, updatedContent);

        console.log(`File ${fileName} updated successfully with new content: ${updatedContent}`);
    } catch (error) {
        console.error(`Error updating file ${fileName}: ${error.message}`);
    }
};

module.exports = updateFile;
