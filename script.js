
// ================================
// BOTÃO ABRIR PRESENTE
// ================================

function abrirPresente() {
    const calendario = document.getElementById("secaoCartinhas");

    if (!calendario) {
        console.error("Não encontrei a seção do calendário!");
        return;
    }

    calendario.style.display = "block";

    calendario.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ================================
// CALENDÁRIO DE CARTINHAS
// ================================
const cartas = {
    "calendarioNovembro-3": `Hoje, dia 3 de novembro, já me preparando pra te dar feliz aniversário — um pouco apressada, eu sei.

Mas é um dia especial. Seu aniversário é o dia em que deram à luz a mulher que me fez acreditar em um recomeço, em recomeçar a viver e levar cada minuto da vida a sério.

57 dias pro seu dia!!`,

    "calendarioNovembro-4": `Estamos passando a madrugada juntas, assistindo a AHS. E, a cada momento que compartilho com você, tenho ainda mais certeza de que nada seria tão especial se não fosse ao seu lado.

Agradeço, mais uma vez, por este dia e, principalmente, por você ter nascido. Por existir e ser essa pessoa tão maravilhosa, tão incrível e tão única.

56 dias pro seu dia!!`,

    "calendarioNovembro-5": `Hoje estou longe do meu amor, e estamos conversando por ligação sobre o quanto é difícil ficar longe depois de passar a semana juntinhas. Acho que é isso que deixa tudo ainda mais especial: a saudade.

Eu amo falar sobre saudade. A gente fala que está com saudade até quando estamos deitadas juntas, uma olhando pra outra. É engraçado pensar que, mesmo estando tão perto, ainda sentimos falta, como se nunca fosse suficiente o tempo que temos juntas.

E acho que é uma das coisas mais bonitas entre nós: sentir saudade até quando não existe distância, porque, no fim, a gente sempre quer mais um pouquinho uma da outra.

55 dias pro seu dia!!`,

    "calendarioNovembro-6": `Já cronometrei tudo pra que todos os dias, quando der 00:00, eu possa escrever pra você. A saudade tá me matando, mal vejo a hora de estar com você de novo.

Outra madrugada em que me pego pensando em como melhorar esse texto e em como vai ser o próximo verso. Não quero que nenhum deles pareça raso, porque meu amor por você é mais fundo que qualquer oceano. Quero que cada palavra consiga transmitir pelo menos um pouquinho de tudo que sinto por você, mesmo sabendo que nunca vai ser suficiente.

É engraçado como eu sempre acho que já escrevi tudo, mas chega outro dia e encontro mais mil coisas que quero dizer. Parece que nunca vão existir palavras suficientes pra descrever o quanto eu te amo.

Eu te amo, meu amorzinho.

54 dias pro seu dia!!`,

    "calendarioNovembro-7": `Uhuuuu! Hoje a gente se viu na quase inauguração lá do meu tio. Juro que queria ter aproveitado muito mais o tempo com você. Acho que a saudade que eu sinto é, principalmente, de ficar agarradinha, sem precisar me desgrudar de você nunca mais.

Sempre que lembro que chega a hora de ir pra casa, já começo a morrer de saudade. É estranho como até depois de te ver, de te beijar e de ficar juntinha com você, parece que ainda falta alguma coisa. Minha vida agora só tem você, 24 horas por dia, e não consigo pensar em outra coisa.

Passei boa parte do dia fazendo a blusa do Che Guevara pra você. Várias partes deram errado, ainda não consegui terminar e tem muita coisa pela frente, mas quero muito que fique pronta. Acho que até nas pequenas coisas gosto de colocar um pouquinho de mim pra você.

Enfim, mais um dia em que tudo acaba me levando até você. Eu te amo, meu amorzinho.

53 dias pro seu dia!!`,

    "calendarioNovembro-8": `Estamos juntinhas, finalmente matando a saudade. Não tem muito o que dizer sobre hoje, acho que só estar com você já explica muita coisa.

Chorei horrores em você, acho que de tanto te amar que chega a doer. O meu amor pela sua pessoa é inexplicável. O jeito que você mexe com meu coração de uma forma que nem eu sei explicar, o jeito que tudo parece mais leve e silencioso quando estou com você.

Acordar do seu lado sempre tem um gostinho de paz. Gosto do silêncio, da tranquilidade e de simplesmente ter você ali, pertinho de mim. Não preciso de muita coisa quando tenho esses momentos com você.

Eu amo você, meu amorzinho. Mais do que qualquer verso que eu consiga escrever.

52 dias pro seu dia!!`,

    "calendarioNovembro-10": `Hoje de novo com saudades não aguento mais essa palavra nada explica essa sensação parece que nossas almas viraram uma só não tem pra onde fugir o único lugar que pertenço agora é você.

saudade do seu cheiro, do seu abraço, do seu toque, seu jeito, sua risada, seu cabelo, seus olhos me olhando, sua cara de sono e me acordando com um bom dia.
Eu te amo leãozinho

Simplesmente saudades.

51 dias pro seu dia!!`,

    "calendarioNovembro-11": `Acabei esquecendo de escrever! A gente passou o dia na praia juntas. Você já estava quase me mandando embora porque eu queria caçar tatuzinhos. A gente ficou igual a duas sereias lindas brincando nas ondas. Tomei um pouquinho de água salgada, mas passei bem KKKKK.
Eu te amo muito! Obrigada por existir, sereia.

50 dias pro seu dia!`,

    "calendarioNovembro-12": `Passamos a madrugada juntas, dormindo agarradinhas. Acordei toda travada, mas pelo menos estava com você KKKKK. Depois, vim pra casa morrendo de cólica. Ficamos o dia sem nos falar, então aproveitei para colocar minhas séries em dia. E já vou avisando: vou te obrigar a assistir!

ESTOU COM SAUDADES, MEU AMOR!

49 dias pro seu dia!!`,

 "calendarioNovembro-16": `Acabei esquecendo de escrever os dias que a gente passou juntas. Não mexo no celular quando estou com você, então foi difícil. Eu ainda estou com você vendo “You”, mas você me lembrou que eu estou escrevendo. Você tá linda olhando pra série e mais linda ainda quando tá olhando pra mim. Eu te amo com todas as forças que existem. Eu te amo, só amo, sem conseguir explicar.`,

"calendarioNovembro-22": `Resumindo, perdi os dias de escrever de novo. Estávamos esses dias juntas, então eu acho bem melhor aproveitar do que anotar tudo.

Eu te amo com todas as forças do mundo!!`,

"calendarioNovembro-23": `Pra compensar os dias que eu não escrevi, meu amor, eu fiz esse site… Óbvio que eu não fiz sozinha, pedi auxílio pro nosso amigo (ChatGPT). Ele deu uma força, mas eu só mandei códigos e tals pra ele ver se tava certinho. Cada parte foi pensada com muito amor. Eu comecei era umas 23:00h, agora são 09:11 e eu tô escrevendo ainda pra mais tarde colocar aqui no site. Meu amor por você não para um minuto, ele vive trabalhando por você, meu amor. Eu te amo demais.`
};
function criarCalendario(id, inicio, fim) {
    const calendario = document.getElementById(id);

    if (!calendario) {
        console.error("Não encontrei o calendário:", id);
        return;
    }

    calendario.innerHTML = "";

    for (let dia = inicio; dia <= fim; dia++) {
       const chave = `${id}-${dia}`;

if (!cartas[chave]) continue;

        const botao = document.createElement("button");

        botao.className = "dia-cartinha";
        botao.innerHTML = `${dia}<br>♡`;

        botao.addEventListener("click", () => {
            const janela = document.getElementById("janelaCartinha");

            janela.classList.add("aberta");
console.log("Tentou abrir a cartinha");
            document.getElementById("tituloCartinha").textContent =
                `Cartinha do dia ${dia} ❤️`;

            document.getElementById("dataCartinha").textContent =
                `${dia} de ${id === "calendarioNovembro" ? "novembro" : "dezembro"}`;
 


const texto = document.getElementById("textoCartinha");

texto.textContent = cartas[chave] || "Ainda estou preparando essa cartinha... ❤️";


               
        });

        calendario.appendChild(botao);
    }
}


// ================================
// CRIAR OS DOIS MESES
// ================================

document.addEventListener("DOMContentLoaded", () => {
    criarCalendario("calendarioNovembro", 3, 30);
    criarCalendario("calendarioDezembro", 1, 30);
}); 
function fecharCartinha() {
    const janela = document.getElementById("janelaCartinha");
    janela.classList.remove("aberta");
}
document.addEventListener("DOMContentLoaded", () => {
    const galaxia = document.querySelector(".luzes-galaxia");
const estrelas = document.querySelector(".ceu-estrelado");
const poeira = document.querySelector(".poeira-galaxia");
    if (!galaxia) return;

    document.addEventListener("pointermove", (evento) => {
        const x = (evento.clientX / window.innerWidth) * 100;
        const y = (evento.clientY / window.innerHeight) * 100;

        galaxia.style.setProperty("--mouse-x", `${x}%`);
        galaxia.style.setProperty("--mouse-y", `${y}%`);
        estrelas.style.transform = `translate(${(x - 50) * -0.15}px, ${(y - 50) * -0.15}px)`;
        poeira.style.transform = `translate(${(x - 50) * -0.3}px, ${(y - 50) * -0.3}px)`;
    });
});// ================================
// PLAYLIST DE MÚSICAS
// ================================

const playlist = [
    {
        arquivo: "10. BAGUNÇA.mp3",
        nome: "Bagunça",
        artista: "Carol Biazin"
    },
    {
        arquivo: "equalize.mp3",
        nome: "Equalize",
        artista: "Pitty"
    },
    {
        arquivo: "expectations.mp3",
        nome: "Expectations",
        artista: "Olivia rodrigo(feat. Chappell Roan"
    },
    {
        arquivo: "We Fell In Love In October.mp3",
        nome: "We Fell in Love in October",
        artista: "girl in red"
    },
    {
        arquivo: "picture you.mp3",
        nome: "Picture You",
        artista: "Chappell Roan"
    },
    {
        arquivo: "preciso dizer que te amo.mp3",
        nome: "Preciso Dizer Que Te Amo",
        artista: "Cazuza e Bebel"
    }
];

let musicaAtual = 0;
const audio = document.getElementById("audioMusica");
const nomeMusica = document.getElementById("nomeMusica");
const artistaMusica = document.getElementById("artistaMusica");
const itensPlaylist = document.getElementById("itensPlaylist");

playlist.forEach((musica, indice) => {
    const item = document.createElement("button");

  item.innerHTML = `
    <span>${indice + 1}. ${musica.nome}</span>
    <span class="equalizador">
        <i></i>
        <i></i>
        <i></i>
    </span>
`;

    item.addEventListener("click", () => {
        carregarMusica(indice);
        audio.play();

        document.getElementById("botaoPlay").textContent = "⏸";
    });

    itensPlaylist.appendChild(item);
});


function carregarMusica(indice) {
    musicaAtual = (indice + playlist.length) % playlist.length;

    audio.src = "musicas/" + playlist[musicaAtual].arquivo;

    nomeMusica.textContent = playlist[musicaAtual].nome;
    artistaMusica.textContent = playlist[musicaAtual].artista;
    document.querySelectorAll("#itensPlaylist button").forEach((botao, indice) => {
    botao.classList.toggle("musica-selecionada", indice === musicaAtual);
});
document.querySelectorAll("#itensPlaylist button").forEach((botao, indice) => {
    botao.classList.toggle("musica-selecionada", indice === musicaAtual);
});
    audio.load();
}document.getElementById("botaoPlay").addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        document.getElementById("botaoPlay").textContent = "⏸";
    } else {
        audio.pause();
        document.getElementById("botaoPlay").textContent = "▶";
    }
});document.getElementById("proximaMusica").addEventListener("click", () => {
    carregarMusica(musicaAtual + 1);
    audio.play();
    document.getElementById("botaoPlay").textContent = "⏸";
});

