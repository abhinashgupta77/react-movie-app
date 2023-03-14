export function isNull(variable) {
    return variable === null;
}

export function isUndefined(variable) {
    return typeof variable === 'undefined';
}

export function isUndefinedOrNull(variable) {
    return isUndefined(variable) || isNull(variable);
}

export const hasEmptyValue = (variable, testNumber = true) => {
    if (!isUndefinedOrNull(variable)) {
        if (Array.isArray(variable)) {
            return variable.length === 0;
        }

        switch (typeof variable) {
        case typeof {}:
            return Object.keys(variable).length === 0 && variable.constructor === Object;
        case typeof '':
            return variable === '';
        case typeof Number():
            return testNumber && parseFloat(variable) === 0.0;
        default:
            return false;
        }
    }
    return true;
};
