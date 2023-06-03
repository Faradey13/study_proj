export const pickPage = (obj: object, keys:[]) => {
    Object.fromEntries(keys.map(key => [key, obj[key]]))
}