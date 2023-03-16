class GoogleAuthService {
    static init(client_id,cb) {
        try {
            google.accounts.id.initialize({
                // client_id:'792789015648-nsnptboa912bvuvujfsugeci6pj45k72.apps.googleusercontent.com',
                client_id:client_id,
                callback: cb
            })
        } catch (e) {
            throw new Error(e);
        }
    }

    static renderButton(DOMElement, options) {
        try {
            google.accounts.id.renderButton(
                DOMElement,
                options
            )
        } catch (e) {
            throw new Error(e);
        }
    }

}
export {GoogleAuthService}