document.getElementById("musicaAnterior").addEventListener("click", () => {
    carregarMusica(musicaAtual - 1);
    audio.play();
    document.getElementById("botaoPlay").textContent = "⏸";
});audio.addEventListener("ended", () => {
    carregarMusica(musicaAtual + 1);
    audio.play();
});// ================================
// TEMPO E BARRINHA DA MÚSICA
// ================================

const tempoMusica = document.getElementById("tempoMusica");
const progresso = document.getElementById("progresso");

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const restantes = Math.floor(segundos % 60);

    return `${minutos}:${String(restantes).padStart(2, "0")}`;
}audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    progresso.value = (audio.currentTime / audio.duration) * 100;
    tempoMusica.textContent = formatarTempo(audio.currentTime);
});

progresso.addEventListener("input", () => {
    if (!audio.duration) return;

    audio.currentTime = (progresso.value / 100) * audio.duration;
});// SISTEMA DE SENHA

const senhaCorreta = "1510";

document.getElementById("botaoEntrar").addEventListener("click", verificarSenha);

document.getElementById("senhaEntrada").addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        verificarSenha();
    }
});

function verificarSenha() {
    const senhaDigitada = document.getElementById("senhaEntrada").value;
    const mensagem = document.getElementById("mensagemSenha");

    if (senhaDigitada === senhaCorreta) {
        somDesbloqueio();
       document.getElementById("telaSenha").classList.add("saindo");
    } else {
        somErroSenha();
        mensagem.textContent = "Ops! Essa não é a nossa data. Tente novamente! 💗";
    }
}// SONS DA TELA DE SENHA

