const urlFetch = 'http://localhost:3000';
const form = document.querySelector("#agendamento");

const getAutomovelPorIdDoCliente = async (id) => {
  const response = await fetch(urlFetch + '/automovel/cliente/' + id);
  const automovel = await response.json();
  return automovel[0];
}
const getAllServicos = async () => {
  const response = await fetch(urlFetch + '/servico');
  const servicos = await response.json();
  return servicos;
}

const popularSelectServicos = async () => {
  const servicos = await getAllServicos();
  const selectServicos = document.querySelector("#servico-id");
  servicos.forEach(servico => {
    const option = document.createElement('option');
    option.value = servico.id;
    option.text = servico.nome;
    selectServicos.appendChild(option);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const automovel = await getAutomovelPorIdDoCliente(localStorage.getItem('[lavarapido-id]'));
  const clienteId = localStorage.getItem('[lavarapido-id]');
  const servicoId = document.querySelector("#servico-id");
  const valorTotal = document.querySelector("#valor-total");
  const horarioInicio = document.querySelector("#horario-inicio");
  const horarioTermino = document.querySelector("#horario-termino");

  const body = JSON.stringify({
    automovelId: automovel.id,
    servicoId: servicoId.value,
    valorTotal: valorTotal.value,
    horarioInicio: horarioInicio.value,
    horarioTermino: horarioTermino.value,
    clienteId: clienteId,
  })
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  }
  const responseCadastroAgendamento =
    await fetch(urlFetch + '/agendamento', options)
  const responseFormatada = await responseCadastroAgendamento.json()
  console.log(responseFormatada)
});

const init = async () => {
  popularSelectServicos();
  const clienteInput = document.querySelector("#cliente");
  clienteInput.value = localStorage.getItem('[lavarapido-nome]');
  const automovel = await getAutomovelPorIdDoCliente(localStorage.getItem('[lavarapido-id]'));
  const automovelInput = document.querySelector("#automovel");
  automovelInput.value = automovel.placa;
}

init()