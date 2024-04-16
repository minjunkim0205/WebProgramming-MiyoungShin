const person = () => {
    const name = prompt("Enter name");
    const score = prompt("Enter score");
    return {name, score};
}
const grade = (person) => {
    const score = parseInt(person.score)
    if(person.score >= 90){
        return ("A");
    }else if(person.score >= 80){
        return ("B");
    }else if(person.score >= 70){
        return ("C");
    }else if(person.score >= 60){
        return ("D");
    }else{
        return ("F");
    }
}
const display = function() {
    console.log("name : "+this.name+", score : "+this.score)
}

function main(){
    const std = person(); 
    std.show = display; //객체에 메소드 추가 
    std.show(); 

    const gradeJava = grade(std);
    console.log(std.name+" 학생의 java성적은 "+gradeJava+" 입니다");
}