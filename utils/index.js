export function capitalize(str) {
    if (!str || str.length === 0) return str;

    if (str.length === 1) return str[0].toUpperCase();

    return str[0].toUpperCase() + str.slice(1, str.length);
}

export function truncateStringAndAddEllipsis(str, len) {
    let retString = str;

    if (str.length > len && len > 10) {
        retString = str.slice(0, len - 3).trim();
        retString += "...";
        return retString;
    }

    return retString;
}