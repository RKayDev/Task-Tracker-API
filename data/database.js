import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const databaseFile = join(__dirname, 'database.json');

const database = {
    async read() {
        return await readFile(databaseFile);;
    },
    async write(data) {
        try {
            await writeFile(databaseFile, data);
        } catch (error) {
            console.error("Error writing to database:", error);
        }
    }
};

export default database;

