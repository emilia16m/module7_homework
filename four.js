function Electro(name){
    this.color = 'black',
    this.name = name
  }
  Electro.prototype.getStatus = function (status) {
    console.log(`Прибор ${status} `)
  }
  
  const lampe = new Electro("lampe");
  const computer = new Electro("computer");
  
  lampe.getStatus("включен")
  computer.getStatus("выключен")
