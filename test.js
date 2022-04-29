const axios = require("axios");

describe("Account Management API", () => {
    test("/api/accounts", async () => {
        const {data} = await axios.get('http://localhost:8888/api/accounts');
        expect(data).toEqual([]); //['milan', 'ivo']
    });
});