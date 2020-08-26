const fs = require('fs');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Story category: ', (answer) => resolve(answer));
    });
};

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Story name: ', (answer) => resolve(answer));
    });
};

const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Style file extension (css, less): ', (answer) => resolve(answer));
    });
};

const write = async () => {    
    const story_category = await question1();
    const story_name = await question2();
    const css_type = await question3();
    const story_name_lowercase = story_name.toLowerCase();
    const story_name_capitalised = story_name.charAt(0).toUpperCase() + story_name.slice(1);
    
    rl.close();

    const dir = `./stories/${ story_name_capitalised }`;
    const story_content = `import { storiesOf } from '@storybook/html';\r\nimport ${ story_name_lowercase } from './${ story_name_lowercase }.html';\r\nimport './${ story_name_lowercase }.${ css_type }';\r\n\r\nstoriesOf('${ story_category }', module).add('${ story_name_capitalised }', () => ${ story_name_lowercase });`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);

        fs.writeFile(`${ dir }/${ story_name_lowercase }.html`, '', (err) => {
            if (err) return console.log(err);
        });
        
        fs.writeFile(`${ dir }/${ story_name_lowercase }.${ css_type }`, '', (err) => {
            if (err) return console.log(err);
        });
        
        fs.writeFile(`${ dir }/${ story_name_lowercase }.stories.js`, story_content, (err) => {
            if (err) return console.log(err);
        });
    } else {
        console.error('This directory already exists');
    }
};

write();