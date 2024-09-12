import React from "react";

function App() {
  return (
    <div className=" flex flex-col  justify-between min-h-screen">
      <header className="flex justify-around bg-red-600 p-2">
        <h1 className="text-white font-bold text-xl">SenaiNews</h1>
        <nav className="flex gap-6">
          <a className="text-white font-semibold" href="#">Home</a>
          <a className="text-white font-semibold" href="#">Sobre</a>
          <a className="text-white font-semibold" href="#">Contato</a>
        </nav>
      </header>
      <main className="mx-6 flex-1">
        <h2 className="mt-4">Principais noticias</h2>
        <div className="flex justify-around flex-wrap gap-5">
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80 ">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Caiu em itaquera o juiz opera!</h3>
            <p>Juventude é roubado fora de casa</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Vasco vence nos pênaltis e classifica para semifinal!</h3>
            <p>Com vitória dramática Vasco vence o Atlético Paranaense fora de casa</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-betweenitems-center rounded border-2  border-red-700 w-80">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Flamengo e Bahia lutam por vaga no Maracanã!</h3>
            <p>Flamengo venceu o primeiro jogo por 1 a 0.</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80 ">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Atlético Mineiro e São Paulo lutam por vaga na Arena MRV!</h3>
            <p>Atético Venceu o primeiro jogo por 1 a 0.</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Canal no Youtube de Cristano Ronaldo bate 60 milhões!</h3>
            <p>Cristano bate 60 milhões em tempo recorde</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80 ">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>O Brasil passa Argentina e é o país mais endividado da América!</h3>
            <p>LulaDrão</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Juiz vê erro em jogo do Corinthians e pede desculpas!</h3>
            <p>Juventude é roubado fora de casa</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-between items-center rounded border-2  border-red-700 w-80">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <h3>Palmeiras vê substituto para Estevão!</h3>
            <p>Palmeiras vai ao mercado</p>
            <a className=" bg-red-600 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
        </div>
      </main>
      <footer className="bg-red-600 p-2">
        <h2>Todos os direitos reservados - 2024</h2>
      </footer>
    </div>
  );
}

export default App;
