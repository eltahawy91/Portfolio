let dataPortfolio = [
  {
    id: "1",
    image: "./img/projects/Crystal-Template.jpg",
    nameProject: "Crystal Website",
    category: "Web",
    link: "https://6546247c431186752e2dfc02--peppy-pudding-9b0ad7.netlify.app/",
  },
  {
    id: "2",
    image:
      "./img/projects/Buildque-Construction-Template-for-Architect-and-Construction.png",
    nameProject: "Template for Architect and Construction",
    category: "Web",
    link: "https://cerulean-moonbeam-b480c0.netlify.app/",
  },
  {
    id: "3",
    image: "./img/projects/Home-Egy-Design.png",
    nameProject: "Egy Designs Company",
    category: "Web",
    link: "https://64e53dab40bcd6396d3e974f--gentle-kleicha-5a1b36.netlify.app/",
  },
  {
    id: "4",
    image: "./img/projects/Startup-Startup-Website-Template.png",
    nameProject: "startup-website",
    category: "Web",
    link: "https://654627a2df007577e0700a26--capable-longma-8172dc.netlify.app/",
  },
  {
    id: "5",
    image: "./img/projects/TVflix.png",
    nameProject: "TV Flix",
    category: "Web",
    link: "https://velvety-seahorse-67fa84.netlify.app/",
  },
  {
    id: "6",
    image: "./img/projects/e-Shop-a-Ecommerce-Online-Shopping-Category-Flat-Bootstrap-Responsive-Website-Template-Home-w3layouts.png",
    nameProject: "E_Commerce Website",
    category: "Web",
    link: "https://65462a8cdf00757992700933--guileless-paletas-ab8774.netlify.app/",
  },
 
  {
    id: "7",
    image: "./img/projects/appgls.png",
    nameProject: "view glasses App",
    category: "Ui/Ux",
    link: "https://www.behance.net/gallery/133377127/Design-for-view-glasses",
  },
  {
    id: "8",
    image: "./img/projects/videocall.png",
    nameProject: "video-call-chat",
    category: "Ui/Ux",
    link: "https://www.behance.net/gallery/133986251/vidio-call-chat",
  },
  
  {
    id: "9",
    image: "./img/projects/medicare.png",
    nameProject: "Medicare e_commerce",
    category: "Ui/Ux",
    link: "https://www.behance.net/gallery/168303297/E-Commerce-for-Pharamcies",
  },
  {
    id: "10",
    image: "./img/projects/banner1.jpg",
    nameProject: "Medicare e_commerce",
    category: "identification",
    // link: "https://www.behance.net/gallery/168303297/E-Commerce-for-Pharamcies",
  },
  {
    id: "11",
    image: "./img/projects/7656932.jpg",
    nameProject: "Medicare e_commerce",
    category: "identification",
    // link: "https://www.behance.net/gallery/168303297/E-Commerce-for-Pharamcies",
  },
  {
    id: "12",
    image: "./img/projects/6124520.jpg",
    nameProject: "Medicare e_commerce",
    category: "identification",
    // link: "https://www.behance.net/gallery/168303297/E-Commerce-for-Pharamcies",
  },
  {
    id: "13",
    image: "./img/projects/cover.jpg",
    nameProject: "Modern Dashboard",
    category: "Ui/Ux",
    link: "https://www.behance.net/gallery/183844719/Modern-Dashboard",
  },
];

var tempLink;
var temp;
let portCard = document.getElementById("portCard"); ///row card project

function getId(id) {
  // console.log(id);
  let item = dataPortfolio.flat((i) => i.id === id);

  item.forEach((el, index) => {
    if (el.id == id) {
      temp = el.image;
      tempLink = el.link;
      // location.assign(tempLink);
    }
  });
}
function getLink(id) {
  // console.log(id);
  let item = dataPortfolio.flat((i) => i.id === id);

  item.forEach((el, index) => {
    if (el.id == id) {
      tempLink = el.link;
      location.assign(tempLink);
    }
  });
}

dataPortfolio.map((card) => {
  let cardInfo = `  
  
  <div class="col-lg-4 col-md-6 wow zoomIn card-project ${card.category}" data-wow-delay="0.3s">
  <div class="card " data-tilt>
      <div class="portfolio-item">
          <img src=${card.image} id="projectImage" alt="">
      </div>
      <div class="portfolio-info">
          <h3>${card.nameProject}</h3>
          <div class="d-flex justify-content-center gap-4 mt-3">
              <button class="modal-plus" onclick="getId(${card.id})" id="openModalPortfolio">
              <i class="fa-solid fa-plus"></i>
              </button>
              <button class="modal-link" onclick="getLink(${card.id})" ><i class="fa-solid fa-link"></i></button>
          </div>
      </div>

  </div>
</div>
  `;

  portCard.innerHTML += cardInfo;
  var openModalPortfolio = document.querySelectorAll(".modal-plus"); /////btn plus
  openModalPortfolio.forEach((plus) => {
    plus.addEventListener("click", (e) => {
      var modalProjects = document.querySelectorAll(".modal-projects"); //modal
      var modal_content = `
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-8 m-auto home-dark p-3 position-relative h-100">
                        <span class="closeBtn position-absolute end-0 me-3"><i class="fa-solid fa-xmark"></i></span>
                        <img src=${temp} class="h-100" style="object-fit:cover" id="projectImagePrevieo" alt="">
          
                    </div>
                </div>
            </div>
          `;
      modalProjects.forEach((modal) => {
        modal.innerHTML = modal_content;
        modal.style.transform = "scale(1)";
        let closeBtn = document.querySelector(".closeBtn");
        let closeBtnIcon = document.querySelector(".closeBtn i");
        closeBtn.addEventListener("click", () => {
          modal.style.transform = "scale(0)";
        });

        closeBtn.addEventListener("mouseover", () => {
          closeBtnIcon.classList.remove("fa-xmark");
          closeBtnIcon.classList.add("fa-slash");
        });
        closeBtn.addEventListener("mouseleave", () => {
          closeBtnIcon.classList.remove("fa-slash");
          closeBtnIcon.classList.add("fa-xmark");
        });
      });
    });
  });
});

let filterBtn = document.querySelectorAll(".filterBtn"); /// lis
let cardProject = document.querySelectorAll(".card-project"); //card

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", (event) => {
    const getFilter = event.target.dataset.filter;
    console.log(getFilter);
    filterBtn.forEach((btn) => {
      btn.classList.remove("filter-active");
    });
    event.target.classList.add("filter-active");

    cardProject.forEach((card) => {
      if (getFilter === "all") {
        card.style.display = "block";
      } else {
        if (card.classList.contains(getFilter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
}
