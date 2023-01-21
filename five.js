class Electro { 
    static condition (){ 
        console.log ("Color is black") 
    } 
    wow() { 
        console.log ("123") 
    } 
} 
 
class Lampe extends Electro { 
    static status() { 
        super.condition(); 
        console.log('Лампа включена') 
    } 
} 
 
class Computer extends Electro{ 
    static status() { 
        super.condition(); 
        console.log("Компьютер выключен") 
    } 
} 
Electro.condition(); 
Lampe.status(); 
Computer.status();
