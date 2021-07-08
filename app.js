// 1
// function reverse (str= 'data') {
//     let A = ''
//     for (let i = str.length - 1; i >= 0; i--)
//         A += str[i]
//     return A
//     }
// console.log(reverse())

// 2
// str = 'this is test'
// let S = ""
// let A = str.split(" ")
// for(i = 0; i < A.length; i++) {
//     S += A[i].charAt(0).toUpperCase() + A[i].slice(1) + " "
// }
// console.log(S)

// 3
// let A = ['one', 'one', 'one', 'two', 'two', 'three', 'three', 'four', 'five', 'five', 'five']
// let A = [1,2,3,1,2,3,2,2,1,4,5,5]
// let B = []
// for (let i = 0; i < A.length; i++) {
//     if (B.indexOf(A[i]) === -1) {
//     B.push(A[i])
//     }
// }
// console.log(B)

// 4
let DSNV =[
    {
        id: 1,
        name: 'Cao',
        age: '27',
        cost: '2000',
        position: 'lead'
    },
    {
        id: 2,
        name: 'Đạt',
        age: '25',
        cost: '1400',
        position: 'HR'
    },
    {
        id: 3,
        name: 'Minh',
        age: '26',
        cost: '1300',
        position: 'suppoter'
    }
]

let input = prompt("Xem danh sách nhân sự :")
if(input == "r"){
    for (let i = 0; i < DSNV.length ; i++){
        console.log(`name: ${DSNV[i].name} `)
        console.log(`age: ${DSNV[i].age} `)
        console.log(`cost: ${DSNV[i].costr} `)
        console.log(`position: ${DSNV[i].position} `)
        console.log(`----------------------------- `)
        // console.log(`${DSNV[i].name}. ${DSNV[i].age}. ${DSNV[i].cost}. ${DSNV[i].position} `)
    }
}
else if(input == "c"){
    let input2_0 = prompt("thêm thông tin nhân sự :")
    let input2_1 = prompt("thêm tuổi nhân sự :")
    let input2_2 = prompt("thêm lương tin nhân sự :")
    let input2_3 = prompt("thêm vị trí tin nhân sự :")
    DSNV.push({id: `${DSNV.length + 1}`}, {name: `${input2_0}`}, {age: `${input2_1}`}, {cost: `${input2_2}`}, {position: `${input2_3}`})
    console.log(DSNV)
}
else if(input == "u"){
    let input3 = prompt('update thông tin:')
    for(let i = 0; i < DSNV.length; i++){
        if (input3 == DSNV[i].id){
            let Name = prompt("nhập tên mới")
            DSNV[i].name = Name
            let Age = prompt("nhập tuổi mới")
            DSNV[i].age = Age
            let Cost = prompt("nhập lương mới")
            DSNV[i].cost = Cost
        }
    }
    console.log(DSNV)
}
else if(input == "d"){
let input4 = prompt("xóa dữ liệu")
for(let i = 0; i <DSNV.length ; i++){
    if(input4 == DSNV[i].id){
        delete DSNV[i].name
        delete DSNV[i].id
        delete DSNV[i].cost
        }
    } 
    console.log(DSNV)       
}







