let opcoes

for (let contador = 2021; contador >=1900; contador--) {
    opcoes += `<option>${contador}</option>`
}

let selecionar = '<option>-- Selecionar --</option>'

document.querySelector('#ano').innerHTML = selecionar + opcoes