let audioSenha = null;

function obterAudioSenha() {
    if (!audioSenha) {
        audioSenha = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioSenha.state === "suspended") {
        audioSenha.resume();
    }

    return audioSenha;
}

// Som de digitação
function somTeclaSenha() {
    const contexto = obterAudioSenha();
    const agora = contexto.currentTime;

    const ruido = contexto.createBufferSource();
    const buffer = contexto.createBuffer(
        1,
        contexto.sampleRate * 0.04,
        contexto.sampleRate
    );

    const dados = buffer.getChannelData(0);

    for (let i = 0; i < dados.length; i++) {
        dados[i] = (Math.random() * 2 - 1) * (1 - i / dados.length);
    }

    ruido.buffer = buffer;

    const filtro = contexto.createBiquadFilter();
    filtro.type = "highpass";
    filtro.frequency.value = 1200;

    const volume = contexto.createGain();
    volume.gain.setValueAtTime(0.18, agora);
    volume.gain.exponentialRampToValueAtTime(0.001, agora + 0.04);

    ruido.connect(filtro);
    filtro.connect(volume);
    volume.connect(contexto.destination);

    ruido.start(agora);
}

// Som de desbloqueio
function somDesbloqueio() {
    const contexto = obterAudioSenha();
    const agora = contexto.currentTime;

    // Som de abertura
    const oscilador = contexto.createOscillator();
    const volume = contexto.createGain();

    oscilador.type = "sine";

    oscilador.frequency.setValueAtTime(250, agora);
    oscilador.frequency.exponentialRampToValueAtTime(700, agora + 0.5);
    oscilador.frequency.exponentialRampToValueAtTime(1100, agora + 0.9);

    volume.gain.setValueAtTime(0.001, agora);
    volume.gain.linearRampToValueAtTime(0.16, agora + 0.15);
    volume.gain.exponentialRampToValueAtTime(0.001, agora + 1.2);

    oscilador.connect(volume);
    volume.connect(contexto.destination);

    oscilador.start(agora);
    oscilador.stop(agora + 1.2);
}

