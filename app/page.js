// Import <Image />
import Image from "next/image";

export default function Home() {
  const navBarItems = [
    "Sobre nós",
    "Soluções",
    "Ferramentas",
    "Carreiras",
    "Blog",
    "Semana de dados",
    "Contato",
  ];

  return (
    <div sx={{ height: "100vh", width: "100vw" }}>
      <div style={{ marginRight: "10rem", marginLeft: "10rem" }}>
        <header
          style={{
            display: "flex",
            height: "110px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image src="bix.png" height={54} width={200} style={{}} />
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: "auto",
            }}
          >
            {navBarItems.map((item) => (
              <li key={item} style={{ paddingLeft: "35px", fontSize: "1rem" }}>{item}</li>
            ))}
          </ul>
        </header>
      </div>

      <div
        style={{
          display: "flex",
          height: "548px",
          width: "100%",
          background: "linear-gradient(112.1deg, #000 11.4%, #33323d 70.2%)",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "45%",
            padding: "2rem",
            marginRight: "10rem",
            marginLeft: "10rem",
          }}
        >
          <p
            style={{
              color: "#fff",
              marginTop: "4rem",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            O RESULTADO QUE SUA ORGANIZAÇÃO MERECE COM TECNOLOGIA DE PONTA
          </p>
          <p style={{ color: "#fff", fontSize: "51px", fontWeight: 600 }}>
            Garanta o crescimento da sua empresa por meio dos dados!
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#fff" }}>
            Oferecemos soluções em Engenharia de Dados, Business Intelligence,
            Ciência de Dados e Desenvolvimento de Sistemas.
          </p>
          <button
            style={{
              background: "#3B49EE",
              color: "#fff",
              border: "none",
              padding: "1rem",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Entre em contato!
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            // width={382}
            // height={400}
            src="BIX_TECH_ILUSTRA_3-q5kvhfl87emskcy8254uaq2l9y3srdcoueifgwcwlc.png"
            style={{ marginRight: "10rem" }}
          />
        </div>
      </div>
      <div
        style={{
          background: "#0033CC",
          height: "412px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="BIX_TECH_ILUSTRA_5.png" height={400} width={452} />
        <div style={{ width: "450px" }}>
          <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: 700 }}>
            O que seus dados têm a dizer?
          </h2>
          {/* <p style={{ color: "#fff" }}>
            A <strong>Análise de Dados</strong> é essencial para uma
            <br />
            empresa<strong> conquistar resultados melhores</strong>. Quem aposta
            em uma <b>cultura data-driven</b> está{" "}
            <strong>melhor posicionada no mercado</strong> e alcançando seus
            objetivos.
            <br />
            <br />
            Pelos vários setores da economia, os clientes da{" "}
            <strong>BIX Tecnologia</strong> já conquistaram diversos frutos
            devido aos <strong>insights da Análise de Dados</strong>, como
            diminuição de custos, processos mais rápidos e eficientes e aumento
            nos lucros da organização. 
          </p> */}
        </div>
      </div>
    </div>
    // </main>
  );
}
