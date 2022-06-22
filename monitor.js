#!/usr/bin/node

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const commandLineArgs = require('command-line-args');
import { testF } from './services/log.service.js';
import commandLineUsage from 'command-line-usage';
import chalk from 'chalk';

const optionDefinitions = [
    { name: 'verbose', alias: 'v', type: Boolean },
    { name: 'src', type: String, multiple: true, defaultOption: true },
    { name: 'timeout', alias: 't', type: Number },
];

const sections = [
    {
        header: `${chalk.red('1C:')}${chalk.yellow('RAC')}`,
        content: `Мониторинг нагрузки на сервер 1С через ${chalk.bold.green(
            'RAS + RAC'
        )}`,
    },
    {
        header: 'Опции',
        optionList: [
            {
                name: 'ras',
                typeLabel: '{underline RAS address }',
                description: 'Адрес RAS.',
            },
            {
                name: 'noras',
                //alias: 'nr',
                typeLabel: '',
                type: Boolean,
                description: 'Не запускать RAS',
            },
            {
                name: 'help',
                type: Boolean,
                description: 'Справка',
            },
        ],
    },
];

const main = () => {
    try {
        const options = commandLineArgs(optionDefinitions);
        console.log(options);
    } catch (e) {
        switch (e.name) {
            case 'UNKNOWN_OPTION':
                console.log('Неизвестная опция!');
                break;
        }
        //console.log(e);
    }
    //console.log(process.argv);
    //console.log(options);
    //testF();
    const usage = commandLineUsage(sections);
    console.log(usage);
};

main();
