export async function request(url: string) {
    const res = await fetch(url);
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('请求失败');
    }
}
