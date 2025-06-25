const right_btn = document.querySelector('.scroll_right_deals')
const left_btn = document.querySelector('.scroll_left_deals')

const scroll = document.querySelector('.scroll_bar_deals')

left_btn.addEventListener('click', () => {
   scroll.scrollBy(-1220, 0)
})

right_btn.addEventListener('click', () => {
   scroll.scrollBy(1220, 0)
   // clear_active_point(def_point)
})


// const points = document.querySelectorAll('.scroll_point')

// const point_1 = document.querySelector('.point_1')
// const point_2 = document.querySelector('.point_2')
// const point_3 = document.querySelector('.point_3')
// const point_4 = document.querySelector('.point_4')

// const clear_active_point = (point_num) => {
//    points.forEach((point) => {
//       point.classList.remove('point_active')
//    })
//    points[point_num].classList.add('point_active')
// }

// point_1.addEventListener('click', () => {
//    def_point = 0
//    scroll.scrollTo(0, 0)
//    clear_active_point(def_point)
// })

// point_2.addEventListener('click', () => {
//    def_point = 1
//    scroll.scrollTo(1425, 0)
//    clear_active_point(def_point)
// })

// point_3.addEventListener('click', () => {
//    def_point = 2
//    scroll.scrollTo(1425 * 2 , 0)
//    clear_active_point(def_point)
// })

// point_4.addEventListener('click', () => {
//    def_point = 3
//    scroll.scrollTo(1425 * 3, 0)
//    clear_active_point(def_point)
// })


const right_btn_certificates = document.querySelector('.scroll_right_certificates')
const left_btn_certificates = document.querySelector('.scroll_left_certificates')

const scroll_certificates = document.querySelector('.scroll_bar_certificates')

const num_page_certificates = 3;


const points_certificates = document.querySelectorAll('.scroll_point_certificates')

const point_1_certificates = document.querySelector('.point_1_certificates')
const point_2_certificates = document.querySelector('.point_2_certificates')
const point_3_certificates = document.querySelector('.point_3_certificates')

let offset_certificates = 0;
let def_point_certificates = 0


const clear_active_point_certificates = (point_num) => {
   points_certificates.forEach((point) => {
      point.classList.remove('point_certificates_active')
   })
   scroll_certificates.scrollTo(1096 * def_point_certificates, 0)
   points_certificates[point_num].classList.add('point_certificates_active')
}

point_1_certificates.addEventListener('click', () => {
   def_point_certificates = 0
   clear_active_point_certificates(def_point_certificates)
})

point_2_certificates.addEventListener('click', () => {
   def_point_certificates = 1
   clear_active_point_certificates(def_point_certificates)
})

point_3_certificates.addEventListener('click', () => {
   def_point_certificates = 2
   clear_active_point_certificates(def_point_certificates)
})


left_btn_certificates.addEventListener('click', () => {   
   console.log(def_point_certificates);
   
   if(def_point_certificates - 1 < 0){
      return
   }
   def_point_certificates--
   clear_active_point_certificates(def_point_certificates)
})

right_btn_certificates.addEventListener('click', () => {
   if(def_point_certificates + 1 >= num_page_certificates){
      console.log('offset');
      return
   }
   def_point_certificates++
   clear_active_point_certificates(def_point_certificates)
})



//////////////////////////////


const right_btn_barcelo = document.querySelector('.scroll_right_barcelo')
const left_btn_barcelo = document.querySelector('.scroll_left_barcelo')

const scroll_barcelo = document.querySelector('.scroll_bar_barcelo')

const num_page_barcelo = 3;

let offset_barcelo = 0;
let def_point_barcelo = 0

left_btn_barcelo.addEventListener('click', () => {
   if(offset_barcelo - 1440 < 0){
      return
   }
   offset_barcelo -= 1440
   scroll_barcelo.scrollTo(offset_barcelo, 0)
   def_point_barcelo--
   // clear_active_point(def_point)
})

right_btn_barcelo.addEventListener('click', () => {
   if(offset_barcelo + 1440 >= 1440 * num_page_barcelo){
      console.log('offset');
      return
   }
   offset_barcelo += 1440
   scroll_barcelo.scrollTo(offset_barcelo, 0)
   def_point_barcelo++
   // clear_active_point(def_point)
})

/////////////////////////////////////////////////////////////////////////////


const right_btn_choose_tour = document.querySelector('.scroll_right_choose_tour')
const left_btn_choose_tour = document.querySelector('.scroll_left_choose_tour')

const scroll_choose_tour = document.querySelector('.scroll_bar_choose_tour')

const num_page_choose_tour = 5;


const points_choose_tour = document.querySelectorAll('.scroll_point_choose_tour')

const point_1_choose_tour = document.querySelector('.point_1_choose_tour')
const point_2_choose_tour = document.querySelector('.point_2_choose_tour')
const point_3_choose_tour = document.querySelector('.point_3_choose_tour')
const point_4_choose_tour = document.querySelector('.point_4_choose_tour')
const point_5_choose_tour = document.querySelector('.point_5_choose_tour')