document.getElementById("senhaEntrada").addEventListener("input", () => {
    somTeclaSenha();
});// SOM DE SENHA INCORRETA

function somErroSenha() {
    const contexto = obterAudioSenha();
    const agora = contexto.currentTime;

    const oscilador = contexto.createOscillator();
    const volume = contexto.createGain();

    oscilador.type = "triangle";

    oscilador.frequency.setValueAtTime(220, agora);
    oscilador.frequency.exponentialRampToValueAtTime(110, agora + 0.25);

    volume.gain.setValueAtTime(0.15, agora);
    volume.gain.exponentialRampToValueAtTime(0.001, agora + 0.3);

    oscilador.connect(volume);
    volume.connect(contexto.destination);

    oscilador.start(agora);
    oscilador.stop(agora + 0.3);
}const mensagensCarinho = [
    "Você é meu lugar favorito no mundo. 💗",
    "──୨ৎ──Se eu pudesse escolher de novo, escolheria você.──୨ৎ──",
    "Espero que seu dia fique tão lindo quanto seu sorriso.(˶>⩊<˶)",
    "Queria te dar um abraço bem apertado agora.𑣲𝓂𝒾 𝒶𝓂ℴ𝓇.",
    "Nunca se esqueça do quanto você é especial para mim.ℒ𝓸𝓿𝒆 𝔂𝓸𝓾 ᥫ᭡",
    "Meu carinho por você não cabe em palavras. ♡",
    "Você deixa meus dias mais bonitos.⋆˚꩜｡",
    "Eu amo cada pedacinho de quem você é.-`𖹭´-"
];

