let env = process.env


const config = {
    development: {
        BASE_URL: "http://localhost:5000"
    },
    production: {
        BASE_URL: "http://mrli.top:5000"
    }
}


export default config[env.NODE_ENV]