class student{
    static number = 0;
    constructor(name,age,phn,mark){
     this.name=name;
     this.age=age;
     this.phn=phn;
     this.mark=mark;
     student.number = student.number+1;
    }
    
   eligible(){
    if(this.mark <= 40) console.log("not eligible");
    else return console.log("eligible");
   }
   
   placementEligibility(){
     let min = 50;
     let minAge = 30;
    if(this.mark <= min) return false;
    else if(this.age >= minAge) return false; 
    else console.log(this.name);// console.log("eligible for placement");
   }
   }
   
   let std1 = new student("kiya",25,0707,75)
   let std2 = new student("suzi",28,0777,90)
   let std3 = new student("pia",24,0507,40)
   let std4 = new student("tiya",30,0307,35)
   let std5 = new student("siya",26,0107,55)
   
   console.log(student.number);
   console.log(std1);
   console.log("eligible students are:");
   std1.placementEligibility();
   std2.placementEligibility();
   std3.placementEligibility();
   std4.placementEligibility();
   std5.placementEligibility();