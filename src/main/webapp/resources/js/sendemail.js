$(document).ready(function() {

	disableSendEmailButton();
	disableAddContactButton();

	$("#recipient, #content, #subject").keyup(function() {
		checkSendEmailInputElement();
	});
	
	$("#add_new_contact").keyup(function() {
		checkAddContactInputElement();
	});

	$("#send_button").click(function() {
		$("#recipient").val($("#recipient").val().trim());
		$("#subject").val($("#subject").val().trim());
		$("#content").val($("#content").val().trim());
		submitForm();
	});

	$("#add_contact").click(function() {
		//Do something
	});
});

function submitForm() {
	$("#sendmail").submit();
}

function checkSendEmailInputElement() {
	var recipientIsBlank = isBlank($("#recipient").val());
	var contentIsBlank = isBlank($("#content").val());
	var subjectIsBlank = isBlank($("#subject").val());
	
	if (recipientIsBlank || contentIsBlank || subjectIsBlank) {
		disableSendEmailButton();
	} else {
		enableSendEmailButton();
	}
}

function checkAddContactInputElement() {
	var newContactIsBlank = isBlank($("#add_new_contact").val());
	
	if (newContactIsBlank) {
		disableAddContactButton();
	} else {
		enableAddContactButton();
	}
}

function isBlank(value) {
	return value.replace(/^\s+|\s+$/gm,'') === "";
}

function enableSendEmailButton() {
	$("#send_button").removeAttr('disabled');
}

function disableSendEmailButton() {
	$("#send_button").attr('disabled', 'disabled');
}

function enableAddContactButton() {
	$("#add_contact").removeAttr('disabled');
}

function disableAddContactButton() {
	$("#add_contact").attr('disabled', 'disabled');
}