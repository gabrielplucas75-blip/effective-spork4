const CHECKOUT_URL = "https://checkout.infinitepay.io/gabrielplucas-s1z/miKft8HKJN";
const WHATSAPP_URL = "https://wa.me/5511973740613?text=Ol%C3%A1%21%20Acabei%20de%20comprar%20minha%20Mem%C3%B3ria%20Luz%20360%20e%20quero%20enviar%20minhas%204%20fotos%20para%20personaliza%C3%A7%C3%A3o.";
const CONTACT_URL = "https://wa.me/5511973740613?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Mem%C3%B3ria%20Luz%20360%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.";

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
      <style>{`
        .hero-mobile-offer { display: none; }
        .trust-proof { padding-top: 20px; padding-bottom: 115px; }
        .trust-proof .center-heading { margin-bottom: 38px; }
        .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .trust-card { padding: 26px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(145deg, rgba(255,255,255,.035), rgba(255,255,255,.012)); }
        .trust-card .trust-icon { display: grid; place-items: center; width: 42px; height: 42px; margin-bottom: 26px; border-radius: 50%; border: 1px solid rgba(232,160,84,.28); color: #e8a054; font-size: 1rem; }
        .trust-card h3 { margin: 0 0 9px; font-family: 'Playfair Display', serif; font-size: 1.55rem; font-weight: 500; letter-spacing: -.025em; }
        .trust-card p { margin: 0; color: var(--muted); font-size: .9rem; line-height: 1.6; }
        .trust-note { max-width: 760px; margin: 26px auto 0; text-align: center; color: rgba(245,231,210,.52); font-size: .78rem; line-height: 1.55; }

        @media (max-width: 980px) {
          .trust-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .hero { min-height: 100svh; }
          .hero-image { object-position: 29% center; }
          .hero-shade { background: linear-gradient(180deg, rgba(5,3,2,.06) 0%, rgba(5,3,2,.18) 28%, rgba(5,3,2,.72) 55%, #080604 82%, #080604 100%); }
          .hero-copy { width: calc(100% - 30px); padding: 0 0 86px; }
          .eyebrow { padding: 7px 10px; border: 1px solid rgba(240,194,141,.2); border-radius: 999px; background: rgba(15,10,7,.38); backdrop-filter: blur(8px); font-size: .62rem; letter-spacing: .14em; }
          .hero h1 { max-width: 100%; margin: 14px 0 14px; font-size: clamp(2.75rem, 12.5vw, 4.15rem); line-height: .92; }
          .hero-copy > p { max-width: 94%; font-size: .93rem; line-height: 1.5; }
          .hero-actions { width: 100%; margin-top: 20px; gap: 9px; }
          .hero-actions .primary-btn { width: 100%; min-height: 54px; }
          .hero-actions > span { display: none; }
          .hero-mobile-offer { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; margin-top: 10px; padding: 12px 14px; border: 1px solid rgba(255,255,255,.12); border-radius: 16px; background: rgba(12,9,7,.56); backdrop-filter: blur(14px); }
          .hero-mobile-offer > div { display: flex; flex-direction: column; gap: 2px; }
          .hero-mobile-offer small { color: #e8a054; font-size: .62rem; font-weight: 700; letter-spacing: .1em; }
          .hero-mobile-offer strong { font-family: 'Playfair Display', serif; font-size: 1.35rem; font-weight: 500; }
          .hero-mobile-offer span { color: rgba(255,255,255,.58); font-size: .68rem; text-align: right; line-height: 1.35; }
          .trust-proof { width: calc(100% - 32px); padding-top: 20px; padding-bottom: 82px; }
          .trust-proof .center-heading { margin-bottom: 28px; }
          .trust-proof .center-heading h2 { font-size: clamp(2.65rem, 12vw, 3.7rem); }
          .trust-card { padding: 22px; }
          .trust-card .trust-icon { margin-bottom: 20px; }
          .trust-note { margin-top: 20px; padding: 0 8px; }
        }
      `}</style>

      <header className="topbar">
        <a className="brand" href="#inicio">Memória Luz <span>360™</span></a>
        <nav>
          <a href="#como-funciona">Como funciona</a>
          <a href="#presente">Para presentear</a>
          <a href="#duvidas">Dúvidas</a>
          <a href={CONTACT_URL} target="_blank" rel="noreferrer">Fale conosco</a>
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
          <div className="hero-mobile-offer">
            <div>
              <small>10% OFF NO PIX</small>
              <strong>R$ 224,91</strong>
            </div>
            <span>ou até 12x de<br /><strong style={{ fontFamily: "inherit", fontSize: "inherit", fontWeight: 600 }}>R$ 24,99</strong></span>
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

      <section className="trust-proof section-pad" aria-label="Confiança na compra">
        <div className="center-heading">
          <span className="section-kicker">COMPRA SIMPLES, PROCESSO CLARO</span>
          <h2>Você sabe exatamente o que acontece depois do clique.</h2>
          <p>Sem inventar depoimentos: enquanto as primeiras avaliações reais chegam, destacamos o que já é concreto na experiência de compra.</p>
        </div>
        <div className="trust-grid">
          <article className="trust-card">
            <div className="trust-icon">✓</div>
            <h3>Checkout seguro</h3>
            <p>O pagamento é concluído pelo checkout da InfinitePay, com Pix e cartão disponíveis.</p>
          </article>
          <article className="trust-card">
            <div className="trust-icon">↗</div>
            <h3>Atendimento direto</h3>
            <p>Depois da compra, você envia as 4 fotos e fala diretamente conosco pelo WhatsApp.</p>
          </article>
          <article className="trust-card">
            <div className="trust-icon">✦</div>
            <h3>Feita sob encomenda</h3>
            <p>Cada peça é personalizada individualmente, com produção e envio em 5 a 7 dias.</p>
          </article>
        </div>
        <p className="trust-note">Quando você tiver avaliações reais de clientes, substituímos esta área por depoimentos com nome, foto e imagem da peça — sem usar avaliações fictícias.</p>
      </section>

      <section id="oferta" className="offer section-pad">
        <div className="offer-card">
          <div className="offer-copy">
            <span className="section-kicker">SUA MEMÓRIA LUZ 360™</span>
            <h2>Quatro fotos. Uma peça feita especialmente para você.</h2>
            <p>Você escolhe os momentos. Nós transformamos em uma luminária personalizada pronta para presentear ou deixar sua casa mais sua.</p>
            <div style={{ marginTop: "18px", marginBottom: "8px", color: "#f0c28d", fontWeight: 700, letterSpacing: ".08em", fontSize: ".78rem" }}>10% OFF NO PIX</div>
            <div className="price" style={{ margin: "0 0 8px" }}><small>por</small><strong>R$ 224,91</strong><span>no Pix</span></div>
            <p style={{ margin: "0 0 6px", color: "rgba(255,255,255,.58)", fontSize: ".95rem" }}>Preço normal: <strong style={{ color: "rgba(255,255,255,.78)", fontWeight: 500 }}>R$ 249,90 + frete</strong></p>
            <p style={{ margin: "0 0 24px", color: "rgba(255,255,255,.68)" }}>ou até 12x de <strong style={{ color: "#fff", fontWeight: 600 }}>R$ 24,99</strong> no cartão*</p>
            <div className="offer-badges">
              <span><CheckIcon /> 4 fotos personalizadas</span>
              <span><CheckIcon /> iluminação LED</span>
              <span><CheckIcon /> envio das fotos pelo WhatsApp após a compra</span>
              <span><CheckIcon /> produção e envio em 5 a 7 dias</span>
            </div>
            <a className="primary-btn big" href={CHECKOUT_URL}>Comprar agora <ArrowIcon /></a>
            <a className="whatsapp-link" href={CONTACT_URL} target="_blank" rel="noreferrer">Fale conosco pelo WhatsApp →</a>
            <a className="whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Já comprou? Envie suas 4 fotos pelo WhatsApp →</a>
            <small className="checkout-note">*Parcelamento com acréscimos da operadora. Pagamento pelo checkout da InfinitePay. Após concluir a compra, envie as 4 fotos pelo WhatsApp para começarmos a personalização.</small>
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
          <a className="whatsapp-link" href={CONTACT_URL} target="_blank" rel="noreferrer">Fale conosco pelo WhatsApp →</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">Memória Luz <span>360™</span></a>
        <p><a href={CONTACT_URL} target="_blank" rel="noreferrer">Fale conosco pelo WhatsApp</a></p>
        <small>© 2026 Memória Luz 360. Todos os direitos reservados.</small>
      </footer>

      <a className="mobile-sticky" href={CHECKOUT_URL}>Comprar agora • R$ 224,91 no Pix <ArrowIcon /></a>
    </main>
  );
}

export default App;
