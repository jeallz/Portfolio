// HEADER
const menu = document.getElementById("menu-h");
const element = document.querySelector(".header-links");

menu.addEventListener("change", () => {
    if (menu.checked) {
        element.style.transform = "translateY(0%)";
    } else {
        element.style.transform = "translateY(-100%)";
    }
});

// TEXTO ANIMADO
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animatedText', {
        speed: 150,
        loop: true
    })
    .type('Web Full-stack ', { delay: 3000 })
    .delete(24)
    .type('Mobile Flutter ', { delay: 3000 })
    .delete(24)
    .type('Discord Bots ', { delay: 3000 })
    .delete(24)
    .go();
});

// SECTION CONHECIMENTOS
let dados = []

const titulo = document.getElementById("titulo")
const texto = document.getElementById("text")
const nivel = document.getElementById("conhecimento")

const checks = document.querySelectorAll(".tech input")

function carregarTecnologia(index){

    const tech = dados[index]

    if(!tech) return

    titulo.textContent = tech.nome
    texto.textContent = tech.descricao
    nivel.textContent = tech.nivel
}

fetch("./Src/data.json")
.then(res => res.json())
.then(data => {

    dados = data.tecnologias

    checks.forEach(check => {
        
        check.addEventListener("change", () => {

            if(!check.checked){

                const algumMarcado = document.querySelectorAll(".tech input:checked").length

                if(algumMarcado === 0){
                    check.checked = true
                    return
                }

            }

            checks.forEach(c => {
                if(c !== check) c.checked = false
            })

            const index = Number(check.dataset.tech)
            carregarTecnologia(index)

        })

    })

    const inicial = document.querySelector('.tech input:checked')

    if(inicial){
        const index = Number(inicial.dataset.tech)
        carregarTecnologia(index)
    }

})
.catch(err => {
    console.error("Erro ao carregar JSON:", err)
})

/* ----- NAVEGAÇÃO ------ */

//botões
const next1 = document.getElementById('next');
const next2 = document.getElementById('next2');
const voltar1 = document.getElementById('voltar');
const voltar_init = document.getElementById('voltar_init');

// dots
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

//divisões
const div0 = document.getElementById('div0');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

//código 

next1.addEventListener('click', () => {
    div0.classList.add('last_div2');
    div1.classList.add('next_div');

    dot1.classList.remove('active');
    dot2.classList.add('active');
});

voltar1.addEventListener('click', () => {
    div1.classList.remove('next_div');
    div0.classList.remove("last_div2");
    
    dot2.classList.remove('active');
    dot1.classList.add('active');
});

next2.addEventListener('click', () => {
    div1.classList.remove('next_div');
    div1.classList.add('last_div');
    div2.classList.add('next_div');

    dot2.classList.remove('active');
    dot3.classList.add('active');
});

voltar_init.addEventListener('click', () => {
    div2.classList.remove("next_div");

    div1.classList.remove("last_div");
    div1.classList.add("next_div");

    dot3.classList.remove("active");
    dot2.classList.add("active");
});

// NAVEGAÇÃO PROJETOS

// main
const main = document.getElementById('main');

// Banners
const projetos = document.getElementById('projetos');
const diplomas = document.getElementById('diplomas');

const projetos2 = document.getElementById('projetos2');
const diplomas2 = document.getElementById('diplomas2');

// Dots div
const dots = document.getElementById('dots');

// Botões Voltar 
const voltar_home1 = document.getElementById('voltar_home1');
const voltar_home2 = document.getElementById('voltar_home2');

// divisões
const projects_main = document.getElementById('projects_main');
 
projetos.addEventListener('click', () => {
    projects_main.classList.add('next_div2');
    dots.style.display = 'none';
    div2.classList.add("last_cont2")
});

projetos2.addEventListener('click', () => {
    if (!div0.classList.contains("last_div2")) {
        if (projects_main.classList.contains("next_div2")) {
            div0.classList.remove("last_cont2")
            projects_main.classList.remove("next_div2")
            dots.style.display = 'flex'
        } else {
            projects_main.classList.add("next_div2");
            div0.classList.add("last_cont2")
            dots.style.display = 'none'
        }
    } else if (div1.classList.contains("next_div")) {
        if (projects_main.classList.contains("next_div2")) {
            div1.classList.remove("last_cont2")
            projects_main.classList.remove("next_div2")
            dots.style.display = 'flex'
        } else {
            projects_main.classList.add("next_div2");
            div1.classList.add("last_cont2")
            dots.style.display = 'none'
        }
    } else if (div2.classList.contains("next_div")) {
        if (projects_main.classList.contains("next_div2")) {
            div2.classList.remove("last_cont2")
            projects_main.classList.remove("next_div2")
            dots.style.display = 'flex'
        } else {
            projects_main.classList.add("next_div2");
            div2.classList.add("last_cont2")
            dots.style.display = 'none'
        }
    }
});


voltar_home1.addEventListener('click', () => {
    if (!div0.classList.contains("last_div2")) {
        projects_main.classList.remove('next_div2');
        dots.style.display = 'flex';
        div0.classList.remove("last_cont2")
    } else if (div1.classList.contains("next_div")) {
        projects_main.classList.remove('next_div2');
        dots.style.display = 'flex';
        div1.classList.remove("last_cont2")
    } else if (div2.classList.contains("next_div")) {
        projects_main.classList.remove('next_div2');
        dots.style.display = 'flex';
        div2.classList.remove("last_cont2")
    }
});

diplomas.addEventListener('click', () => {
    div2.classList.add("last_cont2");
    diplomas_main.classList.add('next_div2');
    dots.style.display = 'none';
});

