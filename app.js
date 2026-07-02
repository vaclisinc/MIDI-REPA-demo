// Render the demo table from data.js (COLUMNS, PROMPTS, SILENT). No build step.
(function () {
  const thead = COLUMNS.map(c =>
    `<th>${c.label}<span class="met">${c.fad ? "FAD " + c.fad : "&nbsp;"}</span></th>`
  ).join("");

  const rows = PROMPTS.map((prompt, i) => {
    const cells = COLUMNS.map(c => {
      const mark = SILENT.has(`${c.id}:${i}`) ? '<span class="sil">✕ silent</span> ' : "";
      const player = `<audio controls preload="none" src="audio/${c.id}/gen_${i}.mp3"></audio>`;
      return `<td data-l="${c.mobile}">${mark}${player}</td>`;
    }).join("");
    const n = String(i + 1).padStart(2, "0");
    return `<tr><td class="p"><span class="n">${n}</span> ${prompt}</td>${cells}</tr>`;
  }).join("\n");

  document.getElementById("demo").innerHTML =
    `<thead><tr><th class="p" style="text-align:left">prompt (tag triplet)</th>${thead}</tr></thead>` +
    `<tbody>${rows}</tbody>`;
})();
