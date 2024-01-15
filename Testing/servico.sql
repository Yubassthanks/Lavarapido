-- Crie um procedimento armazenado para inserir dados na tabela Servico
DELIMITER //
CREATE PROCEDURE InserirServicos()
BEGIN
    INSERT INTO Servico (nome, descricao, preco)
    VALUES
        (
            'Lavagem Simples',
            'Lavagem externa do veículo',
            30.00
        ),
        (
            'Polimento',
            'Polimento da pintura do veículo',
            50.00
        ),
        (
            'Troca de Óleo',
            'Troca de óleo do motor',
            40.00
        ),
        (
            'Manutenção de Rodas',
            'Alinhamento e Balanceamento de rodas do veículo',
            60.00
        );
END //
DELIMITER ;
