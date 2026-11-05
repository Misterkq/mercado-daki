
const imagens = [
    "assets/imagem_fundo 1.avif",
    "assets/imagem_fundo 2.avif",
    "assets/imagem_fundo 3.avif"
];

let indiceAtual = 0;

function mudarImagem() {
    const fundo = document.querySelector(".fundo");

    fundo.style.backgroundImage =
        `url("${imagens[indiceAtual]}")`;

    indiceAtual = (indiceAtual + 1) % imagens.length;
}

mudarImagem();

setInterval(mudarImagem, 5000);









document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const imagem = container?.querySelector(".imagem-fundo img");

    if (!container || !imagem) return;

    function atualizarParallax() {
        const retangulo = container.getBoundingClientRect();

        // Distância do banner em relação à tela
        const distancia = retangulo.top;

        // Intensidade do efeito
        const intensidade = 0.20;

        // Desce: fundo vai para a esquerda.
        // Sobe: fundo volta para a direita.
        const movimento = -distancia * intensidade;

        // Limite para não revelar espaços vazios
        const limite = Math.max(
            0,
            imagem.offsetWidth - container.clientWidth
        );

        const movimentoFinal = Math.max(
            -limite,
            Math.min(0, movimento)
        );

        imagem.style.transform =
            `translate3d(${movimentoFinal}px, 0, 0)`;
    }

    window.addEventListener("scroll", atualizarParallax, {
        passive: true
    });

    window.addEventListener("resize", atualizarParallax);

    atualizarParallax();
});
