/*
color: #E42707;
        background-color: white;
*/

function genderSelect(self) {
    if (self.value == "male") {
        var femaleButton = document.getElementById("gender-select");
        femaleButton.id = "female-select";
    }

    else if (self.value == "female") {
        var maleButton = document.getElementById("gender-select");
        maleButton.id = "male-select";
    }
    self.id = "gender-select";
}