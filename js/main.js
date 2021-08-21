const body=document.querySelector(".body"),navigation=document.querySelector(".navigation"),navigationLogo=document.querySelector(".navigation__logo"),navigationList=document.querySelector(".navigation__list"),navigationItems=document.querySelectorAll(".navigation__item"),navigationLinks=document.querySelectorAll(".navigation__link"),navigationMenuCloseButton=document.querySelector(".navigation__menu-close-button"),navigationMenuOpenButton=document.querySelector(".navigation__menu-open-button"),tabLinks=document.querySelectorAll(".tab__link"),place=document.querySelector(".place"),placeTitle=document.querySelector(".place__more-title"),placeText=document.querySelector(".place__more-text"),review=document.querySelector(".place__review"),reviewText=document.querySelector(".place__review-text"),reviewImageSource=document.querySelector(".place__review-author-image-source"),reviewImage=document.querySelector(".place__review-author-image"),reviewName=document.querySelector(".place__review-author-name"),byTourButtons=document.querySelectorAll("[data-button-buy]"),catalogItems=document.querySelectorAll(".catalog__item"),callbackForm=document.querySelector(".callback__form"),callbackInputPhone=document.querySelector(".callback__input-phone"),callbackInputEmail=document.querySelector(".callback__input-email"),popupBuyTour=document.querySelector(".popup-buy-tour"),popupBuyTourForm=document.querySelector(".popup-buy-tour__form"),inputPhone=document.querySelector(".popup-buy-tour__form-input-phone"),inputEmail=document.querySelector(".popup-buy-tour__form-input-email"),inputPush=document.querySelector(".popup-buy-tour__form-button-push"),popupBuyTourButtonClose=document.querySelector(".popup-buy-tour__form-button-close"),popupBuyTourSuccess=document.querySelector(".popup-buy-tour-success"),allInputs=document.querySelectorAll("input"),retina=window.devicePixelRatio>1,desktop=window.innerWidth>=1024,tablet=window.innerWidth>=768&&window.innerWidth<1024,mobile=window.innerWidth>=320&&window.innerWidth<768;try{inputPhoneValue=localStorage.getItem("phone"),inputEmailValue=localStorage.getItem("email")}catch(e){localStorageSupport=!1}const WebpIsSupported=async()=>{self.createImageBitmap;const e=await fetch("data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=").then((e=>e.blob()));return createImageBitmap(e).then((()=>!0),(()=>!1))},webp=async()=>!!await WebpIsSupported();webp();const arrayPlace=[{placeTitle:"Греция",placeText:"На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры.",placeImageDesktopWebpRetina:'url("../img/place-greece-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("../img/place-greece-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("../img/place-greece-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("../img/place-greece-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("../img/place-greece-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("../img/place-greece-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("../img/place-greece-tablet@2x.png") no-repeat 0',placeImageTablet:'url("../img/place-greece-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("../img/place-greece-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("../img/place-greece-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("../img/place-greece-mobile@2x.png") no-repeat 0',placeImageMobile:'url("../img/place-greece-mobile.png") no-repeat 0',reviewText:"Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света!",reviewName:"Влада Голицина",reviewImageWebpRetina:"/img/review-author-vlada.webp 1x, /img/review-author-vlada@2x.webp 2x",reviewImageRetina:"/img/review-author-vlada@2x.png 2x",reviewImage:"/img/review-author-vlada.png"},{placeTitle:"Албания",placeText:"В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния.",placeImageDesktopWebpRetina:'url("../img/place-albany-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("../img/place-albany-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("../img/place-albany-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("../img/place-albany-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("../img/place-albany-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("../img/place-albany-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("../img/place-albany-tablet@2x.png") no-repeat 0',placeImageTablet:'url("../img/place-albany-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("../img/place-albany-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("../img/place-albany-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("../img/place-albany-mobile@2x.png") no-repeat 0',placeImageMobile:'url("../img/place-albany-mobile.png") no-repeat 0',reviewText:"Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)",reviewName:"Маришка",reviewImageWebpRetina:"/img/review-author-marishka.webp 1x, /img/review-author-marishka@2x.webp 2x",reviewImageRetina:"/img/review-author-marishka@2x.png 2x",reviewImage:"/img/review-author-marishka.png"},{placeTitle:"Македония",placeText:"В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.",placeImageDesktopWebpRetina:'url("../img/place-makedonia-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("../img/place-makedonia-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("../img/place-makedonia-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("../img/place-makedonia-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("../img/place-makedonia-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("../img/place-makedonia-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("../img/place-makedonia-tablet@2x.png") no-repeat 0',placeImageTablet:'url("../img/place-makedonia-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("../img/place-makedonia-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("../img/place-makedonia-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("../img/place-makedonia-mobile@2x.png") no-repeat 0',placeImageMobile:'url("../img/place-makedonia-mobile.png") no-repeat 0',reviewText:"Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.",reviewName:"Михаил Кузьмин",reviewImageWebpRetina:"/img/review-author-michael.webp 1x, /img/review-author-michael@2x.webp 2x",reviewImageRetina:"/img/review-author-michael@2x.png 2x",reviewImage:"/img/review-author-michael.png"},{placeTitle:"Черногория",placeText:"Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км.",placeImageDesktopWebpRetina:'url("../img/place-montenegrin-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("../img/place-montenegrin-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("../img/place-montenegrin-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("../img/place-montenegrin-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("../img/place-montenegrin-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("../img/place-montenegrin-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("../img/place-montenegrin-tablet@2x.png") no-repeat 0',placeImageTablet:'url("../img/place-montenegrin-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("../img/place-montenegrin-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("../img/place-montenegrin-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("../img/place-montenegrin-mobile@2x.png") no-repeat 0',placeImageMobile:'url("../img/place-montenegrin-mobile.png") no-repeat 0',reviewText:"Неописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую",reviewName:"Анастасия Мей",reviewImageWebpRetina:"/img/review-author-anastasia.webp 1x, /img/review-author-anastasia@2x.webp 2x",reviewImageRetina:"/img/review-author-anastasia@2x.png 2x",reviewImage:"/img/review-author-anastasia.png"},{placeTitle:"Хорватия",placeText:"В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.",placeImageDesktopWebpRetina:'url("../img/place-croatia-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("../img/place-croatia-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("../img/place-croatia-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("../img/place-croatia-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("../img/place-croatia-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("../img/place-croatia-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("../img/place-croatia-tablet@2x.png") no-repeat 0',placeImageTablet:'url("../img/place-croatia-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("../img/place-croatia-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("../img/place-croatia-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("../img/place-croatia-mobile@2x.png") no-repeat 0',placeImageMobile:'url("../img/place-croatia-mobile.png") no-repeat 0',reviewText:"Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)",reviewName:"Владимир Мулицин",reviewImageWebpRetina:"/img/review-author-vladimir.webp 1x, /img/review-author-vladimir@2x.webp 2x",reviewImageRetina:"/img/review-author-vladimir@2x.png 2x",reviewImage:"/img/review-author-vladimir.png"}],verifyInput=e=>{e.addEventListener("input",(()=>e.reportValidity()))},verifyForm=()=>{for(let e=0;e<allInputs.length;e++)verifyInput(allInputs[e])},toWorkWithPopup=()=>{const e=()=>{let e=window.scrollY;body.classList.add("body--disable-scroll"),body.dataset.position=e,body.style.top=-e+"px"},a=()=>{let e=parseInt(body.dataset.position,10);body.style.top="auto",body.classList.remove("body--disable-scroll"),window.scroll({top:e,left:0}),body.removeAttribute("data-position")};for(byTourButton of byTourButtons)byTourButton.addEventListener("click",(()=>{popupBuyTour.classList.remove("popup-buy-tour--hide"),inputPhone.focus(),e()}));popupBuyTour.addEventListener("click",(e=>{e.target===popupBuyTour&&(popupBuyTour.classList.add("popup-buy-tour--hide"),a())})),popupBuyTourButtonClose.addEventListener("click",(()=>{popupBuyTour.classList.add("popup-buy-tour--hide"),popupBuyTourSuccess.classList.add("popup-buy-tour-success--hide"),a()})),document.addEventListener("keydown",(e=>{"Escape"!==e.key&&"ESC"!==e.key||(popupBuyTour.classList.add("popup-buy-tour--hide"),popupBuyTourSuccess.classList.add("popup-buy-tour-success--hide"),a())})),popupBuyTourForm.addEventListener("submit",(e=>{e.preventDefault(),popupBuyTour.classList.add("popup-buy-tour--hide"),inputPhone.value="",inputEmail.value="",popupBuyTourSuccess.classList.remove("popup-buy-tour-success--hide"),a()})),popupBuyTourSuccess.addEventListener("click",(()=>{popupBuyTourSuccess.classList.add("popup-buy-tour-success--hide"),a()})),callbackForm.addEventListener("submit",(a=>{a.preventDefault(),callbackInputPhone.value="",callbackInputEmail.value="",popupBuyTourSuccess.classList.remove("popup-buy-tour-success--hide"),e()}))},changeElement=(e,a,t)=>{e.addEventListener("click",(()=>{for(let e of tabLinks)e.classList.remove("tab__link--current");t&&t.classList.add("tab__link--current"),placeTitle.textContent=a.placeTitle,placeText.textContent=a.placeText,desktop&&(place.style.background=retina?a.placeImageDesktopRetina:a.placeImageDesktop,place.style.background=webp?a.placeImageDesktopWebp:a.placeImageDesktop,place.style.background=webp&&retina?a.placeImageDesktopWebpRetina:a.placeImageDesktop),tablet&&(place.style.background="",review.style.background=retina?a.placeImageTabletRetina:a.placeImageTablet,review.style.background=webp?a.placeImageTabletWebp:a.placeImageTablet,review.style.background=webp&&retina?a.placeImageTabletWebpRetina:a.placeImageTablet,review.style.backgroundSize="100% 415px"),mobile&&(place.style.background="",review.style.background=retina?a.placeImageMobileRetina:a.placeImageMobile,review.style.background=webp?a.placeImageMobileWebp:a.placeImageMobile,review.style.background=webp&&retina?a.placeImageMobileWebpRetina:a.placeImageMobile,review.style.backgroundSize="100% 415px"),reviewText.textContent=a.reviewText,reviewImage.src=a.reviewImage,reviewImage.srcset=a.reviewImageRetina,webp&&retina?reviewImageSource.srcset=a.reviewImageWebpRetina:reviewImageSource.remove(),reviewName.textContent=a.reviewName}))},showPlaceByTab=()=>{for(let e=0;e<tabLinks.length;e++)changeElement(tabLinks[e],arrayPlace[e])},showPlaceByItem=()=>{for(let e=0;e<catalogItems.length;e++)changeElement(catalogItems[e],arrayPlace[e],tabLinks[e])},actionWithMenu=()=>{navigationMenuCloseButton.addEventListener("click",(()=>{navigationMenuCloseButton.classList.add("navigation__menu-close-button--hide"),navigationMenuOpenButton.classList.remove("navigation__menu-open-button--hide"),navigation.classList.add("navigation--open"),navigationLogo.classList.add("navigation__logo--hide"),navigationList.classList.add("navigation__list--open");for(let e of navigationItems)e.classList.add("navigation__item--open");for(let e of navigationLinks)e.classList.add("navigation__link--open")})),navigationMenuOpenButton.addEventListener("click",(()=>{navigationMenuOpenButton.classList.add("navigation__menu-open-button--hide"),navigationMenuCloseButton.classList.remove("navigation__menu-close-button--hide"),navigationLogo.classList.remove("navigation__logo--hide"),navigationList.classList.remove("navigation__list--open"),navigation.classList.remove("navigation--open")}))},deleteClassNojs=()=>{navigation.classList.remove("navigation--nojs"),navigationLogo.classList.remove("navigation__logo--nojs"),navigationList.classList.remove("navigation__list--nojs");for(let e of navigationItems)e.classList.remove("navigation__item--nojs");navigationMenuCloseButton.classList.remove("navigation__menu-close-button--nojs")};window.addEventListener("load",(()=>{verifyForm(),toWorkWithPopup(),showPlaceByTab(),showPlaceByItem(),navigationMenuCloseButton.addEventListener("click",(()=>{navigationMenuCloseButton.classList.add("navigation__menu-close-button--hide"),navigationMenuOpenButton.classList.remove("navigation__menu-open-button--hide"),navigation.classList.add("navigation--open"),navigationLogo.classList.add("navigation__logo--hide"),navigationList.classList.add("navigation__list--open");for(let e of navigationItems)e.classList.add("navigation__item--open");for(let e of navigationLinks)e.classList.add("navigation__link--open")})),navigationMenuOpenButton.addEventListener("click",(()=>{navigationMenuOpenButton.classList.add("navigation__menu-open-button--hide"),navigationMenuCloseButton.classList.remove("navigation__menu-close-button--hide"),navigationLogo.classList.remove("navigation__logo--hide"),navigationList.classList.remove("navigation__list--open"),navigation.classList.remove("navigation--open")})),deleteClassNojs()}));