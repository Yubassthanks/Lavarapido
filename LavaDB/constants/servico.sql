DELIMITER //
CREATE PROCEDURE InserirServicos()
BEGIN
    -- Atribua o valor à variável global
    SET @minha_variavel_global = 'Este é o valor da minha variável global';

    -- Inserir dados na tabela Servico
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
        
    -- Você pode usar a variável global em consultas subsequentes
    SELECT @minha_variavel_global;
END //
DELIMITER ;

CALL InserirServicos();
