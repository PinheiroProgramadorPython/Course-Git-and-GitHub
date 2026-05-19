document.addEventListener(("DOMContentLoaded"), () => {
    const variavel = false;
    const linkGitHub = document.createElement("a"); 
    linkGitHub.href = "https://github.com/PinheiroProgramadorPython/";
    linkGitHub.textContent = variavel ? "GitHub" :
        "https://github.com/PinheiroProgramadorPython/";
    linkGitHub.target = "_blank"
    const section = document.querySelector("section");
    section.append(linkGitHub);
    alert("Configuração do JavaScript concluída! Link adicionado.");
})
