// user.service.ts
import { User } from '../model/User';
import { read, write } from './userDB';

// functions that will be passed in controller. #TODO: complete service functions
export const get = async (userId: string): Promise<User | undefined> => {
    try {
        // Read the user data
        const userData = await read();
        if (!userData) {
            throw new Error('Failed to read user data.');
        }

        // Find the user with the specified userId
        const user = userData.users.find((user) => user.userId === userId);

        // Return the user if found
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        return undefined; // Return undefined in case of error
    }
};

export const create = async (user: User): Promise<User | undefined> => {
    try {
        // Read the user data
        const userData = await read();
        if (!userData) {
            throw new Error('Failed to read user data.');
        }

        // Check if the user already exists
        const existingUser = userData.users.find(
            (u) => u.userId === user.userId
        );
        if (existingUser) {
            return existingUser; // Return the existing user if found
        }

        // Add the new user
        userData.users.push(user);

        // Write the updated data back to storage
        await write(userData);

        // Return the newly created user
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        return undefined; // Return undefined in case of error
    }
};

export const update = async (
    userId: string,
    user: User
): Promise<User | undefined> => {
    try {
        // Read the user data
        const userData = await read();
        if (!userData) {
            throw new Error('Failed to read user data.');
        }

        // Check if the user exists
        const existingUserIndex = userData.users.findIndex(
            (u) => u.userId === userId
        );
        if (existingUserIndex !== -1) {
            // Update the existing user
            userData.users[existingUserIndex] = {
                ...userData.users[existingUserIndex],
                ...user
            };
        } else {
            // Add the new user if not found
            userData.users.push(user);
        }

        // Write the updated data back to storage
        await write(userData);

        // Return the updated user
        return user;
    } catch (error) {
        console.error('Error updating user:', error);
        return undefined;
    }
};

export const remove = async (userId: string): Promise<void> => {
    try {
        // Read the user data
        const userData = await read();
        if (!userData) {
            throw new Error('Failed to read user data.');
        }

        // Filter out the user with the specified userId
        userData.users = userData.users.filter(
            (user) => user.userId !== userId
        );

        // Write the updated data back to storage
        await write(userData);
    } catch (error) {
        console.error('Error removing user:', error);
        // Optionally rethrow the error if you want to propagate it further
        // throw error;
    }
};
