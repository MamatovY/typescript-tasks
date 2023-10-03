function sum(a:number,b:number):number { 
    return a+b
}

const sum2=(a:number,b:number):number=>a+b

sum(2,2) 

function log(name:string,userId?:string):void{
console.log('Hello',name, 'width ID', userId||'anonym') ;
}

log('Mikhail','213')

function crash():never{
throw new Error('crash');
}

function average(...nums:number[]){
    const sum=nums.reduce((current,total)=>current+total,0)

    return sum/nums.length
}

