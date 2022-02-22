var jogadorEscolha = 0;
	var jogadorPoontuacao = 0;
	var computadorPoontuacao = 0;
	var computadorEscolha = 0;
	var ganhador = -1;
	var justifica = 0;
	var nomeJogador;


function iniciar() {
	do{
	nomeJogador = window.prompt("Digite seu nome:", "");
	} while (nomeJogador == null || nomeJogador == "")
	window.alert ("Seu nome é "+nomeJogador);
	document.getElementById("jogador-nome").innerHTML = nomeJogador;
}
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

	function jogar(escolha){
		jogadorEscolha = escolha;

		computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

	if((jogadorEscolha == 1) && (computadorEscolha == 1)) {
		ganhador = 0;
	}

	else if((jogadorEscolha == 1) && (computadorEscolha == 2)) {
		ganhador = 2;
		justifica = 1;
	}

	else if((jogadorEscolha == 1) && (computadorEscolha == 3)) {
		ganhador = 1;
		justifica = 2;
	}

	else if((jogadorEscolha == 2) && (computadorEscolha == 1)) {
		ganhador = 1;
		justifica = 1;
	}

	else if((jogadorEscolha == 2) && (computadorEscolha == 2)) {
		ganhador = 0;
	}

	else if((jogadorEscolha == 2) && (computadorEscolha == 3)) {
		ganhador = 2;
		justifica = 3;
	}

	else if((jogadorEscolha == 3) && (computadorEscolha == 1)) {
		ganhador = 2;
		justifica = 2;
	}

	else if((jogadorEscolha == 3) && (computadorEscolha == 2)) {
		ganhador = 1;
		justifica = 3;
	}

	else if((jogadorEscolha == 3) && (computadorEscolha == 3)) {
		ganhador = 0;
	}

	document.getElementById("jogador-escolha-1").classList.remove('selecionado');
	document.getElementById("jogador-escolha-2").classList.remove('selecionado');
	document.getElementById("jogador-escolha-3").classList.remove('selecionado');
	document.getElementById("computador-escolha-1").classList.remove('selecionado');
	document.getElementById("computador-escolha-2").classList.remove('selecionado');
	document.getElementById("computador-escolha-3").classList.remove('selecionado');



	document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');

	document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');


    if(ganhador == 0) {
	document.getElementById('mensagens').innerHTML = 'Empate';
	}
    else if(ganhador == 1) {
	document.getElementById('mensagens').innerHTML = 'VOCÊ GANHOU!!';
		jogadorPoontuacao++;
	}
	else if(ganhador == 2) {
	document.getElementById('mensagens').innerHTML = 'Computador Ganhou!';
		computadorPoontuacao++;
	}

	if(justifica == 1) {
document.getElementById('mensagens2').innerHTML = 'Papel embrulha a Pedra';
}
	else if(justifica == 2) {
document.getElementById('mensagens2').innerHTML = 'Pedra amassa a Tesoura';
}
else if(justifica == 3) {
document.getElementById('mensagens2').innerHTML = 'Tesoura corta a Papel';
}

	document.getElementById('jogador-pontos').innerHTML = jogadorPoontuacao;

	document.getElementById('computador-pontos').innerHTML = computadorPoontuacao;

	}
