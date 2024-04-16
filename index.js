	// Write your solution in this file!
   const employee = {name: null, streetAddress: null}
   
    function updateEmployeeWithKeyAndValue(employee, key, value){
        const temp = {...employee}
        temp[key] = value;
        return temp;
    }
    
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee;
    }
    function deleteFromEmployeeByKey(employee, key){
        const temp = {...employee};
        delete temp[key];
        return temp;
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee;
    }