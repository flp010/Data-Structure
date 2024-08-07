function clear() {
    while (!empty()) {
        pop()
    }
}

function top(){
    if (!empty()){
        x = pop()
        Push(x)
    }
}