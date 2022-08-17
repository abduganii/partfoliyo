const connection = {
    // local: '',
    remote:'mongodb+srv://Abduganiy:rmFMzmMajqOVdFSC@cluster0.18iey.mongodb.net/nafAgency?retryWrites=true&w=majority'
}

const SECRET_KEY = "NO_SECRET_KEY"
const BACKEND_URL = 'https://portfolionaf.herokuapp.com/public/img'

module.exports = {
    connection,
    SECRET_KEY,
    BACKEND_URL
}