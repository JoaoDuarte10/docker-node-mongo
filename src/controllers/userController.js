const User = require('../models/Users');

const salvar = async(req, res)=>{
    const user = new User(req.body);
    user.save()
        .then(savedUser =>res.json(savedUser))
        .catch (error => res.status(500).json(error));
};

const buscar = async(req, res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(error=>res.status(500).json(error));
};

const atualizar = async(req, res)=>{
    const novosDados = { name: req.body.name, password: req.body.password };
    User.findOneAndUpdate({_id: req.body.id}, novosDados, { new: true})
        .then(users =>res.json(users))
        .catch(error => res.status(500).json(error));
};

const deletar = async(req, res)=>{
    User.findOneAndDelete({_id: req.body.id})
        .then(users=>res.json(users))
        .catch(error=> res.status(500).json(error));
};

module.exports = {salvar, buscar, atualizar, deletar};