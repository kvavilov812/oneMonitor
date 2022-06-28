import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const settingsFile = join(homedir(), 'onemonitor.conf');

const isExists = async (path) => {
    try {
        await promises.stat(path);
    } catch (e) {
        return false;
    }
    return true;
};

const getKeyValue = async (key) => {
    let data = {};
    if (await isExists(settingsFile)) {
        const file = await promises.readFile(settingsFile);
        data = JSON.parse(file);
    }

    return data[key];
};

const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExists(settingsFile)) {
        const file = await promises.readFile(settingsFile);
        data = JSON.parse(file);
        //console.log(data);
    }
    data[key] = value;
    await promises.writeFile(settingsFile, JSON.stringify(data));
};

export { saveKeyValue, getKeyValue };
