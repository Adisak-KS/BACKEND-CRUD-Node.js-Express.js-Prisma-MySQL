exports.create = async (req, res) => {
    try {
        const {name, price} = req.body
        console.log(name)
        res.send('Hello Controller Create')
    } catch (err) {
        console.log(err)
    }
}

exports.list = async (req, res) => {
    try {
        res.send('Hello Controller List(GET)')
    } catch (err) {
        console.log(err)
    }
}

exports.read = async (req, res) => {
    try {
        res.send('Hello Controller Read (GET:ID)')
    } catch (err) {
        console.log(err)
    }
}

exports.update = async (req, res) => {
    try {
        res.send('Hello Controller Update (PUT:ID)')
    } catch (err) {
        console.log(err)
    }
}

exports.remove = async (req, res) => {
    try {
        res.send('Hello Controller Remove (DELETE:ID)')
    } catch (err) {
        console.log(err)
    }
}