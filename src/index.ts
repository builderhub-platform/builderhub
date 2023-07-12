import { intro, outro, spinner } from "@clack/prompts";
import color from "picocolors";

const s = spinner();

intro(color.bgCyan(`builderhub`));
s.start("initializing...");
setTimeout(() => {
  s.stop("done...");
  outro(`Builderhub Platform Dev. TEAM!`);
}, 1000);
