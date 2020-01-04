const os = require('os');

module.exports = {
    chainWebpack: (config) => {
        config.plugin('fork-ts-checker').tap((args) => {
            let totalmem = Math.floor(os.totalmem() / 1024 / 1024); //get OS mem size
            let allowUseMem = totalmem > 2048 ? 2048 : 512;
            args[0].memoryLimit = allowUseMem;
            return args;
        });
    }
};