const botaoCarinho = document.getElementById("botaoCarinho");
const mensagemAleatoria = document.getElementById("mensagemAleatoria");

if (botaoCarinho && mensagemAleatoria) {
    botaoCarinho.addEventListener("click", () => {
        const indice = Math.floor(Math.random() * mensagensCarinho.length);
        mensagemAleatoria.textContent = mensagensCarinho[indice];
    });
}
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

const floatParticles = [];
const burstParticles = [];
const FLOAT_COUNT = 140;
const BURST_COUNT = 45;

const particleColors = [
    "#ff1744",
    "#ff4568",
    "#ff8fab",
    "#a855f7",
    "#9333ea",
    "#6b21a8"
];

let width = 0;
let height = 0;
let pixelRatio = 1;

function resizeCanvas() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

class Particle {
    constructor(x, y, type = "float") {
        this.x = x;
        this.y = y;
        this.type = type;

        this.color = particleColors[
            Math.floor(Math.random() * particleColors.length)
        ];

        this.size = type === "float"
            ? 1 + Math.random() * 3
            : 3 + Math.random() * 4;

        this.maxLife = type === "float"
            ? 260 + Math.random() * 260
            : 55 + Math.random() * 35;

        this.life = this.maxLife;
        this.opacity = 0.35 + Math.random() * 0.65;

        if (type === "float") {
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = -(0.25 + Math.random() * 0.75);
        } else {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.2 + Math.random() * 4.2;

            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
        }
    }

    update() {
        this.life--;

        if (this.type === "float") {
            this.x += this.vx + Math.sin(this.life * 0.025) * 0.25;
            this.y += this.vy;

            if (this.y < -12) {
                this.y = height + 12;
                this.x = Math.random() * width;
            }

            if (this.x < -12) this.x = width + 12;
            if (this.x > width + 12) this.x = -12;

        } else {
            this.x += this.vx;
            this.y += this.vy;

            this.vx *= 0.975;
            this.vy *= 0.975;
        }
    }

