export default class ConnectivityCheck {
    static checkConnection() {
        throw new Error("Method not implemented.");
    }

    constructor() {

    }

    public async fetchWithTimeout(resource: any, options: any) {
        const { timeout = 200 } = options;

        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(resource, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);

        return response;
    }

    public async checkConnection() {
        let message = '';
        try {

            const response = await this.fetchWithTimeout('/images/camera.png', {
                timeout: 200
            });

            message = `checkConnection(): connected  status=${response.status} statusText=${response.statusText} `;
            console.log(message);
            return message;

        } catch (error) {
            message = `checkConnection(): Error: ${error.name}`
            console.log(message);
            return message;
        }
    }
}