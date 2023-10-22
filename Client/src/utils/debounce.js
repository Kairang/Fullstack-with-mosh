export default function Debounce(fn, delay = 0) {
    let timeId;

    return () => {
        if (timeId) {
            clearTimeout(timeId);
            timeId = null;
        }

        timeId = setTimeout(() => fn(), delay);
    }
}