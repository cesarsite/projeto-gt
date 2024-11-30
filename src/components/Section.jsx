const Section = ({ title, titleAlign = "left", children, link }) => {


  const sectionStyle = {
      display: "flex",
      justifyContent: titleAlign === "center" ? "center" : "space-between",
      alignItems: "center",
  };

  const titleStyle = {
      color: "var(--dark-gray-2)", // Cor do título
      fontSize: "24px",           // Tamanho da fonte
      textAlign: titleAlign === "center" ? "center" : "left", // Centraliza se necessário
      margin: 0,
  };

  const linkStyle = {
      color: "var(--primary)",    // Cor do link
      fontSize: "18px",           // Tamanho da fonte
      textDecoration: "none",     // Sem sublinhado
  };

  return (
      <section>
          <div style={sectionStyle}>
              <h2 style={titleStyle}>{title}</h2>
              {link && (
                  <a href={link.href} style={linkStyle}>
                      {link.text}
                  </a>
              )}
          </div>
          <div>
              {children}
          </div>
      </section>
  );
};

export default Section;
