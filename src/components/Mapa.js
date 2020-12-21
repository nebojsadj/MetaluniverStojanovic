import React from "react";

function Mapa() {
  const iframe = `<iframe
    width="100%"
    height="100%"
    scrolling="yes"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.416017961842!2d20.966201215746423!3d44.62941359677406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475095d906c47a3b%3A0x4b8b4ba767e1dd64!2sMetaluniver%20Stojanovic!5e0!3m2!1ssr!2srs!4v1608556355672!5m2!1ssr!2srs"
    width="500"></iframe>`;
  return (
    <div
      className="col-8 offset-2 iframe"
      dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }}
    />
  );
}

export default Mapa;