    draw() {
        const fade = this.type === "float"
            ? Math.min(1, this.life / 45)
            : Math.max(0, this.life / this.maxLife);

        ctx.save();

        ctx.globalAlpha = this.opacity * fade;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.type === "float" ? 10 : 16;

        if (this.type === "burst") {
            drawHeart(this.x, this.y, this.size);
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}

function drawHeart(x, y, size) {
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(size / 16, size / 16);

    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.bezierCurveTo(-18, -7, -10, -19, 0, -9);
    ctx.bezierCurveTo(10, -19, 18, -7, 0, 5);
    ctx.fill();

    ctx.restore();
}

function spawnHeartBurst(x, y) {
    for (let i = 0; i < BURST_COUNT; i++) {
        burstParticles.push(new Particle(x, y, "burst"));
    }
}

function createFloatParticles() {
    for (let i = 0; i < FLOAT_COUNT; i++) {
        const particle = new Particle(
            Math.random() * width,
            Math.random() * height,
            "float"
        );

        particle.life = Math.random() * particle.maxLife;
        floatParticles.push(particle);
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const particle of floatParticles) {
        particle.update();
        particle.draw();
    }

    for (let i = burstParticles.length - 1; i >= 0; i--) {
        const particle = burstParticles[i];

        particle.update();
        particle.draw();

        if (particle.life <= 0) {
            burstParticles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener("pointerdown", (event) => {
    spawnHeartBurst(event.clientX, event.clientY);
});

window.addEventListener("resize", () => {
    resizeCanvas();
    floatParticles.length = 0;
    createFloatParticles();
});

resizeCanvas();
createFloatParticles();
animate();
// ==================================
// LIQUID ETHER - CONFIGURAÇÃO
// ==================================

const liquidContainer = document.getElementById("liquidEther");

const liquidCanvas = document.createElement("canvas");
liquidCanvas.className = "liquid-ether__canvas";

liquidContainer.appendChild(liquidCanvas);

const liquidGL = liquidCanvas.getContext("webgl2", {
    alpha: true,
    antialias: false
});

if (!liquidGL) {
    console.error("WebGL2 não está disponível neste navegador.");
}// ==================================
// CORES DO LIQUID ETHER
// ==================================

const liquidColors = [
    [1.0, 0.03, 0.12],  // Vermelho
    [0.65, 0.02, 0.85], // Roxo
    [0.95, 0.12, 0.45]  // Rosa avermelhado
];

let liquidMouse = {
    x: 0.5,
    y: 0.5,
    active: false
};

window.addEventListener("pointermove", (event) => {
    liquidMouse.x = event.clientX / window.innerWidth;
    liquidMouse.y = 1 - event.clientY / window.innerHeight;
    liquidMouse.active = true;
});

window.addEventListener("pointerleave", () => {
    liquidMouse.active = false;
});// ==================================
// LIQUID ETHER - SHADERS
// ==================================

const liquidVertexShader = `#version 300 es
in vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const liquidFragmentShader = `#version 300 es
precision highp float;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform float mouseActive;

out vec4 fragColor;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv - 0.5;

    float t = time * 0.25;

    float wave1 = sin(p.x * 7.0 + t) * cos(p.y * 6.0 - t);
    float wave2 = sin(p.y * 9.0 - t * 1.4) * cos(p.x * 5.0 + t);

    float distanceMouse = distance(uv, mouse);
    float influence = exp(-distanceMouse * 5.0) * mouseActive;

    float wave = wave1 + wave2 + influence * 2.0;

    float red = exp(-abs(wave - 0.2) * 2.5);
    float purple = exp(-abs(wave + 0.5) * 2.5);
    float pink = exp(-abs(wave - 0.9) * 3.0);

    vec3 color = vec3(0.0);
    color += vec3(1.0, 0.02, 0.12) * red;
    color += vec3(0.55, 0.02, 0.9) * purple;
    color += vec3(1.0, 0.08, 0.4) * pink;

    float alpha = clamp(( purple + pink  ) * 0.22, 0.0, 0.65);

    fragColor = vec4(color, alpha);
}
`;



let liquidProgram = null;

function criarShader(tipo, codigo) {
    const shader = liquidGL.createShader(tipo);

    liquidGL.shaderSource(shader, codigo);
    liquidGL.compileShader(shader);

    if (!liquidGL.getShaderParameter(shader, liquidGL.COMPILE_STATUS)) {
        console.error("Erro no shader:", liquidGL.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

if (liquidGL) {
    const vertexShader = criarShader(liquidGL.VERTEX_SHADER, liquidVertexShader);
    const fragmentShader = criarShader(liquidGL.FRAGMENT_SHADER, liquidFragmentShader);

    if (vertexShader && fragmentShader) {
        liquidProgram = liquidGL.createProgram();

        liquidGL.attachShader(liquidProgram, vertexShader);
        liquidGL.attachShader(liquidProgram, fragmentShader);
        liquidGL.linkProgram(liquidProgram);

        if (!liquidGL.getProgramParameter(liquidProgram, liquidGL.LINK_STATUS)) {
            console.error("Erro ao conectar:", liquidGL.getProgramInfoLog(liquidProgram));
            liquidProgram = null;
        } else {
            console.log("Liquid Ether conectado!");
        }
    }
}

if (liquidGL && liquidProgram) {
    const vertices = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
    ]);

    const liquidBuffer = liquidGL.createBuffer();

    liquidGL.bindBuffer(liquidGL.ARRAY_BUFFER, liquidBuffer);
    liquidGL.bufferData(liquidGL.ARRAY_BUFFER, vertices, liquidGL.STATIC_DRAW);

    liquidGL.useProgram(liquidProgram);

    const positionLocation = liquidGL.getAttribLocation(liquidProgram, "position");

    liquidGL.enableVertexAttribArray(positionLocation);
    liquidGL.vertexAttribPointer(positionLocation, 2, liquidGL.FLOAT, false, 0, 0);

    const resolutionLocation = liquidGL.getUniformLocation(liquidProgram, "resolution");
    const mouseLocation = liquidGL.getUniformLocation(liquidProgram, "mouse");
    const timeLocation = liquidGL.getUniformLocation(liquidProgram, "time");
    const activeLocation = liquidGL.getUniformLocation(liquidProgram, "mouseActive");

    function animarLiquidEther(tempo) {
        const escala = Math.min(window.devicePixelRatio || 1, 2);
        const largura = escala * window.innerWidth;
        const altura = escala * window.innerHeight;

        if (liquidCanvas.width !== largura || liquidCanvas.height !== altura) {
            liquidCanvas.width = largura;
            liquidCanvas.height = altura;
        }

        liquidGL.viewport(0, 0, liquidCanvas.width, liquidCanvas.height);
        liquidGL.clearColor(0, 0, 0, 0);
        liquidGL.clear(liquidGL.COLOR_BUFFER_BIT);

        liquidGL.uniform2f(resolutionLocation, liquidCanvas.width, liquidCanvas.height);
        liquidGL.uniform2f(mouseLocation, liquidMouse.x, liquidMouse.y);
        liquidGL.uniform1f(timeLocation, tempo * 0.001);
        liquidGL.uniform1f(activeLocation, liquidMouse.active ? 1 : 0);

        liquidGL.drawArrays(liquidGL.TRIANGLES, 0, 6);

        requestAnimationFrame(animarLiquidEther);
    }

    requestAnimationFrame(animarLiquidEther);
}


const controleAmor = document.getElementById("volumeMusica");
const valorAmor = document.getElementById("valorAmor");
const mensagemAmor = document.getElementById("mensagemAmor");
const audioAmor = document.getElementById("audioMusica");

let playlistIniciadaPeloAmor = false;

if (controleAmor && audioAmor) {
    audioAmor.volume = 0;
    controleAmor.value = 0;
    valorAmor.textContent = "0%";

    controleAmor.addEventListener("input", async function () {
        const valor = Number(this.value);

        valorAmor.textContent = valor + "%";
        audioAmor.volume = valor / 100;

        if (valor === 100) {
            mensagemAmor.textContent = "Eu sabia que era tudo isso! 💗";
        } else if (valor === 67) {
            mensagemAmor.textContent = "67 ⁶🤷⁷KKKKK";
        } else if (valor >= 70) {
            mensagemAmor.textContent = "Ainda me ama bastante, né? 🥺";
        } else if (valor >= 40) {
            mensagemAmor.textContent = "Opa... tá acontecendo alguma coisa? 😭";
        } else if (valor > 0) {
            mensagemAmor.textContent = "Só isso de amor??? KKKKK";
        } else {
            mensagemAmor.textContent = "COMO ASSIM ZERO??? 😭";
        }

        if (valor > 0 && !playlistIniciadaPeloAmor) {
            playlistIniciadaPeloAmor = true;

            try {
                await audioAmor.play();
            } catch (erro) {
                playlistIniciadaPeloAmor = false;
                mensagemAmor.textContent =
                    "Toque no botão de play para começar a música 💗";
            }
        }
    });
}
