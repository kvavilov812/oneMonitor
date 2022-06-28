#!/usr/bin/node
import {
    getCommandLineOptions,
    showCommandLineUsage,
} from './services/command.line.js';

const main = () => {
    const options = getCommandLineOptions();
    console.log(`options is ${Object.keys(options)}`);
    if (!options || options['help'] || Object.keys(options).length === 0) {
        showCommandLineUsage();
    } else {
        //console.log(Object.keys(options));
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