let offset_choose_tour = 0;
let def_point_choose_tour = 0


const clear_active_point_choose_tour = (point_num) => {

   points_choose_tour.forEach((point) => {
      point.classList.remove('point_choose_tour_active')
   })
   scroll_choose_tour.scrollTo(1130 * def_point_choose_tour, 0)
   points_choose_tour[point_num].classList.add('point_choose_tour_active')
}

point_1_choose_tour.addEventListener('click', () => {
   def_point_choose_tour = 0
   // scroll_choose_tour.scrollTo(1130 * def_point_choose_tour, 0)
   clear_active_point_choose_tour(def_point_choose_tour, 0)
})

point_2_choose_tour.addEventListener('click', () => {
   def_point_choose_tour = 1
   // scroll_choose_tour.scrollTo(1130 * def_point_choose_tour, 0)
   clear_active_point_choose_tour(def_point_choose_tour)
})

point_3_choose_tour.addEventListener('click', () => {
   def_point_choose_tour = 2
   // scroll_choose_tour.scrollTo(1130 * def_point_choose_tour , 0)
   clear_active_point_choose_tour(def_point_choose_tour)
})

point_4_choose_tour.addEventListener('click', () => {
   def_point_choose_tour = 3
   // scroll_choose_tour.scrollTo(1130 * def_point_choose_tour , 0)
   clear_active_point_choose_tour(def_point_choose_tour)
})

point_5_choose_tour.addEventListener('click', () => {
   def_point_choose_tour = 4
   clear_active_point_choose_tour(def_point_choose_tour)
})


left_btn_choose_tour.addEventListener('click', () => {   
   console.log(def_point_choose_tour);
   
   if(def_point_choose_tour - 1 < 0){
      return
   }
   def_point_choose_tour--
   clear_active_point_choose_tour(def_point_choose_tour)
})

right_btn_choose_tour.addEventListener('click', () => {
   console.log(def_point_choose_tour);
   if(def_point_choose_tour + 1 >= num_page_choose_tour){
      return
   }
   def_point_choose_tour++
   clear_active_point_choose_tour(def_point_choose_tour)
})


///////////////////////////////////

const right_btn_pay_attention = document.querySelector('.scroll_right_pay_attention')
const left_btn_pay_attention = document.querySelector('.scroll_left_pay_attention')

const scroll_pay_attention = document.querySelector('.pay_attention_scroll_bar')

const num_page_pay_attention = 5;


const points_pay_attention = document.querySelectorAll('.scroll_point_pay_attention')

const point_1_pay_attention = document.querySelector('.point_1_pay_attention')
const point_2_pay_attention = document.querySelector('.point_2_pay_attention')
const point_3_pay_attention = document.querySelector('.point_3_pay_attention')
const point_4_pay_attention = document.querySelector('.point_4_pay_attention')
const point_5_pay_attention = document.querySelector('.point_5_pay_attention')

let offset_pay_attention = 0;
let def_point_pay_attention = 0


const clear_active_point_pay_attention = (point_num) => {
   console.log(scroll_pay_attention.scrollLeft);
   

   points_pay_attention.forEach((point) => {
      point.classList.remove('point_pay_attention_active')
   })
   scroll_pay_attention.scrollTo(1160 * def_point_pay_attention, 0)
   points_pay_attention[point_num].classList.add('point_pay_attention_active')
}

point_1_pay_attention.addEventListener('click', () => {
   def_point_pay_attention = 0
   clear_active_point_pay_attention(def_point_pay_attention, 0)
})

point_2_pay_attention.addEventListener('click', () => {
   def_point_pay_attention = 1
   clear_active_point_pay_attention(def_point_pay_attention)
})

point_3_pay_attention.addEventListener('click', () => {
   def_point_pay_attention = 2
   clear_active_point_pay_attention(def_point_pay_attention)
})

point_4_pay_attention.addEventListener('click', () => {
   def_point_pay_attention = 3
   clear_active_point_pay_attention(def_point_pay_attention)
})

point_5_pay_attention.addEventListener('click', () => {
   def_point_pay_attention = 4
   clear_active_point_pay_attention(def_point_pay_attention)
})


left_btn_pay_attention.addEventListener('click', () => {   
   console.log(def_point_pay_attention);
   
   if(def_point_pay_attention - 1 < 0){
      return
   }
   def_point_pay_attention--
   clear_active_point_pay_attention(def_point_pay_attention)
})

right_btn_pay_attention.addEventListener('click', () => {
   console.log(def_point_pay_attention);
   if(def_point_pay_attention + 1 >= num_page_pay_attention){
      return
   }
   def_point_pay_attention++
   clear_active_point_pay_attention(def_point_pay_attention)
})

//////////////////////////////


