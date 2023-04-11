const path = require('path');

module.exports = {
    webpack: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            "@pages": path.resolve(__dirname, 'src/pages'),
            "@services": path.resolve(__dirname, 'src/services'),
            "@store": path.resolve(__dirname, 'src/store'),
            "@lib": path.resolve(__dirname, 'src/lib'),
            "@interfaces": path.resolve(__dirname, 'src/interfaces'),
            "@model": path.resolve(__dirname, 'src/model'),
            "@auth": path.resolve(__dirname, 'src/model/Auth'),
            "@common": path.resolve(__dirname, 'src/model/Common'),
            "@component": path.resolve(__dirname, 'src/component'),
            "@routes": path.resolve(__dirname, 'src/routes'),
            "@hooks": path.resolve(__dirname, 'src/hooks'),
            "@messages": path.resolve(__dirname, 'src/messages'),
            "@languageConvertor": path.resolve(__dirname, 'src/languageConvertor'),
        },
    }

   
};
