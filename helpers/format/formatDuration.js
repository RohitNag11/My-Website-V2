export const formatDuration = (start, end = new Date()) => {
    let ms = Math.floor(end.getTime() - start.getTime());
    if (ms < 0) ms = -ms;
    const time = {
        yr: Math.floor(ms / 31536000000),
        mo: Math.floor(ms / 2592000000) % 12,
        wk: Math.floor(ms / 604800000) % 4  // Adding weeks
    };

    // delete weeks if greater than a month
    if (ms >= 2.628e+9) delete time.wk;

    // Filtering out zero values and forming the final string
    return Object.entries(time)
        .filter(([key, val]) => val !== 0)
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
        .join(' ');
};
