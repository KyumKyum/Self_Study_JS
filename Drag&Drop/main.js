const filled = document.querySelector('.filled');
const boxes = document.querySelectorAll('.emptyBox');

filled.addEventListener('dragstart',dragStart);
filled.addEventListener('dragend',dragEnd);

for(const box of boxes){
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',dragDrop);
}

function dragStart(){
    this.classList.add('hold');
    setTimeout(() => this.className = 'invisible',0);
}

function dragEnd(){
    this.className = 'filled';
}

function dragOver(e){
    e.preventDefault();
    
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(){
    this.className='emptyBox';
}

function dragDrop(){
    this.className='emptyBox';
    this.append(filled);
}

