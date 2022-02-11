export const getLogin = async (data) => {
    try {
        const sendReq = fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            }, body: JSON.stringify(data)
        })
        const res = await sendReq;
        if (!res.ok) return;

        const resData = await res.json();
        return {
            msg: resData.message,
            status: resData.statusCode,
            result: resData.result
        };
    } catch (err) {
        const errMsg = await err.message;
        return {
            msg: errMsg
        };
    }
};
export const getApiKey = async () => {
    try {
        const sendAPIreq = fetch("https://devapi.dhakai.com/api/v2/deviceuid");
        const res = await sendAPIreq;
        const response = await res.json();
        return response.result.deviceUuid;
    } catch (err) { }

}