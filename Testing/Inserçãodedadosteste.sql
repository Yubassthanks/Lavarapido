INSERT INTO
    cliente (nome, endereco, telefone, email, senha, placa)
VALUES
    (
        'Zé da Manga',
        'Rua das mangas',
        '(11)99955-9944',
        'zemanga@email.com',
        'manga123',
        'MAG-4765'
    ),
    (
        'test1',
        'Rua testando, 11',
        '(11)99546-1530',
        'teste@email.com',
        'teste123',
        'AXX-5627'
    ),
    (
        'test2',
        'Rua testando, 11',
        '(11)99546-3015',
        'testes@email.com',
        'teste123',
        'AXS-5555'
    ),
    (
        'João da Silva',
        'Rua A, 123',
        '(11) 1234-5678',
        'joao@email.com',
        'senha123',
        'ABC-1234'
    ),
    (
        'Maria Santos',
        'Av. B, 456',
        '(22) 9876-5432',
        'maria@email.com',
        'senha456',
        'XYZ-9876'
    ),
    (
        'Pedro Oliveira',
        'Rua C, 789',
        '(33) 5678-1234',
        'pedro@email.com',
        'senha789',
        'DEF-5678'
    );

    INSERT INTO
    Cliente (
        id,
        nome,
        endereco,
        telefone,
        email,
        senha,
        placa
    )
VALUES
    (
    
        'Zé da Manga',
        'Rua dos testes',
        '(11)95648-5462',
        'teste@gmail.com',
        '$2a$10$k/yU5aHJRtdcxYwJ5I6cWOcgtesIV7cGOn1jYHubHFRLbkUjs5KE6',
        'MAA-4765'
    );

INSERT INTO
    Servico (nome, descricao, preco)
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
    ('Troca de Óleo', 'Troca de óleo do motor', 40.00),
    (
        'Manutenção de Rodas',
        'Alinhamento e Balanceamento de rodas do veículo',
        60.00
    );
INSERT INTO
    Agendamento (
        clienteId,
        servicoId,
        formaPagamentoId,
        valorTotal,
        horarioInicio,
        horarioTermino
    )
VALUES
    (
        1,
        2,
        3,
        100.50,
        '2023-10-05 14:00:00.000',
        '2023-10-05 15:30:00.000'
    );