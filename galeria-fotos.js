const galeriaCanvas = document.getElementById("galeriaCanvas");
const ctxGaleria = galeriaCanvas.getContext("2d");

console.log("Canvas da galeria encontrado! 💗");

const fotos = [
 
    { src: "imagens/foto1.png", texto: "Nossa foto boiolinhas 💗" },
    { src: "imagens/foto2.png", texto: "A+G ❤️" },
    { src: "imagens/foto3.png", texto: "Meu amor 💕" },
    { src: "imagens/foto6.jpeg", texto: "DIVAS 💞" },
    { src: "imagens/foto7.jpeg", texto: "Para sempre nós 💗" }
];


const imagens = fotos.map((foto) => {
    const img = new Image();
    img.src = foto.src;
    img.onload = desenharGaleria;
    img.onerror = () => console.error("Não consegui carregar:", foto.src);
    return img;
});
console.log("Imagens da galeria:", imagens);
let largura = 0;
let altura = 0;
let posicao = 0;
let destino = 0;
let arrastando = false;
let inicioX = 0;
let posicaoInicial = 0;

function ajustargaleriaCanvas() {
    const escala = Math.min(window.devicePixelRatio || 1, 2);

    largura = galeriaCanvas.clientWidth;
    altura = galeriaCanvas.clientHeight;

    galeriaCanvas.width = largura * escala;
    galeriaCanvas.height = altura * escala;

    ctxGaleria.setTransform(escala, 0, 0, escala, 0, 0);
    desenharGaleria();
}

function arredondarRetangulo(x, y, w, h, raio) {
    ctxGaleria.beginPath();
    ctxGaleria.roundRect(x, y, w, h, raio);
}

function desenharFoto(img, x, y, w, h, rotacao, texto) {
    ctxGaleria.save();

    ctxGaleria.translate(x, y);
    ctxGaleria.rotate(rotacao);

    ctxGaleria.shadowColor = "rgba(0, 0, 0, 0.45)";
    ctxGaleria.shadowBlur = 25;
    ctxGaleria.shadowOffsetY = 12;

    arredondarRetangulo(-w / 2, -h / 2, w, h, 16);
    ctxGaleria.fillStyle = "#241528";
    ctxGaleria.fill();

    ctxGaleria.shadowColor = "transparent";

    if (img.complete && img.naturalWidth > 0) {
        ctxGaleria.save();

        arredondarRetangulo(-w / 2, -h / 2, w, h, 16);
        ctxGaleria.clip();

        const proporcao = Math.max(
            w / img.naturalWidth,
            h / img.naturalHeight
        );

        const dw = img.naturalWidth * proporcao;
        const dh = img.naturalHeight * proporcao;

        ctxGaleria.drawImage(
            img,
            -dw / 2,
            -dh / 2,
            dw,
            dh
        );

        ctxGaleria.restore();
    }

    ctxGaleria.fillStyle = "rgba(20, 10, 25, 0.65)";
    ctxGaleria.fillRect(-w / 2, h / 2 - 38, w, 38);

    ctxGaleria.fillStyle = "#ffffff";
    ctxGaleria.font = "16px Georgia";
    ctxGaleria.textAlign = "center";
    ctxGaleria.fillText(texto, 0, h / 2 - 13, w - 15);

    ctxGaleria.restore();
}

function desenharGaleria() {
    console.log("Desenhando galeria", largura, altura);
    if (!ctxGaleria || !largura || !altura) return;

    ctxGaleria.clearRect(0, 0, largura, altura);

    const centroX = largura / 2;
    const centroY = altura * 0.46;

    const larguraFoto = Math.min(largura * 0.34, 250);
    const alturaFoto = larguraFoto * 1.2;

    const elementos = [];

    fotos.forEach((foto, i) => {
        const total = fotos.length;
        let distancia = i - posicao;

        while (distancia > total / 2) distancia -= total;
        while (distancia < -total / 2) distancia += total;

        if (Math.abs(distancia) > 1.5) return;

        const angulo = distancia * 0.85;
        const profundidade = (Math.cos(angulo) + 1) / 2;

        elementos.push({
            imagem: imagens[i],
            texto: foto.texto,
            x: centroX + Math.sin(angulo) * largura * 0.34,
            y: centroY + (1 - profundidade) * 45,
            escala: 0.72 + profundidade * 0.28,
            rotacao: Math.sin(angulo) * 0.12,
            profundidade
        });
    });

    elementos.sort((a, b) => a.profundidade - b.profundidade);

    elementos.forEach((item) => {
        desenharFoto(
            item.imagem,
            item.x,
            item.y,
            larguraFoto * item.escala,
            alturaFoto * item.escala,
            item.rotacao,
            item.texto
        );
    });
}

galeriaCanvas.addEventListener("pointerdown", (evento) => {
    arrastando = true;
    inicioX = evento.clientX;
    posicaoInicial = destino;
    galeriaCanvas.setPointerCapture(evento.pointerId);
});

galeriaCanvas.addEventListener("pointermove", (evento) => {
    if (!arrastando) return;

    const movimento = evento.clientX - inicioX;
    destino = posicaoInicial - movimento / (largura * 0.34);
});

galeriaCanvas.addEventListener("pointerup", () => {
    arrastando = false;
    destino = Math.round(destino);
});

galeriaCanvas.addEventListener("pointercancel", () => {
    arrastando = false;
    destino = Math.round(destino);
});

galeriaCanvas.addEventListener("wheel", (evento) => {
    evento.preventDefault();
    destino += evento.deltaY > 0 ? 1 : -1;
}, { passive: false });

function animarGaleria() {
    posicao += (destino - posicao) * 0.12;

    if (Math.abs(destino - posicao) < 0.001) {
        posicao = destino;
    }

    desenharGaleria();
    requestAnimationFrame(animarGaleria);
}

window.addEventListener("resize", ajustargaleriaCanvas);

ajustargaleriaCanvas();
animarGaleria();

console.log("Galeria de fotos iniciada! 💗");
