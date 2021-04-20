let body = document.querySelector('body');
    let buttons = document.querySelectorAll('.btn');
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',function(event){
            if(event.target.id === "primary"){
                body.style.background = 'blue';
            }
            if(event.target.id === "secondary"){
                body.style.background = 'gray';
            }
            if(event.target.id === "success"){
                body.style.background = 'green';
            }
            if(event.target.id === "danger"){
                body.style.background = 'red';
            }
            if(event.target.id === "dark"){
                body.style.background = 'purple';
            }
            if(event.target.id === "warning"){
                body.style.background = 'yellow';
            }
            if(event.target.id === "info"){
                body.style.background = '#31D2F2';
            }
        })
    }