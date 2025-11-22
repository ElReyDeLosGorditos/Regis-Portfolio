import tailwindcss from 'tailwindcss';
import postcss from 'postcss';
import fs from 'fs';

const input = './src/tailwind.css';
const output = './src/output.css';
const css = fs.readFileSync(input, 'utf-8');

postcss([tailwindcss()])
    .process(css, { from: input, to: output })
    .then(result => {
        fs.writeFileSync(output, result.css);
        console.log('Tailwind built successfully!');
    });
