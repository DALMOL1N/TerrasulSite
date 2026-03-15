const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
const maquinas = [
  {
    image: 'assets/bobcats.jpeg',
    alt: 'Mini escavadeira e carregadeira Bobcat',
    title: 'Mini Escavadeira e carregadeira Bobcat',
    description: 'Ideal para serviços urbanos e espaços reduzidos.',
  },
{
  image: 'assets/rompendor.jpeg',
  alt: 'Mini escavadeira rompendor',
  title: 'Mini Escavadeira com o implemento rompendor',
  description: 'Potência e eficiência para quebra de concreto e rocha, garantindo agilidade nas etapas de escavação.',
},
{
  image: 'assets/johndeere.jpeg',
  alt: 'Escavadeira John Deere',
  title: 'Escavadeira John Deere',
  description: 'Versatilidade para escavação, carregamento e apoio em obra e lavoura.',
},
{
  image: 'assets/caminhao.jpeg',
  alt: 'Caminhão basculante',
  title: 'Caminhão Basculante',
  description: 'Transporte eficiente de terra, brita e entulho.',
},
{
  image: 'assets/cat.jpeg',
  alt: 'Escavadeira Caterpillar 316',
  title: 'Escavadeira Caterpillar 316',
  description: 'Desempenho, precisão e eficiência para escavações, abertura de valas e movimentação de materiais em obras urbanas e terraplenagem.',
},
{
  image: 'assets/trator.jpeg',
  alt: 'Trator Esteira komatsu D51',
  title: ' Trator Esteira komatsu D51',
  description: 'Estabilidade para cortes, aterros e preparação de terrenos em obras e áreas rurais.',
},
{
  image: 'assets/cx.jpeg',
  alt: 'Caixa Tele-Entulho',
  title: 'Caixa Tele-entulho',
  description: 'Solução prática e eficiente para coleta, transporte e descarte adequado de entulho em obras e reformas.',
},
  {
   image: 'assets/prancha.jpeg',
    alt: 'Prancha volvo',
    title: 'Prancha: Volvo ',
    description: 'Realizamos transporte de equipamentos próprios e de terceiros com segurança, pontualidade e total responsabilidade.',
  },
  {
   image: 'assets/toneladas.jpeg',
    alt: 'Medicao de maquinas',
    title: 'Nossas máquinas são classificadas por tonelagem operacional',
    description: 'A tonelagem da máquina define sua capacidade, potência e aplicação ideal em cada tipo de obra.',
  },
];

const imageEl = document.querySelector('[data-maquina-image]');
const titleEl = document.querySelector('[data-maquina-title]');
const descriptionEl = document.querySelector('[data-maquina-description]');
const counterEl = document.querySelector('[data-maquina-counter]');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');

let maquinaAtual = 0;

const renderMaquina = () => {
  if (!imageEl || !titleEl || !descriptionEl || !counterEl) {
    return;
  }

  const item = maquinas[maquinaAtual];
  imageEl.src = item.image;
  imageEl.alt = item.alt;
  titleEl.textContent = item.title;
  descriptionEl.textContent = item.description;
  counterEl.textContent = `${maquinaAtual + 1} / ${maquinas.length}`;
};

renderMaquina();

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    maquinaAtual = (maquinaAtual - 1 + maquinas.length) % maquinas.length;
    renderMaquina();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    maquinaAtual = (maquinaAtual + 1) % maquinas.length;
    renderMaquina();
  });
}

document.addEventListener('keydown', (e) => {
  const active = document.activeElement;
  const tag = active && active.tagName && active.tagName.toLowerCase();
  const isEditable = active && (active.isContentEditable || tag === 'input' || tag === 'textarea' || tag === 'select');
  if (isEditable) return; 

  if (e.key === 'ArrowLeft') {
    maquinaAtual = (maquinaAtual - 1 + maquinas.length) % maquinas.length;
    renderMaquina();
  } else if (e.key === 'ArrowRight') {
    maquinaAtual = (maquinaAtual + 1) % maquinas.length;
    renderMaquina();
  }
});
