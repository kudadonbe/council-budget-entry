// <input name="ctl00$ContentPlaceHolder1$txtEng" type="text" id="ContentPlaceHolder1_txtEng" class=" form-control "></input>

// <input name="ctl00$ContentPlaceHolder1$txtDiv" type="text" id="ContentPlaceHolder1_txtDiv" class="form-control thaanaKeyboardInput entrymv"></input>

// <input type="submit" name="ctl00$ContentPlaceHolder1$cmdAdd" value="Save" id="ContentPlaceHolder1_cmdAdd" class="btn   btn-xs btn-danger btnsize pull-left"></input>

const Activities = [
  { progNameEng: "Staff Naight", progNameDhi: "ސްޓާފް ނައިޓް" },
  { progNameEng: "Fishermans Days", progNameDhi: "މަސްވެރިންގެ ދުވަސް" },
];

const activityEntry = async (activity) => {

  const progNameEng = document.getElementById("ContentPlaceHolder1_txtEng");
  const progNameDhi = document.getElementById("ContentPlaceHolder1_txtDiv");

  // Set English Name
  progNameEng.value = activity.progNameEng;

  // Set Dhivehi name
  progNameDhi.value = activity.progNameDhi;

  // Click the "Save" button
  //   document.getElementById("ContentPlaceHolder1_cmdAdd").click();
  // Optional: Add a delay between entries
};

activityEntry();





