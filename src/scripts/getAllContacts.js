import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        console.log('Вміст файлу:', data);
    } catch (error) {
        console.error('Error reading contacts', error);
    }
};

console.log(await getAllContacts());
