const CHECKOUT_URL = "https://checkout.infinitepay.io/gabrielplucas-s1z/miKft8HKJN";
const WHATSAPP_URL = "https://wa.me/5511973740613?text=Ol%C3%A1%21%20Acabei%20de%20comprar%20minha%20Mem%C3%B3ria%20Luz%20360%20e%20quero%20enviar%20minhas%204%20fotos%20para%20personaliza%C3%A7%C3%A3o.";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function App() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio">Memória Luz <span>360™</span></a>
        <nav>
          <a href="#como-funciona">Como funciona</a>
          <a href="#presente">Para presentear</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="nav-cta" href="#oferta">Criar a minha <ArrowIcon /></a>
      </header>

      <section id="inicio" className="hero">
        <img src="/hero-clean.png" alt="Memória Luz 360 acesa sobre uma mesa" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-copy reveal">
          <div className="eyebrow">PERSONALIZADA COM 4 FOTOS</div>
          <h1>Suas melhores memórias não foram feitas para ficar esquecidas na galeria.</h1>
          <p>Transforme quatro fotos especiais em uma luminária personalizada que conta a sua história em cada lado.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#oferta">Criar minha Memória Luz <ArrowIcon /></a>
            <span>Feita sob encomenda • LED quente • Presente único</span>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="Benefícios principais">
        <div><strong>4 fotos</strong><span>uma história em cada lado</span></div>
        <div><strong>Luz quente</strong><span>aconchegante e decorativa</span></div>
        <div><strong>5 a 7 dias</strong><span>prazo de produção e envio</span></div>
        <div><strong>Presente emocional</strong><span>para momentos que importam</span></div>
      </section>

      <section id="como-funciona" className="story section-pad">
        <div className="section-copy">
          <span className="section-kicker">MEMÓRIAS TRANSFORMADAS EM LUZ</span>
          <h2>Uma lembrança que muda quando a luz acende.</h2>
          <p>Durante o dia, uma peça elegante de decoração. À noite, suas fotos ganham vida com uma iluminação quente e intimista.</p>
          <div className="steps">
            <div><b>01</b><span><strong>Faça sua compra</strong>Finalize o pedido pelo checkout de forma rápida e segura.</span></div>
            <div><b>02</b><span><strong>Envie 4 fotos pelo WhatsApp</strong>Após a compra, envie as quatro imagens pelo nosso WhatsApp para iniciarmos a personalização.</span></div>
            <div><b>03</b><span><strong>Nós produzimos sua peça</strong>Sua Memória Luz é personalizada e preparada para envio em 5 a 7 dias.</span></div>
          </div>
        </div>
        <div className="media-card portrait-right">
          <img src="/public/section-product.png" alt="Memória Luz 360 com fotografias iluminadas" />
          <div className="floating-note">4 lados • 4 histórias • 1 presente inesquecível</div>
        </div>
      </section>

      <section id="presente" className="occasions section-pad">
        <div className="center-heading">
          <span className="section-kicker">UM PRESENTE QUE NÃO PARECE GENÉRICO</span>
          <h2>Feita para quem tem uma história para contar.</h2>
          <p>Casais, família, pets, aniversários e datas especiais. Você escolhe as lembranças; a Memória Luz transforma tudo em uma peça única.</p>
        </div>
        <div className="occasion-grid">
          {[
            ["♡", "Casais", "Viagens, pedidos, casamento e momentos a dois."],
            ["⌂", "Família", "Fotos que atravessam gerações e merecem ficar por perto."],
            ["✦", "Pets", "Uma forma carinhosa de eternizar quem faz parte da casa."],
            ["⌁", "Presentes", "Aniversários, Dia das Mães, Dia dos Pais e outras datas."],
          ].map(([icon, title, text]) => (
            <article key={title} className="occasion-card">
              <span className="occasion-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="details section-pad">
        <div className="details-image">
          <img src="/product-details-test.webp" alt="Detalhes da Memória Luz" />
        </div>
        <div className="details-copy">
          <span className="section-kicker">CRIADA PARA EMOCIONAR</span>
          <h2>O valor não está só na luz. Está no que ela faz você lembrar.</h2>
          <p>A Memória Luz 360 foi pensada para transformar fotos do celular em um objeto físico que participa da decoração e da rotina.</p>
          <ul>
            <li><CheckIcon /><span><strong>Personalização com 4 fotos</strong> — uma em cada face.</span></li>
            <li><CheckIcon /><span><strong>Iluminação LED quente</strong> — feita para criar clima, não estourar o ambiente.</span></li>
            <li><CheckIcon /><span><strong>Produção sob encomenda</strong> — cada peça é preparada individualmente.</span></li>
            <li><CheckIcon /><span><strong>Presente com significado</strong> — muito além de mais um item comprado de última hora.</span></li>
          </ul>
        </div>
      </section>

      <section className="quote-band">
        <p>“Algumas fotos não deveriam viver apenas na galeria do celular.”</p>
      </section>

      <section id="oferta" className="offer section-pad">
        <div className="offer-card">
          <div className="offer-copy">
            <span className="section-kicker">SUA MEMÓRIA LUZ 360™</span>
            <h2>Quatro fotos. Uma peça feita especialmente para você.</h2>
            <p>Você escolhe os momentos. Nós transformamos em uma luminária personalizada pronta para presentear ou deixar sua casa mais sua.</p>
            <div className="price"><small>por</small><strong>R$ 249,90</strong><span>+ frete</span></div>
            <div className="offer-badges">
              <span><CheckIcon /> 4 fotos personalizadas</span>
              <span><CheckIcon /> iluminação LED</span>
              <span><CheckIcon /> envio das fotos pelo WhatsApp após a compra</span>
              <span><CheckIcon /> produção e envio em 5 a 7 dias</span>
            </div>
            <a className="primary-btn big" href={CHECKOUT_URL}>Comprar agora <ArrowIcon /></a>
            <a className="whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Já comprou? Envie suas 4 fotos pelo WhatsApp →</a>
            <small className="checkout-note">Pagamento pelo checkout da InfinitePay. Após concluir a compra, envie as 4 fotos pelo WhatsApp para começarmos a personalização.</small>
          </div>
          <img src="/hero-clean.png" alt="Memória Luz 360 personalizada" />
        </div>
      </section>

      <section id="duvidas" className="faq section-pad">
        <div className="center-heading">
          <span className="section-kicker">DÚVIDAS FREQUENTES</span>
          <h2>Antes de criar a sua.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Como envio minhas 4 fotos?</summary>
            <p>Primeiro você finaliza a compra. Depois da confirmação, envie as 4 fotos pelo nosso WhatsApp para começarmos a personalização.</p>
          </details>
          <details>
            <summary>Posso escolher fotos diferentes em cada lado?</summary>
            <p>Sim. A proposta da Memória Luz 360 é usar quatro fotos, uma para cada face da luminária.</p>
          </details>
          <details>
            <summary>A luminária já vai com iluminação?</summary>
            <p>Sim. A comunicação da página considera iluminação LED quente integrada ao produto.</p>
          </details>
          <details>
            <summary>Qual é o prazo de produção e envio?</summary>
            <p>O prazo informado para produção e envio da sua Memória Luz 360 é de 5 a 7 dias.</p>
          </details>
          <details>
            <summary>Preciso enviar as fotos antes de pagar?</summary>
            <p>Não. Você conclui a compra primeiro e envia as imagens pelo WhatsApp logo depois.</p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <img src="/public/section-product.png" alt="Memória Luz 360 acesa em ambiente aconchegante" />
        <div className="final-overlay" />
        <div>
          <span className="section-kicker">NÃO DEIXE ESSA FOTO SER SÓ MAIS UMA NA GALERIA</span>
          <h2>Transforme lembranças em luz.</h2>
          <a className="primary-btn" href={CHECKOUT_URL}>Comprar minha Memória Luz <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">Memória Luz <span>360™</span></a>
        <p>Feita para iluminar histórias.</p>
        <small>© 2026 Memória Luz 360. Todos os direitos reservados.</small>
      </footer>

      <a className="mobile-sticky" href={CHECKOUT_URL}>Comprar • R$ 249,90 <ArrowIcon /></a>
    </main>
  );
}

export default App;
