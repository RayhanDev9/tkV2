const headerLogic = () => {
  const navbar = document.querySelector("header");
  const navTop = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navTop) {
      navbar.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "w-full",
        "backdrop-blur-sm",
        // "bg-wihite",
        "shadow-lg",
      );
    } else {
      navbar.classList.remove(
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "backdrop-blur-sm",
        "bg-primary",
        "shadow-lg",
      );
      console.info("ok");
    }
  });
};
headerLogic();

const humbergerLogic = () => {
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("menu-close");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    toggle.setAttribute("aria-expanded", "true");
  });

  menu.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      toggle.setAttribute("aria-expanded", "false");
      console.info('ok')
    });
  });

  close.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    toggle.setAttribute("aria-expanded", "false");
  });
};

humbergerLogic();

const aboutLogic = () => {
  const aboutStatusChildEl = [
    ...document.querySelectorAll(".about-status > div"),
  ];

  setInterval(() => {
    aboutStatusChildEl.forEach((child) => {
      const isHidden = child.classList.contains("hidden");

      if (isHidden) {
        child.classList.remove("hidden");
        child.classList.add("opacity-100");
        child.classList.remove("opacity-0");

        console.info(true);
      }
      if (!isHidden) {
        child.classList.add("hidden");
        child.classList.add("opacity-0");
        child.classList.remove("opacity-100");

        console.info(false);
      }
    });
  }, 2500);
};

aboutLogic();

const programLogic = () => {
  const cardProgram = document.querySelectorAll(".card-program");

  cardProgram.forEach((card) => {
    card.addEventListener("click", () => {
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");
      console.info(card);

      const isOpen = !p.classList.contains("hidden");

      // tutup semua
      cardProgram.forEach((item) => {
        const itemH3 = item.querySelector("h3");
        const itemP = item.querySelector("p");

        itemP.classList.add("hidden");
        itemP.classList.remove("opacity-100");
        itemP.classList.add("opacity-0");
      });

      // buka card yang diklik
      if (!isOpen) {
        p.classList.remove("hidden");
        p.classList.remove("opacity-0");
        p.classList.add("opacity-100");
      }
    });
  });
};

programLogic();

const faqLogic = () => {
  const faqItem = document.querySelectorAll(".faq-item");

  faqItem.forEach((item) => {
    item.addEventListener("click", () => {
      const pHiddden = item.querySelector("article > p");
      const svg = item.querySelector("img");

      const isOpen = pHiddden.classList.contains("hidden");

      if (isOpen) {
        pHiddden.classList.remove("hidden");
        pHiddden.classList.remove("opacity-0");
        svg.classList.add("rotate-180");
      } else {
        pHiddden.classList.add("hidden");
        pHiddden.classList.add("opacity-0");
        svg.classList.remove("rotate-180");
      }
    });
  });
};

faqLogic();

const animasiLogic = () => {
  const track = document.querySelector(".track");

  let x = 0;

  function animate() {
    x -= 0.5; // kecepatan

    if (Math.abs(x) >= track.scrollWidth / 2) {
      x = 0;
    }

    track.style.transform = `translateX(${x}px)`;

    requestAnimationFrame(animate);
  }

  animate();
};

animasiLogic();
