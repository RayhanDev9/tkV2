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
        "backdrop-blur-sm",
        "shadow-lg",
      );
    } else {
      navbar.classList.remove(
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "backdrop-blur-sm",
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
      console.info("ok");
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

  let cnt = 2;
  setInterval(() => {
    aboutStatusChildEl.forEach((child) => {
      const isHidden = child.classList.contains("hidden");
      if (!isHidden) {
        child.classList.add("hidden");
        child.classList.add("opacity-0");
        child.classList.remove("opacity-100");
      }

      const id = Number(child.dataset.idAbout);

      if (cnt === id) {
        if (isHidden) {
          child.classList.remove("hidden");
          child.classList.add("opacity-100");
          child.classList.remove("opacity-0");

          console.info(true);
        }
      }
    });
    cnt = cnt === aboutStatusChildEl.length ? 1 : cnt + 1;
  }, 2550);
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
  const data = [
    {
      question: "Berapa usia minimal untuk masuk ?",
      answer: "Usia minimal 4 tahun pada awal tahun ajaran baru.",
    },
    {
      question: "Apa saja syarat pendaftaran ?",
      answer:
        "Usia anak minimal 4 tahun pada awal tahun ajaran baru, fotokopi akta kelahiran, kartu keluarga, KTP ayah ibu.",
    },
    {
      question: "Berapa biaya pendaftaran dan uang sekolah ?",
      answer:
        "Biaya awal masuk sebesar Rp 470.000, yang sudah mencakup seragam batik, seragam olahraga, busana muslim/muslimah, pensil warna, dan buku gambar. Adapun SPP bulanan sebesar Rp 60.000.",
    },
    {
      question: "Apa kurikulum yang digunakan ?",
      answer:
        "Kurikulum TK Permata mengacu pada Standar Nasional Pendidikan Kementerian Pendidikan dan Kebudayaan serta disesuaikan dengan perkembangan zaman dan kebutuhan peserta didik.",
    },
    {
      question: "Jam belajar dimulai dan berakhir pukul berapa ?",
      answer: "Kegiatan belajar mengajar dimulai pukul 07.45 hingga 10.20 WIB.",
    },
    {
      question:
        "Bagaimana jika anak belum mandiri atau masih sering menangis ?",
      answer:
        "Guru akan membantu proses adaptasi anak secara bertahap agar merasa nyaman di lingkungan sekolah.",
    },
    {
      question: "Apakah ada pembelajaran mengaji dan hafalan doa ?",
      answer:
        "Ya, anak akan dikenalkan doa harian, surat-surat pendek, serta nilai-nilai Islami sesuai usia mereka.",
    },
  ];

  function loopingFaq() {
    const containerFaq = document.querySelector(".container-faq");

    data.forEach((item) => {
      const html = `<article
            class="border-t-[1px] border-b-[1px] border-teal-700 py-2 px-1 transition-all duration-300 faq-item reveal"
          >
            <div class="flex justify-between">
              <p class="text-base md:text-lg reveal-paraghrap"> ${item.question} </p>
              <img
                src="asset/svg/chevron-down-svgrepo-com.svg"
                alt=""
                class="w-3 h-3 block self-center transition-all duration-300"
              />
            </div>
            <p
              class="text-base md:text-lg hidden opacity-0 transition-all duration-300 reveal-paraghrap"
            >
              ${item.answer}
            </p>
          </article>`;

      containerFaq.insertAdjacentHTML("beforeend", html);
    });
  }

  loopingFaq();

  function toggleFaq() {
    const faqItem = document.querySelectorAll(".faq-item");
    let lastClickedItem;
    let clickCount = 1;
    faqItem.forEach((item) => {
      item.addEventListener("click", function (e) {
        faqItem.forEach((item) => {
          const pHiddden = item.querySelector("article > p");
          const svg = item.querySelector("img");

          const isOpen = pHiddden.classList.contains("hidden");

          if (!isOpen) {
            pHiddden.classList.add("hidden");
            pHiddden.classList.add("opacity-0");
            svg.classList.remove("rotate-180");
          }
        });

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

        if (lastClickedItem === this && !(clickCount === 2)) {
          pHiddden.classList.add("hidden");
          pHiddden.classList.add("opacity-0");
          svg.classList.remove("rotate-180");
          clickCount += 1;
        } else {
          lastClickedItem = this;
          clickCount = 1;
        }
      });
    });
  }

  toggleFaq();
};

faqLogic();

const contactLogic = () => {
  function sendMessage() {
    const inputTextEl = document.querySelector(
      '#contact-form input[type="text"]',
    );
    const inputGmailEl = document.querySelector(
      '#contact-form input[type="email"]',
    );
    const inputNoTlpEl = document.querySelector(
      '#contact-form input[type="tel"]',
    );
    const textAreaEl = document.querySelector("#contact-form textarea");
    const btnSendEl = document.querySelector("#contact-form button");

    btnSendEl.addEventListener("click", () => {
      const message = `
Nama   : ${inputTextEl.value}
Gmail  : ${inputGmailEl.value}
No Tlp : ${inputNoTlpEl.value}

Pesan  : ${textAreaEl.value}
      `;

      window.open(
        `https://wa.me/6285692590096?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    });
  }

  sendMessage();
};

contactLogic();

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

const animasiScrollLogic = () => {
  function animasiScrollSectionAndH() {
    const containers = document.querySelectorAll(".reveal");

   
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-animasi-scroll");
        }
      });
    });

    containers.forEach((container) => {
      observer.observe(container);
     
      
    });
  }

  animasiScrollSectionAndH();

  function animasiScrollParaghrap() {
    const containers = document.querySelectorAll(".reveal-paraghrap");


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-animasi-scroll-paraghrap");
        }
      });
    });

    setTimeout(() => {
      containers.forEach((container) => {
        observer.observe(container);
         container.classList.add("opacity-100");
      });
    }, 400);
  }

  animasiScrollParaghrap();
};

animasiScrollLogic();
