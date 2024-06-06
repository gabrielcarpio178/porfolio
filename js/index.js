
const html = document.querySelectorAll(".progress-number")[0];
const css = document.querySelectorAll(".progress-number")[1];
const js = document.querySelectorAll(".progress-number")[2];
const jq = document.querySelectorAll(".progress-number")[3];
const java = document.querySelectorAll(".progress-number")[4];
const php = document.querySelectorAll(".progress-number")[5];
const mysql = document.querySelectorAll(".progress-number")[6];

let prev_line = 'none_';
function underline(content_id){
  const pres_under = document.querySelector(`#${content_id}`).classList;
  const remove_under = document.querySelector(`#${prev_line}`).classList;
  remove_under.remove('under_line');
  prev_line = content_id;
  pres_under.add('under_line');
}

let scrollpos = window.scrollY
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  const btn_back_top = document.getElementById('btn_back_top');
  const my_skills = document.getElementById('my_skills');
  const img_about = document.getElementById('img_about');
  const hobby = document.getElementById('hobby');
  if(scrollpos<346){
    btn_back_top.classList.remove('backtop');
    my_skills.classList.remove('my-skills-animation');
    img_about.classList.remove('about_animation');
    hobby.classList.remove('hobby-animation');
    underline("none_");
  }else if(scrollpos>=347&&scrollpos<=1500){
    btn_back_top.classList.add('backtop');
    my_skills.classList.add('my-skills-animation');
    img_about.classList.add('about_animation');
    hobby.classList.add('hobby-animation');
    underline("about_");
    if(scrollpos<=400&&scrollpos<=1000){
      animateValue(html, 0, 60, 1000);
      animateValue(css, 0, 60, 1000);
      animateValue(js, 0, 30, 1000);
      animateValue(jq, 0, 30, 1000);
      animateValue(java, 0, 20, 1000);
      animateValue(php, 0, 50, 1000);
      animateValue(mysql, 0, 15, 1000);
    }
  }
  else if(scrollpos>=1600&&scrollpos<=1900){
    btn_back_top.classList.add('backtop');
    my_skills.classList.remove('my-skills-animation');
    img_about.classList.remove('about_animation');
    hobby.classList.remove('hobby-animation');
    underline("projects_");
  } 
  else if(scrollpos>=2000&&scrollpos<=2500){
    btn_back_top.classList.add('backtop');
    my_skills.classList.remove('my-skills-animation');
    img_about.classList.remove('about_animation');
    hobby.classList.remove('hobby-animation');
    underline("resume_");
  } 
  else if(scrollpos>2600){
    btn_back_top.classList.add('backtop');
    my_skills.classList.remove('my-skills-animation');
    img_about.classList.remove('about_animation');
    hobby.classList.remove('hobby-animation');
    underline("contact_");
  }
  // console.log(scrollpos);
});

document.getElementById('btn_back_top').addEventListener('click', ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  underline('none_');
})



function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start)+"%";
    obj.style.width =  (Math.floor(progress * (end - start) + start)+"%").toString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
animateValue(html, 0, 60, 1000);
animateValue(css, 0, 60, 1000);
animateValue(js, 0, 50, 1000);
animateValue(jq, 0, 30, 1000);
animateValue(java, 0, 20, 1000);
animateValue(php, 0, 40, 1000);
animateValue(mysql, 0, 15, 1000);

