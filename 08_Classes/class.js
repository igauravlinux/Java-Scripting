

// Class is a program-code template for creating objects.
// Those objects will have some (variables) & some behaviour (functions) inside it.

class Visitor{
    
    constructor(name,mobNum,flatNo){
        this.name = name;
        this.mobNum = mobNum;
        this.flatNo = flatNo;
    }

}


let Gaurav = new Visitor("Gaurav",8825364028,"k10");
let Soni = new Visitor("Soni",8812314028,"k11");
let Divya = new Visitor("Divya",882536000,"k12");

class VMS{
    visitors = [];

    checkin(visitor){
        this.visitors.push(visitor)
    }

    showAll(){
        console.log(this.visitors);
    }
    
    showName(){
        console.log(this.visitors.map(it => it.name));
    }
}


let vms = new VMS();

vms.checkin(Gaurav);
vms.checkin(Soni);
vms.checkin(Divya);

vms.showAll()
vms.showName();
