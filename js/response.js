        function calculateGrade(){
    //getting the record and grades.
          
   
    var name = document.getElementById("Names").value;
    var subject = document.getElementById("Subject").value;
    var course = document.getElementById("Course").value;
    var prelim = parseInt(document.getElementById("Prelim").value);
    var midterm = parseInt(document.getElementById("Midterm").value);
    var final = parseInt(document.getElementById("Final").value);


      if(!name=="" && !course=="" && !subject=="" && prelim>0 && midterm>0 && final>0)
        {
        
                   
    var total = prelim + midterm + final;
    var grade = (total / 3).toFixed(2);
       

   
    var equivalentGrade;
    var Remarks;

    switch (true){
     case (prelim >= 100 || prelim <= 70  ):
     case (midterm >= 100 || midterm <= 70 ):
     case (final >= 100 || final <= 70 ):
          name = ""
          course = ""
          subject = ""
          grade = ""
          equivalentGrade = ""
          Remarks = ""
          alert ("Please Input a Valid Grade ! ( Grade must be lower than 100 and greater than 70 ) " );
     break;
     case (grade >= 100 || grade <= 70):
             name = ""
             course = ""
             subject = ""
             grade = ""
             equivalentGrade = ""
             Remarks = ""
             alert ("Please Input a Valid Grade !( Grade must be lower than 100 and greater than 70 )");
     break;
     case (grade >= 95):
             equivalentGrade = "1.0"
             Remarks = "PASSED!"
     break;
     case (grade >= 90):
             equivalentGrade = "1.25"
             Remarks = "PASSED!"
     break;    
     case (grade >= 85):
              equivalentGrade = "1.50"
              Remarks = "PASSED!"
     break;
     case (grade >= 80):
              equivalentGrade = "1.75"
              Remarks = "PASSED!"
     break;
     case (grade >= 75):
              equivalentGrade = "2.0"
              Remarks = "PASSED!"
     break;
     case (grade <= 75):
              equivalentGrade = "5.0"
              Remarks = "FAILED!"
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

     var equivalentGradeAve = document.getElementById("EquivalentGrades");
     equivalentGradeAve.innerHTML = ` ${equivalentGrade}`;

     var gradeRemarks = document.getElementById("Graderemarks");
     gradeRemarks.innerHTML = ` ${Remarks}`;
                           

 }
  else{
     alert("Please fill up all the input fields!");
     
  }
    
 
}
function resetForm(){
     
        document.getElementById("Record").reset();
        document.getElementById("Result").reset();
    
       }

