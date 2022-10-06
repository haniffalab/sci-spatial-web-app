const isValidURL = (config) => {
    // cheapest URL validation I could think of
    var pattern = new RegExp('^(https?:\\/\\/)(.*?).json$', 'i');
    return !!pattern.test(config);
};

export function validateConfig(url) {
    if (isValidURL(url)) {
        return url;
    }

    console.log(window.location.origin + window.location.pathname.replace(/\/+$/, '') + '/config/sample.json')
    return window.location.origin + window.location.pathname.replace(/\/+$/, '') + '/config/sample.json';
}