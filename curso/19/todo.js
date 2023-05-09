 let input= prompt(" que te gustaria hacer?")

 const todo =['play valorant ', 'make a cake', 'clean the room'];
 while( input !=='quit' && input!=='q') {

    if(input==='list'){
    console.log('**********')
    for(let i=0; i < todos.length;i++) {
        console.log ('${i}:${todos[i]}');   
    }
    console.log('**********')
}else if(input === 'new'){
    const newtodo = prompt('okey what is the new to do?')
    todos.push(newtodo);
    console.log('${newtodo}added to the list !')
} else if(input === 'delete'){
    const  Index =prompt('ok enter index to delete ');
    const deleted = todos.splice(index, 1);
    console.log('ok delete ${deleted[0]}');
}
 
    input= prompt(' que te gustaria hacer ?')
 }
 console.log ('ok quit the app ')
