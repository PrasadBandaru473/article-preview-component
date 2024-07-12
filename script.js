// Twitter:
// https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

// Facebook:
// https://www.facebook.com/sharer.php?u=[post-url]

// Pinterest:
// https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
let shareButton = document.querySelector(".share-icon");
let shareMenu = document.querySelector(".total-share");
let mobileShareMenu = document.querySelector(".for-mobile-total-share");
let mobileShareButton = document.querySelector(".share-icon-mobile");
let position = shareMenu.getBoundingClientRect();
let windowWidth = window.innerWidth;
let facebook = document.querySelector(".facebook").parentNode;
let twitter = document.querySelector(".twitter").parentNode;
let pinterest = document.querySelector(".pinterest").parentNode;
let facebookDes = document.querySelector(".facebook-desktop").parentNode;
let twitterDes = document.querySelector(".twitter-desktop").parentNode;
let pinterestDes = document.querySelector(".pinterest-desktop").parentNode;
let shareMenuHover = false;
let shareButtonTimeOut;
let shareMenuTimeOut;

window.onresize = () => {
  setTimeout(() => {
    location.reload();
    console.log("reloaded");
  },500)
};

if (windowWidth > 600) {
  shareButton.addEventListener("mouseenter", () => {
    clearTimeout(shareButtonTimeOut);
    clearTimeout(shareMenuTimeOut);
    window.offsetHeight;
    forLaptop();
    siteDetails();
  });

  shareButton.addEventListener("mouseleave", () => {
    shareButtonTimeOut = setTimeout(() => {
      if (!shareMenu.classList.contains("hide") && !shareMenuHover) {
        shareMenu.classList.toggle("hide");
      }
    }, 1000);
  });

  shareMenu.addEventListener("mouseenter", () => {
    shareMenuHover = true;
  });

  shareMenu.addEventListener("mouseleave", () => {
    shareMenuHover = false;
    shareMenuTimeOut = setTimeout(() => {
      if (!shareMenu.classList.contains("hide") && !shareMenuHover) {
        shareMenu.classList.toggle("hide");
      }
    }, 1000);
  });
} else {
  shareButton.addEventListener("click", () => {
    forMobile();
    siteDetails();
    mobileShareButton.addEventListener("click", () => {
      mobileShareMenu.style.display = "none";
      if(shareButton.classList.contains("hide"))
      shareButton.classList.toggle("hide");
    });
  });
}

function forLaptop() {
  if (shareMenu.classList.contains("hide")) {
    shareMenu.classList.toggle("hide");
  }
  shareMenu.offsetHeight;
  let positionbtn = shareButton.getBoundingClientRect();
  shareMenu.style.left = positionbtn.left + "px";
  shareMenu.style.right = positionbtn.right + "px";
  shareMenu.style.top = positionbtn.top - 40 + "px";
  shareMenu.style.bottom = positionbtn.bottom + "px";
  shareMenu.style.width = positionbtn.width + "px";
  shareMenu.style.height = positionbtn.height + "px";
}

function forMobile() {
  mobileShareMenu.style.display = "flex";
  shareButton.classList.toggle("hide");
}

function siteDetails() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Have a look at my business card from here");
  let postImg = encodeURI("imagesdesktop-design.jpg");

  facebook.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  facebookDes.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitter.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  twitterDes.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterest.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?url=${postUrl}&description=${postTitle}`
  );

  pinterestDes.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?url=${postUrl}&description=${postTitle}`
  );
}
