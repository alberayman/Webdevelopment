var dataBase = [
    {
        userName:"Alber",
        passWord: "password"
    },
    {
        userName:"Samy",
        passWord:"852"
    },
    {
        userName:"Sara",
        passWord:"123"
    }
];
var newsFeed = [
    {
        userName:"Adam",
        state:"Pretty good thank you."
    },
    {
        userName:"Elena",
        state:"So tired"
    }
]
var userNamePromt = prompt("Enter your UserName");
var passWordPromt= prompt("Enter Your Password");

function isValid(user,password){
    for (var i=0;i<dataBase.length;i++){
        if(dataBase[i].userName === user && dataBase[i].passWord ===password)
        {
            return true;
        }

    }return false;
}
function signIn(user,password){
    if (isValid(user,password)){
        console.log(newsFeed);
    }else{
        console.log("Invalid log in ");  
    }
}
signIn(userNamePromt,passWordPromt);


// function signIn (user,pass){
//     if(userNamePromt === dataBase[0].userName && passWordPromt === dataBase[0].passWord){
//         console.log(newsFeed);
//     }else 
//     {
//         console.log("Invalid log in ");
//     }
// }

// signIn(userNamePromt,passWordPromt);

// function keepTrack(item,index){
//     console.log(item,index);
// };
// newsFeed.forEach(keepTrack);

// var counter=0;
// do {
// counter++;
// console.log(counter);
// }while(counter<5)
