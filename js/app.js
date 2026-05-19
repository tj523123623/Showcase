(function () {
  "use strict";

  const DATA_URL = "resources/student_projects_showcase.json";
  const state = {
    projects: [],
    category: "all",
    query: ""
  };

  const refs = {
    categoryTabs: document.getElementById("category-tabs"),
    projectGrid: document.getElementById("project-grid"),
    projectCount: document.getElementById("project-count"),
    projectsTitle: document.getElementById("projects-title"),
    emptyState: document.getElementById("empty-state"),
    resetFilters: document.getElementById("reset-filters"),
    searchInput: document.getElementById("search-input")
  };

  init();

  async function init() {
    bindEvents();
    state.projects = await loadProjects();
    buildCategoryTabs();
    render();
  }

  function bindEvents() {
    refs.categoryTabs.addEventListener("click", function (event) {
      const button = event.target.closest("[data-category]");
      if (!button) return;

      state.category = button.dataset.category;
      setActiveCategory();
      render();
    });

    refs.searchInput.addEventListener("input", function () {
      state.query = refs.searchInput.value.trim().toLowerCase();
      render();
    });

    refs.resetFilters.addEventListener("click", function () {
      state.category = "all";
      state.query = "";
      refs.searchInput.value = "";
      setActiveCategory();
      render();
    });
  }

  async function loadProjects() {
    const embedded = getEmbeddedProjects();

    if (location.protocol !== "file:") {
      try {
        const response = await fetch(DATA_URL, { cache: "no-store" });
        if (response.ok) {
          const payload = await response.json();
          const projects = normalise(payload);
          if (projects.length) return projects;
        }
      } catch (_) {
        // Fall back to the generated local data script for direct file opening.
      }
    }

    return embedded;
  }

  function getEmbeddedProjects() {
    return normalise(window.STUDENT_PROJECTS_SHOWCASE || { projects: [] });
  }

  function normalise(payload) {
    const source = Array.isArray(payload) ? payload : (payload.projects || []);

    return source.map(function (item, index) {
      const students = toStringArray(item.students);
      const techStack = toStringArray(item.techStack);
      const project = {
        id: item.id || index + 1,
        title: clean(item.projectTitle || item.title || "Untitled Project"),
        category: clean(item.category || "General"),
        teamName: clean(item.teamName || "Student Team"),
        year: clean(item.year || ""),
        semester: clean(item.semester || ""),
        teamYear: clean(item.teamYear || ""),
        students: students,
        techStack: techStack,
        shortDescription: clean(item.shortDescription || item.description || ""),
        fullDescription: clean(item.fullDescription || item.shortDescription || item.description || "")
      };

      project.searchText = [
        project.title,
        project.category,
        project.teamName,
        project.year,
        project.semester,
        project.teamYear,
        project.shortDescription,
        project.fullDescription,
        students.join(" "),
        techStack.join(" ")
      ].join(" ").toLowerCase();

      return project;
    });
  }

  function buildCategoryTabs() {
    refs.categoryTabs.innerHTML = "";
    refs.categoryTabs.appendChild(makeCategoryTab("all", "All Projects"));

    unique(state.projects.map(function (project) { return project.category; }))
      .sort(function (a, b) { return a.localeCompare(b); })
      .forEach(function (category) {
        refs.categoryTabs.appendChild(makeCategoryTab(category, category));
      });
  }

  function makeCategoryTab(value, label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-tab";
    button.dataset.category = value;
    button.textContent = label;
    button.setAttribute("aria-pressed", "false");
    if (value === state.category) {
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    }
    return button;
  }

  function setActiveCategory() {
    refs.categoryTabs.querySelectorAll(".category-tab").forEach(function (button) {
      const active = button.dataset.category === state.category;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function render() {
    const visible = filteredProjects();
    const fragment = document.createDocumentFragment();

    visible.forEach(function (project) {
      fragment.appendChild(buildProjectCard(project));
    });

    refs.projectGrid.innerHTML = "";
    refs.projectGrid.appendChild(fragment);
    refs.projectCount.textContent = visible.length === 1 ? "1 project" : visible.length + " projects";
    refs.projectsTitle.textContent = state.category === "all" ? "All Projects" : state.category + " Projects";
    refs.emptyState.classList.toggle("hidden", visible.length > 0);
  }

  function filteredProjects() {
    return state.projects.filter(function (project) {
      const matchesCategory = state.category === "all" || project.category === state.category;
      const matchesQuery = !state.query || project.searchText.includes(state.query);
      return matchesCategory && matchesQuery;
    });
  }

  function buildProjectCard(project) {
    const article = el("article", "project-card");
    const header = el("div", "card-header");
    const titleRow = el("div", "card-title-row");
    const title = el("h3", "card-title");
    const badge = el("span", "category-badge");
    const meta = el("p", "card-meta");
    const body = el("div", "card-body");

    title.textContent = project.title;
    badge.textContent = project.category;
    meta.textContent = [project.teamName, project.teamYear, project.semester, project.year]
      .filter(Boolean)
      .join(" | ");

    titleRow.append(title, badge);
    header.append(titleRow, meta);
    body.appendChild(descriptionBlock(project));

    if (project.students.length) {
      body.appendChild(membersBlock(project.students));
    }

    if (project.techStack.length) {
      body.appendChild(techBlock(project.techStack));
    }

    article.append(header, body);
    return article;
  }

  function descriptionBlock(project) {
    const section = el("section", "description-box");
    const label = el("h4", "card-label");
    const text = el("p");

    label.textContent = "Description";
    text.textContent = project.fullDescription || project.shortDescription || "No description provided.";
    section.append(label, text);
    return section;
  }

  function membersBlock(students) {
    const section = el("section", "card-section");
    const label = el("h4", "card-label");
    const list = el("ul", "member-list");

    label.textContent = "Team Members";
    students.forEach(function (student) {
      const item = document.createElement("li");
      item.textContent = student;
      list.appendChild(item);
    });

    section.append(label, list);
    return section;
  }

  function techBlock(techStack) {
    const section = el("section", "card-section");
    const label = el("h4", "card-label");
    const list = el("div", "tech-list");

    label.textContent = "Tech Stack";
    techStack.forEach(function (tech) {
      const chip = el("span", "tech-chip");
      chip.textContent = tech;
      list.appendChild(chip);
    });

    section.append(label, list);
    return section;
  }

  function clean(value) {
    return String(value == null ? "" : value).trim();
  }

  function toStringArray(value) {
    return Array.isArray(value) ? value.map(clean).filter(Boolean) : [];
  }

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean)));
  }

  function el(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
  }
})();
