window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    // var createInnerHtml="";
    var innerHTML1 = "";
    const headerHtml = "<tr>" +
        "<th></th>" +
        "<th>Name</th>" +
        "<th>Gender</th>" +
        "<th>Department</th>" +
        "<th>Salary</th>" +
        "<th>Start Date</th>" +
        "<th>Action</th>" +
        "</tr>";
    innerHTML1 = headerHtml;
    let empPayrollList = createEmployeePayrollJSON();
    for (var empPayrollData of empPayrollList) {
        innerHTML1 = innerHTML1 + "<tr>" +
            // "<td><img class='profile' alt='' src='../assets/profile-images/Ellipse -2.png'></td>"+
            `<td><img class='profile' src='${empPayrollData._profilePic}'></td>` +
            "<td>" + empPayrollData._name + "</td>" + // "<td>${empPayrollData._name}</td>"
            "<td>" + empPayrollData._gender + "</td>" +
            "<td>" + getDeptHtml(empPayrollData._department) + "</td>" +
            "<td>" + empPayrollData._salary + "</td>" +
            "<td>" + empPayrollData._startDate + "</td>" +
            "<td>" +
            "<img id='1' onclick='remove(this)' alt='delete' src='../assets/icons/delete-black-18dp.svg'>" +
            "<img id='1' onclick='update(this)' alt='edit' src='../assets/icons/create-black-18dp.svg'>" +
            "</td>" +
            "</tr>";
    };
    document.querySelector('#table-display').innerHTML = innerHTML1;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Amaepa shamshank Keerthi Kumar',
            _gender: 'female',
            _department: [
                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -4.png'
        }
    ];
    return empPayrollListLocal;
}

let getDeptHtml = (deptList) => {
    let deptHtml = "";
    for (const dept of deptList) {
        deptHtml += "<div class='dept-label'>" + dept + "</div>"
    }
    return deptHtml;
}