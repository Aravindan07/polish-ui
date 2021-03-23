const openModalBtn = document.getElementById("open__modal");
const closeModalBtn = document.getElementById("close__modal");
const modal = document.getElementById("modal__container");
const closeSidebarBtn = document.getElementById("close-sidebar-icon");
const mobileSidebar = document.getElementById("mobile-sidebar");
const openSidebarIcon = document.getElementById("open-sidebar-icon");

openModalBtn.addEventListener("click", () => {
	modal.style.display = "flex";
	modal.style.position = "fixed";
	modal.style.top = "0";
	modal.style.bottom = "0";
	modal.style.left = "0";
	modal.style.height = "100vh";
	modal.style.width = "100%";
	modal.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
	modal.style.zIndex = "10";
});

closeModalBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

closeSidebarBtn.addEventListener("click", () => {
	mobileSidebar.style.display = "none";
});

openSidebarIcon.addEventListener("click", () => {
	mobileSidebar.style.display = "flex";
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});
