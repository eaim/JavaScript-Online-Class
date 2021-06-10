function confess(question ,yes , no ){
  if(confirm(question)){
  yes();
  }else{
  no();
  }
  }
  
  confess("Will you marry me? " , 
  () =>  {alert(' You agreed ! i am so happy');}, 
  () => {alert(' You denied... i am so sad ya');}
  );
  