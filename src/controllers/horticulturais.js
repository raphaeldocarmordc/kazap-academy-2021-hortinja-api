const methods = {
    async create(req, res) {
        res.json({ msg: 'CONTROLLER CREATE'})
    },

    async list(req, res) {
        res.json({ msg: 'CONTROLLER LIST'})
    },

    async show(req, res) {
        res.json({ msg: 'CONTROLLER SHOW'})
    },

    async update(req, res){
        res.json({ msg: 'CONTROLLER UPDATE'})
    },
}

module.exports = methods
