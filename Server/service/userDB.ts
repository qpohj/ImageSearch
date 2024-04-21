import fs from 'fs/promises';
import { UserData } from '../model/UserData';

export const initDB = async (): Promise<UserData | undefined> => {
    let data: UserData = { users: [] };
    try {
        // Try reading the user data from the file
        await fs.readFile('./data/users.json', 'utf-8');
    } catch (error) {
        // If the file doesn't exist or there's an error reading it, initialize with empty data
        await write(data);
    }
    return data;
};

// possibly change data: to database model
export const write = async (data: UserData): Promise<void> => {
    try {
        // Convert the data to JSON format with indentation for readability
        const jsonData = JSON.stringify(data, null, 2);

        // Write the JSON data to the users.json file
        await fs.writeFile('./data/users.json', jsonData);
    } catch (error) {
        console.error('Error writing user data:', error);
        // Optionally rethrow the error if you want to propagate it further
        // throw error;
    }
};

export const read = async (): Promise<UserData | undefined> => {
    try {
        // Read the data from the users.json file
        const rawData = await fs.readFile('./data/users.json', 'utf-8');

        console.log(rawData)

        // Parse the JSON data
        const data = JSON.parse(rawData);

        // Return the parsed data
        return data;
    } catch (error) {
        console.error('Error reading user data:', error);
        return undefined; // Return undefined in case of error
    }
};
