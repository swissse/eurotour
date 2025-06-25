const left_btn_other_directions = document.querySelector('.scroll_left_other_directions')
const right_btn_other_directions = document.querySelector('.scroll_right_other_directions')

const scroll_other_directions = document.querySelector('.other_directions_scroll_bar')

const num_page_other_directions = 5;


const points_other_directions = document.querySelectorAll('.scroll_point_other_directions')

const point_1_other_directions = document.querySelector('.point_1_other_directions')
const point_2_other_directions = document.querySelector('.point_2_other_directions')
const point_3_other_directions = document.querySelector('.point_3_other_directions')
const point_4_other_directions = document.querySelector('.point_4_other_directions')
const point_5_other_directions = document.querySelector('.point_5_other_directions')

let offset_other_directions = 0;
let def_point_other_directions = 0


const clear_active_point_other_directions = (point_num) => {
   console.log(scroll_other_directions.scrollLeft);
   
   points_other_directions.forEach((point) => {
      point.classList.remove('point_other_directions_active')
   })
   scroll_other_directions.scrollTo(1160 * def_point_other_directions, 0)
   points_other_directions[point_num].classList.add('point_other_directions_active')
}

point_1_other_directions.addEventListener('click', () => {
   def_point_other_directions = 0
   clear_active_point_other_directions(def_point_other_directions, 0)
})

point_2_other_directions.addEventListener('click', () => {
   def_point_other_directions = 1
   clear_active_point_other_directions(def_point_other_directions)
})

point_3_other_directions.addEventListener('click', () => {
   def_point_other_directions = 2
   clear_active_point_other_directions(def_point_other_directions)
})

point_4_other_directions.addEventListener('click', () => {
   def_point_other_directions = 3
   clear_active_point_other_directions(def_point_other_directions)
})

point_5_other_directions.addEventListener('click', () => {
   def_point_other_directions = 4
   clear_active_point_other_directions(def_point_other_directions)
})


left_btn_other_directions.addEventListener('click', () => {   
   console.log(def_point_other_directions);
   
   if(def_point_other_directions - 1 < 0){
      return
   }
   def_point_other_directions--
   clear_active_point_other_directions(def_point_other_directions)
})

right_btn_other_directions.addEventListener('click', () => {
   console.log(def_point_other_directions);
   if(def_point_other_directions + 1 >= num_page_other_directions){
      return
   }
   def_point_other_directions++
   clear_active_point_other_directions(def_point_other_directions)
})


//////////////////////////////

const left_btn_russian_cities = document.querySelector('.scroll_left_russian_cities')
const right_btn_russian_cities = document.querySelector('.scroll_right_russian_cities')

const scroll_russian_cities = document.querySelector('.russian_cities_scroll_bar')

const num_page_russian_cities = 5;


const points_russian_cities = document.querySelectorAll('.scroll_point_russian_cities')

const point_1_russian_cities = document.querySelector('.point_1_russian_cities')
const point_2_russian_cities = document.querySelector('.point_2_russian_cities')
const point_3_russian_cities = document.querySelector('.point_3_russian_cities')
const point_4_russian_cities = document.querySelector('.point_4_russian_cities')
const point_5_russian_cities = document.querySelector('.point_5_russian_cities')

let offset_russian_cities = 0;
let def_point_russian_cities = 0


const clear_active_point_russian_cities = (point_num) => {
   console.log(scroll_russian_cities.scrollLeft);
   
   points_russian_cities.forEach((point) => {
      point.classList.remove('point_russian_cities_active')
   })
   scroll_russian_cities.scrollTo(1160 * def_point_russian_cities, 0)
   points_russian_cities[point_num].classList.add('point_russian_cities_active')
}

point_1_russian_cities.addEventListener('click', () => {
   def_point_russian_cities = 0
   clear_active_point_russian_cities(def_point_russian_cities, 0)
})

