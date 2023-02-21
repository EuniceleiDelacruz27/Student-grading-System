window.onresize = function() {
     alert("The window has been resized!");  
    }

function calculateGrade(){
    //getting the record and grades.
  
    window.onresize = function() {
     alert("The window has been resized!");  
    }

    var name = document.getElementById("Names").value;
    var subject = document.getElementById("Subject").value;
    var course = document.getElementById("Course").value;
    var prelim = parseInt(document.getElementById("Prelim").value);
    var midterm = parseInt(document.getElementById("Midterm").value);
    var final = parseInt(document.getElementById("Final").value);
    

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
     studname.innerHTML = ` ${name}`;
     
     const studCourse = document.getElementById("Courses");
     studCourse.innerHTML = ` ${course}`;
 
     const studSubj = document.getElementById("Subjects");
     studSubj.innerHTML = ` ${subject}`;

     const resultDiv = document.getElementById("result"); 
     resultDiv.innerHTML = ` ${grade}`;

     var equivalentGradeAve = 
     document.getElementById("Equivalent Grades");
     equivalentGradeAve.innerHTML = 
    ` ${equivalentGrade}`;

     var gradeRemarks = document.getElementById("Graderemarks");
     gradeRemarks.innerHTML = ` ${Remarks}`;
  }
  else{
     alert("Please fill up all the input fields!");
  }
 
}

