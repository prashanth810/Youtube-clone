export const API_KEY = 'AIzaSyDOkhpsEsW8N7OgBb9uwB828fUWNZbw4hk';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.round(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.round(value / 1000) + "K";
    }
    else {
        return value;
    }
}