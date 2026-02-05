const student = {
    id: 202,
    name: "Rishabh",
    course: "BTech",
    address: {
        city: "Ghaziabad",
        country: "India"
    },
    marks: [88, 98, 90, 70],
    admissionstatus: true
};

function displayData(student){
    let sum = 0
    for(i=0;i<4;i++){
        sum = sum + student.marks[i]
    }
    console.log(sum/4);
    console.log(student)
    if(sum/4 >= 80){
        console.log("Eligible for Merit Scholarship")
    }else{
        console.log("Regular Admission")
    }
}
displayData(student);