const PATH = "http://localhost:5093/api";

export const api = {
    async fetch(endpoint: string, options?: RequestInit): Promise<Response> {
        return fetch(`${PATH}/${endpoint}`, options);
    }
};