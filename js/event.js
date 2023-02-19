function calculateGrade(){
    //getting the record and grades.
  

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var section = document.getElementById("section").value;
    var course = document.getElementById("course").value;
    var prelim = parseInt(document.getElementById("prelim").value);
    var midterm = parseInt(document.getElementById("midterm").value);
    var final = parseInt(document.getElementById("final").value);
    
     if(!name=="" && prelim>0 && midterm>0 && final>0) 
     {


     
     
    
    var total = prelim + midterm + final;
    var grade = (total / 3).toFixed(2);

   

    var equivalentGrade;
    var Remarks;

    switch (true){
        case (grade >= 95):
             equivalentGrade = "1.0"
             Remarks = "Excellent !"
             break;
        case (grade >= 90):
             equivalentGrade = "1.25"
             Remarks = "Very Good!"
             break;    
        case (grade >= 85):
              equivalentGrade = "1.50"
              Remarks = "Good!"
              break;
        case (grade >= 80):
              equivalentGrade = "1.75"
              Remarks = "Fairly Good!"
              break;
        case (grade >= 75):
              equivalentGrade = "2.0"
              Remarks = "Passing!"
              break;
         case (grade <= 75):
              equivalentGrade = "5.0"
              Remarks = "Failing!"
              break;           
    }
     //getting the Result.
     const studname = document.getElementById("Name");
     studname.innerHTML = `Name: ${name}`;
     
     const studCourse = document.getElementById("Courses");
     studCourse.innerHTML = `Course: ${course}`;

     const studSec = document.getElementById("Section");
     studSec.innerHTML = `Section: ${section}`;
 
     const studSubj = document.getElementById("Subjects");
     studSubj.innerHTML = `Subject: ${subject}`;

     const resultDiv = document.getElementById("result"); 
     resultDiv.innerHTML = `Your Final Grade is: ${grade}`;

     var equivalentGradeAve = 
     document.getElementById("Equivalent Grades");
     equivalentGradeAve.innerHTML = 
    `Your Equivalent Grade is: ${equivalentGrade}`;

     var gradeRemarks = document.getElementById("Graderemarks");
     gradeRemarks.innerHTML = `You Grade Remarks is : ${Remarks}`;
     } 
     else{
          alert("Please fill up all the input fields!");
     }   
}

