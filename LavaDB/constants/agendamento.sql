DELIMITER //
CREATE PROCEDURE InserirAgendamentos() BEGIN
    INSERT INTO
        Agendamento (
            clienteId,
            automovelId,
            servicoId,
            valorTotal,
            horarioInicio,
            horarioTermino
        )
    VALUES
        (
            1,
            1,
            1,
            50.00,
            '2023-10-20 09:00:00',
            '2023-10-20 10:00:00'
        ),
        (
            1,
            1,
            2,
            75.00,
            '2023-10-21 14:00:00',
            '2023-10-21 15:30:00'
        ),
        (
            1,
            1,
            3,
            60.00,
            '2023-10-22 11:00:00',
            '2023-10-22 12:30:00'
        ),
        (
            1,
            1,
            4,
            90.00,
            '2023-10-23 15:00:00',
            '2023-10-23 16:30:00'
        );
END //
DELIMITER ;

-- Chame o procedimento InserirAgendamentos
CALL InserirAgendamentos();
