let data = {
    src: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    buf: [],
    tar: []
}

function move(data, src, tar) {
    const pan = data[src].pop();
    data[tar].push(pan);
    console.log(`move ${pan} from ${src} to ${tar}`);
}

function hanota(data) {
    const src = "src";
    const buf = "buf";
    const tar = "tar";
    const i = data[src].length;
    dfs(i, data, src, buf, tar);
}

function dfs(i, data, src, buf, tar) {
    if (i == 1) {
        move(data, src, tar);
        return;
    }
    dfs(i - 1, data, src, tar, buf);
    move(data, src, tar);
    dfs(i - 1, data, buf, src, tar);
}

hanota(data);
