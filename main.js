// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeArray = Array.from(document.getElementsByClassName('like-glyph'))

for (let likeIcon of likeArray) {

  likeIcon.addEventListener('click', () => {

    mimicServerCall()
    .then(function(){

      if (likeIcon.innerText === EMPTY_HEART ) {

        likeIcon.innerText = FULL_HEART
        likeIcon.addClass = 'activated-heart'

      } else {

        likeIcon.innerText = EMPTY_HEART
        likeIcon.removeClass = 'activated-heart'

      }

    })
    .catch(function (error) {

        const modal = document.getElementById('modal')
        const errorMessage = document.getElementById('modal-message')

        errorMessage.innerText = error
        modal.removeClass = 'hidden'

        setTimeout( () => {modal.addClass = 'hidden'}, 3000)

    })


  })


}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
