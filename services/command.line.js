import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import commandLineUsage from 'command-line-usage';
import commandLineArgs from 'command-line-args';

import chalk from 'chalk';

const optionDefinitions = [
    { name: 'verbose', alias: 'v', type: Boolean },
    { name: 'src', type: String, multiple: true, defaultOption: true },
    { name: 'help', alias: 'h', type: Boolean },
    { name: 'ras', type: String },
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
                name: 'no-ras',
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

const showCommandLineUsage = () => {
    const usage = commandLineUsage(sections);
    console.log(usage);
};

const getCommandLineOptions = () => {
    try {
        const options = commandLineArgs(optionDefinitions);
        return options;
    } catch (e) {
        switch (e.name) {
            case 'UNKNOWN_OPTION':
                console.log('Неизвестная опция!');
                break;
        }
    }
    return undefined;
};

export { showCommandLineUsage, getCommandLineOptions };
