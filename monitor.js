#!/usr/bin/node
import {
    getCommandLineOptions,
    showCommandLineUsage,
} from './services/command.line.js';
import { saveKeyValue } from './services/settings.service.js';

const main = async () => {
    const options = getCommandLineOptions();
    console.log(`options is ${Object.keys(options)}`);
    if (!options || options['help'] || Object.keys(options).length === 0) {
        showCommandLineUsage();
    } else {
        //console.log(Object.keys(options));
        if (options['saverac'] && options['rac']) {
            await saveKeyValue('rac', options['rac']);
        }
        if (options['ras']) {
            console.log(`RAS address is ${options['ras']}`);
        }
        /*switch (options.keys()) {
            case options['ras']:
                console.log('ras selected');
                break;
            default:
                console.log('No options');
        }*/
    }
    //showCommandLineUsage();
};

main();
