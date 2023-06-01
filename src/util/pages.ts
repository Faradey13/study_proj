export const getTotalPages = (limit:number, totalCount: number) => {
    return Math.ceil(totalCount/limit)
}

export const pgArray = (totalPage:number) => {
    let result: number[] = [];
    for (let i = 0; i < totalPage; i++) {
        result.push(i+1)
    }
    return result
}