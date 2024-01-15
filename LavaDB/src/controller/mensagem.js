const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res ) => {
    try {
        const data = req.body;
        const mensagem = await prisma.mensagem.create({
            data:data
        });
        return res.status(201).json(mensagem).end();
    } catch (error) {
        res.status(400).json({error: error.mensage}).end();
    }
}



module.exports = {
create
  }
  
  