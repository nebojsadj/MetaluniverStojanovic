import React from "react";

function Mapa() {
  const iframe = `<iframe
    width="100%"
    height="100%"
    scrolling="no"
    src="https://maps.google.com?saddr=Radomira Jankovica 10, 11311 Radinac&z=12&output=embed"
    width="500"
  ></iframe>
  `;
  return (
    <div
      className="col-8 offset-2 iframe"
      dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }}
    />
  );
}

export default Mapa;
