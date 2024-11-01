function mostrarParabens() {
    const instrucoes = document.getElementById('instrucoes');
    const botao = document.querySelector('button');
    const imagem = document.getElementById('imagemParabens');
    const conteudo = document.querySelector('.content');
    const mensagemCompleta = document.getElementById('mensagemCompleta');
  
    // Alterar a mensagem para a de parabéns
    mensagemCompleta.innerHTML = `
      Parabéns! 🎉 Meu amor, hoje é seu dia, quem diria hein, essa ansiedade toda para chegar aos seus 24 aninhos kkk!<br><br>
      Eu quero te desejar tudo que existe de mais precioso nessa vida, que Deus te abençoe muito, que todos seus sonhos se realizem.
      <br><br>
      Eu também gostaria de dizer que tenho muito orgulho da pessoa que você é. Obrigado por sempre ser meu amigo, parceira, aguentar minhas doideiras e topar minhas loucuras.
      <br><br>
      Saiba que sempre estarei aqui por você. Eu te amo do fundo do meu coração. De mim, para a pessoa que me ensinou o que é o amor. ❤️
    `;
    
    // Exibir a imagem e o conteúdo
    conteudo.style.display = 'flex'; // Muda para flexível
    imagem.style.display = 'block'; // Garante que a imagem seja exibida
  
    // Esconder a mensagem de instruções e o botão
    instrucoes.style.display = 'none'; // Esconde a mensagem de instruções
    botao.style.display = 'none'; // Esconde o botão após exibir a mensagem
  }
  