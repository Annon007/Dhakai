export const getLogin = async data => {
    try {
        const sendReq = fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data)
        })
        const res = await sendReq;
        if (!res.ok) return;
        return res;
    } catch (err) {

    }
}