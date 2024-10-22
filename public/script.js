// Initialize selected row variable
var selectedRow = null;

// Handle form submit event
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Retrieve data from form
function readFormData() {
    var formData = {};
    formData["studentId"] = document.getElementById("studentId").value;
    formData["name"] = document.getElementById("name").value;
    formData["roll"] = document.getElementById("roll").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

// Insert new record into the table
function insertNewRecord(data) {
    var table = document
        .getElementById("studentList")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.roll;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.birthday;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.address;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
}

// Edit the selected record
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("roll").value = selectedRow.cells[2].innerHTML;
    document.getElementById("birthday").value = selectedRow.cells[3].innerHTML;
    document.getElementById("address").value = selectedRow.cells[4].innerHTML;
}

// Update the record after editing
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentId;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.roll;
    selectedRow.cells[3].innerHTML = formData.birthday;
    selectedRow.cells[4].innerHTML = formData.address;
}

// Delete a record
function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// Reset form values
function resetForm() {
    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}
