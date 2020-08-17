export const transformToTree = obj => {
    let tmp = {...obj};

    Object.entries(obj)
        .sort(compare)
        .forEach(([level, value]) => {
            const parentLevel = parseInt(level) - 1;
            if (parentLevel < 0) return;
            value.forEach(val => {
                const index = obj[parentLevel].findIndex(parent => parent.id === val.parent_id);
                tmp[parentLevel][index].children.push(val);
            });
        });
    return tmp[0];
}

const compare = ([keyA], [keyB]) => {
    const a = parseInt(keyA);
    const b = parseInt(keyB);
    if (b > a) return 1;
    if (b < a) return -1;

    return 0;
}