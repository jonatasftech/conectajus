const topTabs = document.querySelectorAll(".top-tab");
const subTabs = document.querySelectorAll(".sub-tab");
const topPanels = document.querySelectorAll("#loginPanel, #cadastroPanel");
const subPanels = document.querySelectorAll(".sub-panel");
const forms = document.querySelectorAll("form");
const cadastroSection = document.getElementById("cadastro");
const conformidadeSection = document.getElementById("conformidade");
const botaoConformidade = document.querySelector('a[href="#conformidade"]');
const categoriaProfissional = document.getElementById("categoriaProfissional");
const oabFields = document.querySelectorAll(".oab-field");
const oabNumero = document.getElementById("oabNumero");
const oabUf = document.getElementById("oabUf");
const crpFields = document.querySelectorAll(".crp-field");
const crpNumero = document.getElementById("crpNumero");
const crpUf = document.getElementById("crpUf");
const crmFields = document.querySelectorAll(".crm-field");
const crmNumero = document.getElementById("crmNumero");
const crmUf = document.getElementById("crmUf");

topTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    topTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });

    topPanels.forEach((panel) => panel.classList.remove("is-active"));

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    document.getElementById(targetId)?.classList.add("is-active");
    if (cadastroSection) {
      cadastroSection.classList.remove("is-hidden");
    }

    if (targetId !== "cadastroPanel") {
      subTabs.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });
      subPanels.forEach((panel) => panel.classList.remove("is-active"));
    }
  });
});

subTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    subTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });

    subPanels.forEach((panel) => panel.classList.remove("is-active"));

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    document.getElementById(targetId)?.classList.add("is-active");
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Solicitação recebida com sucesso. Nossa equipe fará a validação inicial. Enquanto isso, fique à vontade para explorar a nossa plataforma e conhecer nossos profissionais.");
    form.reset();
  });
});

const atualizarCamposRegistro = () => {
  if (!categoriaProfissional) return;

  const isAdvogado = categoriaProfissional.value === "Advogado";
  const isPsicologoJuridico = categoriaProfissional.value === "Psicólogo jurídico";
  const isMedicoLegista = categoriaProfissional.value === "Médico legista";

  oabFields.forEach((field) => field.classList.toggle("is-hidden", !isAdvogado));
  crpFields.forEach((field) => field.classList.toggle("is-hidden", !isPsicologoJuridico));
  crmFields.forEach((field) => field.classList.toggle("is-hidden", !isMedicoLegista));

  if (oabNumero) oabNumero.required = isAdvogado;
  if (oabUf) oabUf.required = isAdvogado;
  if (crpNumero) crpNumero.required = isPsicologoJuridico;
  if (crpUf) crpUf.required = isPsicologoJuridico;
  if (crmNumero) crmNumero.required = isMedicoLegista;
  if (crmUf) crmUf.required = isMedicoLegista;
};

categoriaProfissional?.addEventListener("change", atualizarCamposRegistro);
atualizarCamposRegistro();

botaoConformidade?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!conformidadeSection) return;
  const estavaOculta = conformidadeSection.classList.contains("is-hidden");
  conformidadeSection.classList.toggle("is-hidden");
  if (estavaOculta) {
    conformidadeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
