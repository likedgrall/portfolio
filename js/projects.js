const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const navContacts = document.querySelector(".nav__contacts");
const modal = document.querySelector(".project-modal");
const openModalButtons = document.querySelectorAll(".js-open-modal");
const closeModalButtons = document.querySelectorAll(".js-close-modal");
const filterButtons = document.querySelectorAll(".projects__filter[data-filter]");
const projectCards = document.querySelectorAll(".project__item[data-category]");
const modalTitle = document.querySelector("#projectModalTitle");
const modalHeadline = document.querySelector(".project-modal__field strong");
const modalSectionTexts = document.querySelectorAll(".project-modal__section p");

if (hamburger && navLinks && navContacts) {
  function closeMenu() {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav__links_active");
    navContacts.classList.remove("nav__contacts_active");
    body.classList.remove("scroll-none");
  }

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const logoLink = document.querySelector("#logoLink");
  if (logoLink) {
    logoLink.addEventListener("click", closeMenu);
  }

  hamburger.addEventListener("click", function () {
    this.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navContacts.classList.toggle("nav__contacts_active");
    body.classList.toggle("scroll-none");
  });
}

if (modal && openModalButtons.length) {
  function setModalContent(project) {
    if (!project) {
      return;
    }

    if (modalTitle) {
      modalTitle.textContent = project.modal.title;
    }

    if (modalHeadline) {
      modalHeadline.textContent = project.title;
    }

    const sections = [
      project.modal.task,
      project.modal.solution,
      project.modal.result,
    ];

    modalSectionTexts.forEach((node, index) => {
      node.textContent = sections[index] || "Сюда текст надо";
    });
  }

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("scroll-none");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".nav__links.nav__links_active")) {
      body.classList.remove("scroll-none");
    }
  }

  openModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const projectId = button.dataset.projectId;
      const project = window.ProjectStore?.getProjectById(projectId);
      setModalContent(project);
      openModal();
    });
  });
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

if (filterButtons.length && projectCards.length) {
  const updateProjects = (filter) => {
    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentFilter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      updateProjects(currentFilter);
    });
  });

  updateProjects("all");
}
