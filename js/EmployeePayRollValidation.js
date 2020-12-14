window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.oninput = function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    };
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
dateValidation = () => {
    var today = new Date();
    const date = `${document.querySelector("#year").value}${document.querySelector("#month").value
        }${document.querySelector("#day").value}`;
    const dateError = document.querySelector("#date-error");
    let currentDate = `${today.getFullYear()}${String(
        today.getMonth() + 1
    ).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;
    if (date > currentDate) {
        dateError.textContent = "Date not be a future date";
    } else {
        dateError.textContent = "";
    }
};

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
};

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById("#name");
    } catch (e) {
        setTextValue(".text-error", e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.note = getInputValueById("#notes");
    let date = `${getInputValueById("#day")}/${getInputValueById("#month")}/${getInputValueById("#year")}`;
    employeePayrollData.date = date;
    alert(employeePayrollData.toString());
    return employeePayrollData;
};

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) {
            selItems.push(item.value);
        }
    });
    return selItems;
};

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
};

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
      employeePayrollList.push(employeePayrollData);
    } else {
      employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem( "EmployeePayrollList", JSON.stringify(employeePayrollList));
  }

  resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','01');
    setValue('#month','01');
    setValue('#year','2020');
}

unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}