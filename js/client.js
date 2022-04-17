 const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

const append = (message, position)=>{
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageElement.classList.add('message');
         messageElement.classList.add(position)
        messageContainer.append(messageElement);
        
     }

     form.addEventListener('submit', (e)=>{
          e.preventDefault();
          const message = messageInput.value;
          append(`You: ${message}`, 'right');
          socket.emit('send', message);
          messageInput.value = '';
     })

const name = prompt("Enter your name");
socket.emit('new-user-joined',name)

socket.on('user-joined', name=>{
    append(`${name} joined the chat`, 'right');
     })


     socket.on('receive', data=>{
         append(`${data.name }: ${data.message}`, 'left')
     })

     socket.on('left', name=>{
            append(`${name } left the chat`, 'left')
     })



// const append = (message, position)=>{
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position)
//     messageContainer.append(messageElement);
//     messageContainer.scrollTop = messageContainer.scrollHeight;
//     if(position == 'left'){
        
//     }
// }


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const message = messageInput.value;
//     append(`You: ${message}`, 'right');
//     socket.emit('send', message);
//     messageInput.value = '';
// })

// const name = prompt("Enter your name to join LetsChat")
// socket.emit('new-user-joined', name)

// socket.on('user-joined', name=>{
//     append(`${name} joined the chat`, 'right');
// })

// socket.on('receive', data=>{
//     append(`${data.name }: ${data.message}`, 'left')
// })

// socket.on('left', name=>{
//     append(`${name } left the chat`, 'left');
// })