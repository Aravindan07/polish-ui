const openModalBtn = document.getElementById("open__modal");
const closeModalBtn = document.getElementById("close__modal");
const modal = document.getElementById("modal__container");
const closeSidebarBtn = document.getElementById("close-sidebar-icon");
const clickSidebar = document.getElementById("click-sidebar");
const openSidebarIcon = document.getElementById("open-sidebar-icon");
const x = window.matchMedia("(min-width: 900px)");

openModalBtn.addEventListener("click", () => {
	modal.style.display = "flex";
	modal.style.position = "fixed";
	modal.style.top = "0";
	modal.style.bottom = "0";
	modal.style.left = "0";
	modal.style.height = "100vh";
	modal.style.width = "100%";
	modal.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
});

closeModalBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

closeSidebarBtn.addEventListener("click", () => {
	clickSidebar.style.display = "none";
});

openSidebarIcon.addEventListener("click", () => {
	clickSidebar.style.display = "flex";
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});
