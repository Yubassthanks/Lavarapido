const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function Horarios(req, res) {
  try {
    const today = new Date();
    const startHour = 9; // Hora de início (9:00 AM)
    const endHour = 17; // Hora de término (5:00 PM)

    // Loop para criar horários de hora em hora
    for (let hour = startHour; hour <= endHour; hour++) {
      const data = new Date(today);
      data.setHours(hour, 0, 0, 0); // Define a data com a hora atual do loop

      await prisma.disponibilidade.create({
        data: data,
        horaIni: data, // Defina a hora de início como a própria data
        horaFim: data,
      });
    }

    res.status(201).json({ message: 'Horários comerciais inseridos com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao inserir os horários comerciais.' });
  }
}

module.exports = {
  Horarios,
};

