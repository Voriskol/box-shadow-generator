function generateCSS() {
  let inset = document.getElementById("inside").checked;
  inset = inset ? "inset " : "";

  let translateX = document.getElementById("translateX").value;

  let translateY = document.getElementById("translateY").value;

  let blur = document.getElementById("blur").value;

  let stretch = document.getElementById("stretching").value;

  let color = document.getElementById("color").value;
  let colorR = color.slice(1, 3);
  let colorG = color.slice(3, 5);
  let colorB = color.slice(5, 7);

  let opacity = document.getElementById("opacity").value;

  let blockColor = document.getElementById("colorBlock").value;

  let resultCode = `${translateX}px ${translateY}px ${blur}px ${stretch}px
  rgba(${parseInt(colorR, 16)}, ${parseInt(colorG, 16)}, ${parseInt(
    colorB,
    16
  )}, ${opacity}) ${inset}`;
  resultCSS.innerHTML = `
  box-shadow: ${resultCode};
  `;

  let example = document.querySelector(".result");
  example.style.boxShadow = resultCode;
  example.style.background = blockColor;
}
generateCSS();

addEventListener("input", generateCSS);
addEventListener("change", generateCSS);
