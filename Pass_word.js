	let emoji = document.querySelector('.emoj');
    	let inp = document.querySelector('#inpt');
    	let slash = document.querySelector('.c1');
    	let message = document.querySelector('.message');

    	let em = document.createElement('i');
        em.className = 'far fa-eye c2';
        emoji.appendChild(em);

        emoji.addEventListener('mousedown', function() {
            slash.classList.add('h1');
            em.classList.add('h2');
            inp.type = 'text';
            emoji.classList.add('cls');
        });

        emoji.addEventListener('mouseup', function() {
        	slash.classList.remove('h1');
        	em.classList.remove('h2');
            inp.type = 'password';
            emoji.classList.remove('cls');
        });

        inp.addEventListener('keyup', function() {
           if(inp.value.length >= 8) {
              message.classList.add('show');

              setTimeout(() => {
                 message.classList.remove('show'); 
              }, 5000);
           } 
        });
