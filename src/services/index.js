const fs = require('fs');
const path = require('path');

const __pushModules = (modules) =>  (file) => {
    if (file === 'index.js') return null;
    const filename = file.split('.')[0];
    modules.push({ ...require("./" + file), social: filename });
}

const buildServices = async () => {
    const modules = [];
    const normalizedPath = path.join(__dirname);
    await fs.readdirSync(normalizedPath).forEach(__pushModules(modules));
    return modules;
}

module.exports = {  
    buildServices
}