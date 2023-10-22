export function paginate(items, pageNum, pageSize) {
    const startIndex = (pageNum - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
}