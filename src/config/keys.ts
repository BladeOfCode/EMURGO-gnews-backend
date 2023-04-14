require('dotenv').config();

const keys = {
    app: {
        name:"EMURGO Backend Testing",
        apiURL: `${process.env.BASE_API_URL}`
    },
    port: process.env.PORT || 3000,
    env_mode: process.env.NODE_ENV || "development",
    gnews: {
        baseURL:process.env.GNEWS_BASE_URL,
        apiKey:process.env.GNEWS_API_KEY,
    }
}

export {
    keys
}