point_2_russian_cities.addEventListener('click', () => {
   def_point_russian_cities = 1
   clear_active_point_russian_cities(def_point_russian_cities)
})

point_3_russian_cities.addEventListener('click', () => {
   def_point_russian_cities = 2
   clear_active_point_russian_cities(def_point_russian_cities)
})

point_4_russian_cities.addEventListener('click', () => {
   def_point_russian_cities = 3
   clear_active_point_russian_cities(def_point_russian_cities)
})

point_5_russian_cities.addEventListener('click', () => {
   def_point_russian_cities = 4
   clear_active_point_russian_cities(def_point_russian_cities)
})


left_btn_russian_cities.addEventListener('click', () => {   
   console.log(def_point_russian_cities);
   
   if(def_point_russian_cities - 1 < 0){
      return
   }
   def_point_russian_cities--
   clear_active_point_russian_cities(def_point_russian_cities)
})

right_btn_russian_cities.addEventListener('click', () => {
   console.log(def_point_russian_cities);
   if(def_point_russian_cities + 1 >= num_page_russian_cities){
      return
   }
   def_point_russian_cities++
   clear_active_point_russian_cities(def_point_russian_cities)
})


//////////////////////////////

const left_btn_cities_turkey = document.querySelector('.scroll_left_cities_turkey')
const right_btn_cities_turkey = document.querySelector('.scroll_right_cities_turkey')

const scroll_cities_turkey = document.querySelector('.cities_turkey_scroll_bar')

const num_page_cities_turkey = 5;


const points_cities_turkey = document.querySelectorAll('.scroll_point_cities_turkey')

const point_1_cities_turkey = document.querySelector('.point_1_cities_turkey')
const point_2_cities_turkey = document.querySelector('.point_2_cities_turkey')
const point_3_cities_turkey = document.querySelector('.point_3_cities_turkey')
const point_4_cities_turkey = document.querySelector('.point_4_cities_turkey')
const point_5_cities_turkey = document.querySelector('.point_5_cities_turkey')

let offset_cities_turkey = 0;
let def_point_cities_turkey = 0


const clear_active_point_cities_turkey = (point_num) => {
   console.log(scroll_cities_turkey.scrollLeft);
   
   points_cities_turkey.forEach((point) => {
      point.classList.remove('point_cities_turkey_active')
   })
   scroll_cities_turkey.scrollTo(1160 * def_point_cities_turkey, 0)
   points_cities_turkey[point_num].classList.add('point_cities_turkey_active')
}

point_1_cities_turkey.addEventListener('click', () => {
   def_point_cities_turkey = 0
   clear_active_point_cities_turkey(def_point_cities_turkey, 0)
})

point_2_cities_turkey.addEventListener('click', () => {
   def_point_cities_turkey = 1
   clear_active_point_cities_turkey(def_point_cities_turkey)
})

point_3_cities_turkey.addEventListener('click', () => {
   def_point_cities_turkey = 2
   clear_active_point_cities_turkey(def_point_cities_turkey)
})

point_4_cities_turkey.addEventListener('click', () => {
   def_point_cities_turkey = 3
   clear_active_point_cities_turkey(def_point_cities_turkey)
})

point_5_cities_turkey.addEventListener('click', () => {
   def_point_cities_turkey = 4
   clear_active_point_cities_turkey(def_point_cities_turkey)
})


left_btn_cities_turkey.addEventListener('click', () => {   
   console.log(def_point_cities_turkey);
   
   if(def_point_cities_turkey - 1 < 0){
      return
   }
   def_point_cities_turkey--
   clear_active_point_cities_turkey(def_point_cities_turkey)
})

right_btn_cities_turkey.addEventListener('click', () => {
   console.log(def_point_cities_turkey);
   if(def_point_cities_turkey + 1 >= num_page_cities_turkey){
      return
   }
   def_point_cities_turkey++
   clear_active_point_cities_turkey(def_point_cities_turkey)
})