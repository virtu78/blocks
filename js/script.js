function change(){
    var blocks = document.querySelectorAll('.block');
    
    if (document.getElementById('changecontent').checked) {       
        blocks.forEach(function(element, index){
           var even = index % 2 == 0;           
            if(even!=true){               
                element.style.cssText = 'background-color: gray; color: white';
            }
        });
    }else{
        Array.from(blocks, function(e){
            e.style.backgroundColor = "white",
            e.style.color = 'black'
        });
    }
}
function popup(clicked_id){    
    var blocks = document.querySelectorAll('.block'),
     popup = document.getElementById('popup'); 
       
    blocks.forEach(function(element){       
        if(clicked_id==element.id){
            var content=element.innerHTML;
            popup.innerHTML=content;
        }
    });
    popup.classList.remove('hide');
    popup.classList.add('active');    
    const close = document.createElement("span");      
    close.innerHTML='x';
    close.classList.add("close"); 
    close.setAttribute('onclick','closePopup()');
    popup.appendChild(close);
}
function closePopup(){
    var popup = document.getElementById('popup'); 
    popup.classList.remove('active');
    popup.classList.add('hide');
}  
function addBlock(){
    var blocks = document.querySelectorAll('.block'),
    blockswrap=document.getElementById('blocks-wrap'),
    block = document.createElement("div");  

    blocks.forEach(function(element, index){             
        if(index==blocks.length-1){                     
            block.innerHTML=index+2;
            block.setAttribute('id', index+2);           
            block.classList.add('block');
            blockswrap.appendChild(block);
            block.setAttribute('onclick','popup(this.id)');            
        }
    });
    this.change();
} 
document.addEventListener('mouseup', function(e) {
    var popup = document.getElementById('popup');
    if (!popup.contains(e.target)) {
        popup.classList.remove('active');
        popup.classList.add('hide');
    }
}); 