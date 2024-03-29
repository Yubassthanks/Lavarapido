const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const servico = await prisma.servico.create({
            data: data
        });
        return res.status(201).json(servico).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const servico = await prisma.servico.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(servico);
        }else{
            const servico = await prisma.servico.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(servico);
        }
    } else {
        const servico = await prisma.servico.findMany();
        return res.json(servico);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        let servico = await prisma.servico.update({
            data: data,
            where: {
                id: parseInt(id)
            }
        });
        res.status(202).json(servico).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let servico = await prisma.servico.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(servico).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    create,
    update,
    del
};