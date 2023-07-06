const hitesh={
    firstName:"kartik",
    lastName:"manna",
    role:"admin",
    courseCount:3,
    getInfo:function(){
        console.log(`
        firstName is ${this.firstName}
        lastName is ${this.lastName}
        role is ${this.role}
        courseCount is ${this.courseCount}
        `);
    },
};


const dj={
    firstName:"rock",
    lastName:"devil",
    role:"student",
    courseCount:4,
};

hitesh.getInfo();
//return the value of first scope
//dj.getinfo();
//give error
hitesh.getInfo.bind(dj)();
