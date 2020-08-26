const fs = require('fs');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

require('dotenv').config();

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Specify path to styles ', (answer) => resolve(answer));
    });
};

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Specify entry point (e.g. _extend.less) ', (answer) => resolve(answer));
    });
};

const link = async () => { 
    const input_path = process.env.GLOBAL_STYLES_PATH || await question1();
    const entry_point = process.env.GLOBAL_STYLES_ENTRY_POINT || await question2();
    const output_path = './styles';
    rl.close();

    fs.symlink(input_path, output_path, (err) => console.log(err || 'Sync complete'));

    fs.writeFile(`./stories/styles.stories.js`, `import '../styles/${ entry_point }';`, (err) => {
        if (err) return console.log(err);
        console.log('Config file created');
    });
}

link();
