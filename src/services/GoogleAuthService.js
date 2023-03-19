class GoogleAuthService {
    static init(client_id,cb) {
        try {
            google && google.accounts.id.initialize({
                client_id:client_id,
                callback: cb
            })
        } catch (e) {
            throw new Error(e);
        }
    }

    static renderButton(DOMElement, options) {
        try {
           google && google.accounts.id.renderButton(
                DOMElement,
                options
            )
        } catch (e) {
            throw new Error(e);
        }
    }

}
export {GoogleAuthService}