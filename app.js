const fs = require('fs-extra');
var msg = 'Hello World';
console.log(msg);
let mappingSrc = fs.readFileSync('roleapi.json', 'utf8');
let Grpfile = fs.readFileSync('GroupMember.json', 'utf8');
let ReportHubFile = fs.readFileSync('ReportDataHub.json', 'utf8');
mappingSrc = JSON.parse(mappingSrc);
ReportHubFile=JSON.parse(ReportHubFile);
Grpfile=JSON.parse(Grpfile);
var outputrecords=[];
/*
for(var item of ReportHubFile.Sheet1){

  console.log(item.Role_Name__c);
var newRoles=  mappingSrc[item.Role_Name__c].split(',');
var newitem={};
  for(var item1 of newRoles){
      var newitem={};
      newitem.Dashboard_API_Name__c=item.Dashboard_API_Name__c;
      newitem.RecordTypeId=item.RecordTypeId;
      newitem.Record_Type_Id__c=item.Record_Type_Id__c;
      newitem.Role_Name__c=item1;
     
      console.log('@updated record'+JSON.stringify(newitem));
      outputrecords.push(newitem);
 }

}

fs.outputFile("C:/Users/ypalani/Documents/VSCode/NodeJS Projects/Output/"+outputrecords.json, JSON.stringify(outputrecords));

*/
for(var item of Grpfile){

    console.log(item.RoleAPIName);
  var newRoles=  mappingSrc[item.RoleAPIName].split(',');
  var newitem={};
    for(var item1 of newRoles){
        var newitem={};
        newitem.RoleAPIName=item1;
        newitem.GroupId=item.GroupId;
        newitem.GroupType=item.GroupType;
        newitem.GroupName=item.GroupName;
        newitem.UserOrGroupId=item.UserOrGroupId;
        newitem.RoleType=item.RoleType;
       
        console.log('@updated record'+JSON.stringify(newitem));
        outputrecords.push(newitem);
   }

}

fs.outputFile("C:/Users/ypalani/Documents/VSCode/NodeJS Projects/Output/"+outputrecords.json, JSON.stringify(outputrecords));




