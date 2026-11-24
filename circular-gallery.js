
const items = [
    { image: "imagens/foto1.png", text: "Nossa primeira foto" },
    { image: "imagens/foto2.png", text: "Nossos momentos" },
    { image: "imagens/foto3.png", text: "Meu amor" }
];

const galeria = document.getElementById("galeriaCanvas");
const contexto = galeria.getContext("webgl2");

if (!contexto) {
    console.error("Seu navegador não suporta WebGL2.");
} else {
    console.log("Galeria circular preparada!");
}

const vertexShader = `#version 300 es
in vec2 aPosition;

void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const fragmentShader = `#version 300 es
precision highp float;

out vec4 cor;

void main() {
    cor = vec4(1.0, 0.2, 0.5, 1.0);
}
`;

function criarShader(tipo, codigo) {
    const shader = contexto.createShader(tipo);

    contexto.shaderSource(shader, codigo);
    contexto.compileShader(shader);

    if (!contexto.getShaderParameter(shader, contexto.COMPILE_STATUS)) {
        console.error("Erro ao criar shader:", contexto.getShaderInfoLog(shader));
        contexto.deleteShader(shader);
        return null;
    }

    return shader;
}

const vertex = criarShader(contexto.VERTEX_SHADER, vertexShader);
const fragment = criarShader(contexto.FRAGMENT_SHADER, fragmentShader);
