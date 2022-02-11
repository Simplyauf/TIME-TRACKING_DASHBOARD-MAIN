

// fetching data from JSON

fetch('data.json')

 .then(response=> response.json())
   .then((data) => {

let Data=data;
 
const periods=document.querySelectorAll('li');


// LOOPING THROUGH THE NAVGATING BUTTONS AND ADDING AN EVENTLISTENER TO THEM

 periods.forEach((period)=>{
period.addEventListener('click',(e)=>{
let date=e.currentTarget.classList;



map(date,Data);

})


})





 
  




  

  })


// MAPPING THE DATAS INTO DOM WITH A FUNCTION USING CONDITIONAL STATEMENT

function map(date,Data){ 
  const section=document.querySelector('.section-categories')   
 let mappedData;
 

    if(date=='daily'){
  mappedData=Data.map((item)=>{
 return  `
  <section class="categories ${item.title}">
    <img src="images/icon-${item.title}.svg" alt="play" id="img">
    <div class="details categories-${item.title}">
<div class="details-title">
<span class="details-titlename">
${item.title}
</span>
<span class="details-icon">
<i class="fas fa-ellipsis-h"></i>
</span>

</div>

<div class="usage">
<h2 class="current-usage">
${item.timeframes.daily.current}hrs
</h2>
<span class="previous-usage" id="faint-text">
  yesterday-${item.timeframes.daily.previous}hrs
</span>

</div>
    </div>
  </section>
  `
   

}).join('');



 }

  
 



 else if(date=='weekly'){
  mappedData=Data.map((item)=>{
 return  `
  <section class="categories ${item.title}">
  <img src="images/icon-${item.title}.svg" alt="play" id="img">
    <div class="details categories-${item.title}">
<div class="details-title">
<span class="details-titlename">
${item.title}
</span>
<span class="details-icon">
<i class="fas fa-ellipsis-h"></i>
</span>

</div>

<div class="usage">
<h2 class="current-usage">
${item.timeframes.weekly.current}hrs
</h2>
<span class="previous-usage" id="faint-text">
last week-${item.timeframes.weekly.previous}hrs
</span>

</div>
    </div>
  </section>
  `
   

}).join('');



 }

  

  




 
 else{
  mappedData=Data.map((item)=>{
 return  `
  <section class="categories ${item.title}">
  <img src="images/icon-${item.title}.svg" alt="play" id="img">
    <div class="details categories-${item.title}">
<div class="details-title">
<span class="details-titlename">
${item.title}
</span>
<span class="details-icon">
<i class="fas fa-ellipsis-h"></i>
</span>

</div>

<div class="usage">
<h2 class="current-usage">
${item.timeframes.monthly.current}hrs
</h2>
<span class="previous-usage" id="faint-text">
Last Month-${item.timeframes.monthly.previous}hrs
</span>

</div>
    </div>
  </section>
  `
   

}).join('');


 };


section.innerHTML=mappedData;

  
 }