diplomas2.addEventListener('click', () => {
    if (!div0.classList.contains("last_div2")) {
        if (diplomas_main.classList.contains("next_div2")) {
            div0.classList.remove("last_cont2")
            diplomas_main.classList.remove("next_div2")
            dots.style.display = 'flex'
        } else {
            diplomas_main.classList.add("next_div2");
            div0.classList.add("last_cont2")
            dots.style.display = 'none'
        }
    } else if (div1.classList.contains("next_div")) {
        if (diplomas_main.classList.contains("next_div2")) {
            div1.classList.remove("last_cont2")
            diplomas_main.classList.remove("next_div2")
            dots.style.display = 'flex'
        } else {
            diplomas_main.classList.add("next_div2");
            div1.classList.add("last_cont2")
            dots.style.display = 'none'
        }
    } else if (div2.classList.contains("next_div")) {
        if (diplomas_main.classList.contains("next_div2")) {
            div2.classList.remove("last_cont2")
            diplomas_main.classList.remove("next_div2")
            dots.style.display = 'flex'
        } else {
            diplomas_main.classList.add("next_div2");
            div2.classList.add("last_cont2")
            dots.style.display = 'none'
        }
    }
});


voltar_home2.addEventListener('click', () => {
    diplomas_main.classList.remove('next_div2');
    dots.style.display = 'flex';
    div2.classList.remove("last_cont2")
});

// PROJETOS

// divisões
const nxt_div = document.getElementById('nxt-container');
const coffee_div = document.getElementById('coffee-container');
const stranger_div = document.getElementById('stranger-container');

//botões
const nxt = document.getElementById('nxt');
const coffee = document.getElementById('coffee');
const stranger = document.getElementById('stranger');
const voltar_nxt = document.getElementById('voltar-nxt');
const voltar_coffee = document.getElementById('voltar-coffee')
const voltar_stranger = document.getElementById('voltar-stranger')

//code
nxt.addEventListener('click', () => {
    projects_main.classList.add("last_cont");
    nxt_div.classList.add('next_div');
});

voltar_nxt.addEventListener('click', () => {
    projects_main.classList.remove("last_cont");
    nxt_div.classList.remove('next_div');
});

coffee.addEventListener('click', () => {
    projects_main.classList.add("last_cont");
    coffee_div.classList.add('next_div');
});

voltar_coffee.addEventListener('click', () => {
    projects_main.classList.remove("last_cont");
    coffee_div.classList.remove('next_div');
});

stranger.addEventListener('click', () => {
    projects_main.classList.add("last_cont");
    stranger_div.classList.add('next_div');
});

voltar_stranger.addEventListener('click', () => {
    projects_main.classList.remove("last_cont");
    stranger_div.classList.remove('next_div');
});

// SCROLL

let blockScroll = false;

window.addEventListener("wheel", (event) => {

    event.preventDefault();

    if (blockScroll) return;

    if (
        projects_main.classList.contains("next_div2") ||
        diplomas_main.classList.contains("next_div2") ||
        nxt_div.classList.contains("next_div") ||
        coffee_div.classList.contains("next_div") ||
        stranger_div.classList.contains("next_div")
    ) {
        return;
    }

    if (event.deltaY > 0) {

        if (!div1.classList.contains("next_div") && !div2.classList.contains("next_div")) {
            next1.click();
        } else if (div1.classList.contains("next_div") && !div2.classList.contains("next_div")) {
            next2.click();
        } else if (div2.classList.contains("next_div")) {
            return;
        }
    }
    else if (event.deltaY < 0) {
        if (div2.classList.contains("next_div")) {
            voltar_init.click();
        } else if (div1.classList.contains("next_div")) {
            voltar1.click();
        } else {
            return;
        }
    }
    
    blockScroll = true;

    setTimeout(() => {
        blockScroll = false;
    }, 800);

}, { passive: false });

//LOADING

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading")

        gsap.to("#loading", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => loading.remove()
        });

        const tl = gsap.timeline();

        tl.from(".img", {
            x: -200,
            opacity: 0,
            duration: 1
        })
        .from(".text", {
            x: 200,
            opacity: 0,
            duration: 1
        }, "-=0.7")
        .from(".conteudo", {
            y: 200,
            opacity: 0,
            duration: 1
        }, "-=0.7");

    }, 1200)
});

// canvas

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

let width;
let height;

const mouse = {
    x: null,
    y: null,
    radius: 120
};

const particles = [];

function resize() {
    const dpr = window.devicePixelRatio || 1;

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    createParticles();
}

function createParticles() {
    particles.length = 0;

    const spacing = 40;

    for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
            particles.push({
                x,
                y,
                baseX: x,
                baseY: y,
                size: Math.random() * 1.2 + 0.4,
                alpha: Math.random() * 0.5 + 0.15,
                vx: 0,
                vy: 0
            });
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const particle of particles) {
        let dx = mouse.x - particle.x;
        let dy = mouse.y - particle.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== null && distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;

            const angle = Math.atan2(dy, dx);

            particle.vx -= Math.cos(angle) * force * 0.8;
            particle.vy -= Math.sin(angle) * force * 0.8;
        }

        // Volta suavemente para a posição original
        particle.vx += (particle.baseX - particle.x) * 0.015;
        particle.vy += (particle.baseY - particle.y) * 0.015;

        // Fricção
        particle.vx *= 0.90;
        particle.vy *= 0.90;

        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;

        ctx.fill();
    }

    requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);

window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

resize();
animate();