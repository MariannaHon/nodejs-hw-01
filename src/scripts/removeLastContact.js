import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        if (contacts.length > 0) {
            const withoutOne = contacts.pop();
            console.log('Removed contact:', withoutOne);
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 4), 'utf8');
        }
        else {
            console.log('No contacts to remove');
        }
    } catch (error) {
        console.error('Error removing last contact', error);
    }
};

removeLastContact();
