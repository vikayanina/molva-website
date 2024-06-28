

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  alert('Сообщение отправлено!');
  this.reset();
});


let btns = document.querySelectorAll("*[data-modal-btn]");

for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', function(){
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='"+name+"']");
        modal.style.display = "block"; 
        let close = modal.querySelector(".close_modal_window");
        close.addEventListener('click', function(){
            modal.style.display = "none";
        })
    })
}
