const body = document.getElementById("body");
body.addEventListener("mousedown", function(e){
    return false;
})







function move(val) {

    let elem = document.getElementById("greenBar");
    console.log(val);
    let stepValue = val;
    let id = setInterval(frame, 400);
  
    function frame() {
  
      if (stepValue == 100) {
        clearInterval(id);
        
      } else {
        elem.style.width = (stepValue + 10) + "%";
        elem.innerHTML = (stepValue + 10) + "%";
        stepValue=(stepValue + 10);
      }
    }
  }

let node = document.getElementById("linux-text");

let node_value=[];

let i=0
node.addEventListener('keydown', function(ed) {
  if (ed.key === 'ArrowUp'){
    i=i-1

    if (node_value.length===0 && i===-1){
      node.value="show -n joke";
    }

    else if(!node_value.at(i)){
        node.value="show -n joke";
        i=0;
    }
    else{
      node.value=node_value.at(i);
    }

  } 
});

node.addEventListener("keyup", function(event) {

    let command_list=["show -n joke", "show -n meme", "clear"]
    let imgs="";
    let sp=document.getElementById("sp");

    let isImage=false;


    

    if (event.key === "Enter") {
      node_value.push(node.value);


        if(!command_list.includes(node.value)){
           write_p="Invalid Command, Please check from command list." 



        let new_div=document.createElement("div");
        new_div.setAttribute("id","cursor_ui");

        let top_span_green=document.createElement("span");
        top_span_green.innerText="shreyas@shreyas-Inspiron-15-3567";
        top_span_green.setAttribute("class","green");

        let span_white_colon=document.createElement("span");
        span_white_colon.innerText=":";
        span_white_colon.setAttribute("class","white");

        let span_blue_colon=document.createElement("span");
        span_blue_colon.innerText="~/js/jokeapp";
        span_blue_colon.setAttribute("class","blue");

        let span_white_dollar=document.createElement("span");
        span_white_dollar.innerText="$";
        span_white_dollar.setAttribute("class","white");


        new_div.appendChild(top_span_green);
        new_div.appendChild(span_white_colon);
        new_div.appendChild(span_blue_colon);
        new_div.appendChild(span_white_dollar);


        let input_span=document.createElement("span");
        let input = document.createElement("input");
        input.setAttribute("id",`linux-text`);
        input.setAttribute("class","linux-text");
        input.setAttribute("type","text");
        input.value=node.value;
        input.disabled=true;
        input_span.append(input);

        new_div.appendChild(input_span);

        let c_div=document.createElement("div");
        c_div.setAttribute("class","joke");

        let c_p=document.createElement("p");
        c_p.innerText=write_p;
        c_div.appendChild(c_p)

        new_div.appendChild(c_div)

        let xx= document.getElementById("linux-ui");
        xx.insertBefore(new_div, xx.lastElementChild);
        node.value=null;
        




        }else{

        
          if(node.value==="show -n joke"){
            sp.innerHTML="New joke is arriving,Please wait."


          fetch(`https://joke.deno.dev/`).then((data)=>{
            return data.json();
            }).then((actdata)=>{
              write_setup=actdata["setup"]
              write_punchline=actdata["punchline"]

            })

          }if(node.value==="show -n meme"){
            sp.innerHTML="New meme is arriving,Please wait."

            fetch(`https://meme-api.com/gimme`).then((data)=>{
            return data.json();
            }).then((actdata)=>{
              if(actdata['code']==403){
                write_setup="Image have private access,"
                write_punchline="Please try again"

              }else{
                isImage=true;
                let img=actdata['preview'];
                imgs=img.slice(-1)

              }
              

            })

          }

          if(node.value==="clear"){
            window.location.reload();
          }

            document.getElementById("spinner").style.display="block";
            document.getElementById("spinner").style.display="flex";

            document.getElementById("progressbarWrapper").style.display="block";
            document.getElementById("greenBar").style.display="block";
            move(0);
                
            setTimeout(() => {
                document.getElementById("progressbarWrapper").style.display="none";
                document.getElementById("greenBar").style.display="none";
                document.getElementById("spinner").style.display="none";


        // Do work


        let new_div=document.createElement("div");
        new_div.setAttribute("id","cursor_ui");

        let top_span_green=document.createElement("span");
        top_span_green.innerText="shreyas@shreyas-Inspiron-15-3567";
        top_span_green.setAttribute("class","green");

        let span_white_colon=document.createElement("span");
        span_white_colon.innerText=":";
        span_white_colon.setAttribute("class","white");

        let span_blue_colon=document.createElement("span");
        span_blue_colon.innerText="~/js/jokeapp";
        span_blue_colon.setAttribute("class","blue");

        let span_white_dollar=document.createElement("span");
        span_white_dollar.innerText="$";
        span_white_dollar.setAttribute("class","white");


        new_div.appendChild(top_span_green);
        new_div.appendChild(span_white_colon);
        new_div.appendChild(span_blue_colon);
        new_div.appendChild(span_white_dollar);


        let input_span=document.createElement("span");
        let input = document.createElement("input");
        input.setAttribute("id",`linux-text`);
        input.setAttribute("class","linux-text");
        input.setAttribute("type","text");
        input.value=node.value;
        input.disabled=true;
        input_span.append(input);

        new_div.appendChild(input_span);

        let c_div=document.createElement("div");
        c_div.setAttribute("class","joke");

        if(isImage){
          let c_img=document.createElement("img");
          c_img.setAttribute("class","img-meme")
          c_img.setAttribute("id","img-meme")
          c_img.setAttribute("onclick",`showdata()`)
          c_img.src=imgs;
          c_div.appendChild(c_img)
  
          new_div.appendChild(c_div)

        }else{
          let c_p=document.createElement("p");
          c_p.innerText=write_setup;
          c_div.appendChild(c_p)
  
          let c_pp=document.createElement("p");
          c_pp.innerText=write_punchline;
          c_div.appendChild(c_pp)

          new_div.appendChild(c_div)

        }

      

       

        let xx= document.getElementById("linux-ui");
        xx.insertBefore(new_div, xx.lastElementChild);
        node.value=null;


    }, 5000);
    

}

  }

});
var modal = document.getElementById("myModal");


const showdata=()=>{

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  let all_image=document.querySelectorAll("#img-meme");
  all_image.forEach((e, idx)=>{
    e.addEventListener("click",function(){
      modal.style.display = "block";
      modalImg.src = e['src'];
    })
  })

}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click",function() { 
  modal.style.display = "none";
})