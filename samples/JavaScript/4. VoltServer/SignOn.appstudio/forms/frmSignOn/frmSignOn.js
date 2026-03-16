var auth = {}; // the auth object returned after signon
var createAccount = null; // the object returned after createAccount
var user = {}; // the user object
var busyIcon = null; // the control showing the busy icon
var modalParms = {
    zIndex: 1000,
    clickClose: false,
    showClose: true,
    fadeDuration: 500
};
var modalParmsNoClose = {
    zIndex: 1000,
    clickClose: false,
    showClose: false,
    fadeDuration: 500
};

frmSignOn.onshow = function() {
    frmSignOn.style.height = "auto";
    frmSignOn.signInCallback = function() {};
}

frmSignOn.onsubmit = function() {
  console.log("submit!");
  return false;
  }

labForgot.onclick = function() {
    showSendResetPassword();
}

labTOS.onclick = function() {
    var win = window.open('https://www.appstudio.dev/app/AppStudioTOS.txt', '_blank');
    win.focus();
}

butSendResetPassword.onclick = function() {
    setBusyIcon(this);
    $volt.auth.forgot(inpEmail.value, butSendResetPasswordCallback);
}

function butSendResetPasswordCallback(error, data) {
    clearBusyIcon(this);
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
        createAccount = null;
    } else {
        NSB.MsgBox(butSendResetPasswordConfirmCallback, "An email is on its way to you. Follow its instructions to reset your password.", 0, "Reset password");
    }
}

function butSendResetPasswordConfirmCallback() {
    showSignIn(signInCallback);
}

butResendConfirm.onclick = function() {
    setBusyIcon(this);
    $volt.auth.resend(inpEmail.value, butResendConfirmCcallback);
}

function butResendConfirmCcallback(error, data) {
    clearBusyIcon(this);
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
        createAccount = null;
    } else {
        NSB.MsgBox(butSendResetPasswordConfirmCallback, "An email is on its way to you. Follow its instructions to confirm your account.", 0, "Resend Confirmation");
    }
}

labNoAccount.onclick = function() {
    showCreateAccount();
}

labSignIn.onclick = function() {
    showSignIn(signInCallback);
}

butCreateAccount.onclick = function() {
    labSubHead.text = "&nbsp;";
    if (inpEmail.value == "") return;
    if (inpPassword.value == "") {
        labSubHead.text = "<span style='color:red'>Password required.</span>";
        return
    }
    if (chkTOS.getValue(0) == false) {
        labSubHead.text = "<span style='color:red'>You need to agree to the Terms of Service.</span>";
        return
    }
    if (inpPassword.value != inpPasswordConfirm.value) {
        labSubHead.text = "<span style='color:red'>Passwords do not match.</span>";
        return
    }

    // passed all the checks - let's register
    setBusyIcon(this);
    $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, createAccountCallback);
}

function createAccountCallback(error, data) {
    clearBusyIcon();
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
        passwordMessage(data);
        createAccount = null;
    } else {
        labSubHead.text = "&nbsp;";
        NSB.MsgBox(createAccountConfirmCallBack, "An email is on its way. Follow its instructions to confirm your account.", 0, "Create account");
        createAccount = data;
    }
}

function createAccountConfirmCallBack(error, data) {
    location.href = 'https://docs.voltcloud.io/';
}



inpPasswordConfirm.onkeyup = function(event) {
    if (event.keyCode == 13) {
        butCreateAccount.onclick();
    }
}

butSignOn.onclick = function() {
    setBusyIcon(this);
    $volt.auth.login(inpEmail.value, inpPassword.value, signOnCallback);
}

function signOnCallback(error, data) {
    clearBusyIcon();
    console.log(error,data)
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
        auth = null;
        if (data.message == 'Account is unconfirmed.') {
            NSB.MsgBox(reconfirm, 'Account not confirmed. Would you like another confirmation email?', 'Send Again,No');
        }
    } else {
        labSubHead.text = "<span style='color:green'>Login successful</span>";
        auth = data;
        // localStorage.auth = JSON.stringify(auth)
        frmSignOn.hide();
        setBusyIcon(butSignOn);
        $volt.user.get(signOnGetUserCallback);
    }
}

function signOnGetUserCallback(error, data) {
    clearBusyIcon();
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        NSB.MsgBox(data.message);
        user = null;
    } else {
        user = data;
        if (frmSignOn.callback != undefined) frmSignOn.callback();
    }
}

function reconfirm(result) {
    if (result == "Send Again") {
        setBusyIcon(butSignOn);
        $volt.auth.resend(inpEmail.value, reconfirmCallback);
        labSubHead.text = "&nbsp;";
    }
}

function reconfirmCallback(error, data) {
    clearBusyIcon();
    if (error) {
        showError(data);
        return
    }
    NSB.MsgBox("An email is on its way to you. Follow its instructions to confirm your account.", 0, "Reconfirm account");
}


inpPassword.onkeyup = function(event) {
    if (event.keyCode == 13) {
        butSignOn.onclick();
    }
}


function showSignIn(callback) {
    if (!frmSignOn.Visible) frmSignOn.show(modalParmsNoClose);
    frmSignOn.callback = callback;
    changeSigninMode(".s-signin");
    labHead.text = "Welcome to Volt!";
    labSubHead.text = "&nbsp;";
    inpEmail_contents.disable = false;
    inpEmail.readOnly = false;
    inpPassword.value = "";
}

function showSendResetPassword() {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms)
    changeSigninMode(".s-sendreset");
    labHead.text = "Reset your password.";
    labSubHead.text = "We'll send you a link to reset your password.";
    inpEmail.show();
    inpEmail.readOnly = true;
    if (user.email) inpEmail.value = user.email;
    butSendResetPassword.show();
}

function showCreateAccount() {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms);
    changeSigninMode(".s-create");
    labHead.text = "Create your Volt account.";
    labSubHead.text = "&nbsp;";
    inpEmail.readOnly = false;
    inpPassword.value = "";
    inpPassword.show();
    inpPassword.placeholder = "Password";
    inpPasswordConfirm.value = "";
}

function showChangeEmail() {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms);
    changeSigninMode(".s-change");
    labHead.text = "Change your email address.";
    labSubHead.text = "&nbsp;";
    inpEmail_contents.disable = true;
    inpEmail_contents.readOnly = true;
    inpEmail.value = user.email;
}

function showChangePassword() {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms)
    changeSigninMode(".s-changepassword");
    labHead.text = "Change your password.";
    labSubHead.text = "&nbsp;";
    inpPassword.placeholder = "Old password";
    inpPasswordNew.value = "";
    inpPasswordConfirm.value = "";
}

function showResetPassword() {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms);
    changeSigninMode(".s-resetpassword");
    labHead.text = "Reset your password.";
    labSubHead.text = "&nbsp;";
    inpPasswordNew.value = "";
    inpPasswordConfirm.value = "";
}

function showResendConfirm() {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms);
    changeSigninMode(".s-resendconfirm");
    labHead.text = "Resend your Confirmation.";
    labSubHead.text = "&nbsp;";
    inpEmail_contents.disable = false;
    inpEmail.readOnly = false;
}

function showNewUser(callback) {
    if (!frmSignOn.Visible) frmSignOn.show(modalParms);
    frmSignOn.callback = callback;
    changeSigninMode(".s-newuser");
    labHead.text = "Add a new user to " + app.subdomain;
    labSubHead.text = "&nbsp;";
    inpEmail_contents.disable = false;
    inpEmail.readOnly = false;
}

function changeSigninMode(newMode) {
    $(".s-all").hide();
    $(newMode).show();
}

butChangeEmail.onclick = function() {
    setBusyIcon(this);
    $volt.user.update({
        email: inpEmailNew.value
    }, changeEmailCallback);
}

function changeEmailCallback(error, data) {
    clearBusyIcon();
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
    } else {
        inpEmail.value = inpEmailNew.value;
        inpEmail_contents.disable = false;
        inpEmail_contents.readOnly = false;
        NSB.MsgBox("Email updated to " + inpEmailNew.value);
        frmSignOn.hide();
    }
}

butChangePassword.onclick = function() {
    if (inpPassword.value == "") {
        labSubHead.text = "<span style='color:red'>Password required.</span>";
        return
    }
    if (inpPasswordNew.value != inpPasswordConfirm.value) {
        labSubHead.text = "<span style='color:red'>Passwords do not match.</span>";
        return
    }
    if (checkPassword(inpPasswordNew) && checkPassword(inpPasswordConfirm)) {
        var details = {
            password: {
                old: inpPassword.value,
                new: inpPasswordNew.value,
                confirmation: inpPasswordConfirm.value
            }
        };
        setBusyIcon(this);
        $volt.user.update(details, changePasswordCallback);
    }
}

function changePasswordCallback(error, data) {
    clearBusyIcon();
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
        passwordMessage(data);
    } else {
        NSB.MsgBox("Password updated.");
        frmSignOn.hide();
    }
}

butResetPassword.onclick = function() {
    if (checkPassword(inpPasswordNew) && checkPassword(inpPasswordConfirm)) {
        setBusyIcon(this);
        $volt.auth.reset(queryParams[2], inpPasswordNew.value, inpPasswordConfirm.value, resetPasswordCallback);
    }
}

function resetPasswordCallback(error, data) {
    clearBusyIcon()
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        if (data.message === "Unauthorized") {
            NSB.MsgBox(rereset, 'Your password reset has expired or is invalid. Would you like a new password reset?', 'Send Again,No');
            return;
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
    } else {
        NSB.MsgBox("Password updated.");
        showSignIn(signInCallback);
    }
}

function rereset(result) {
    if (result == "Send Again") {
        showSendResetPassword();
    } else {
        showSignIn(signInCallback);
    }
}

inpPasswordNew.onchange = function() {
    checkPassword(this);
}

inpPasswordConfirm.onchange = function() {
    checkPassword(this);
}

function checkPassword(inputtxt) {
    if (inputtxt.style.display !== "block") return;
    var ok = false;
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,15}$/;
    ok = (inputtxt.value.match(decimal) != null);
    if (inputtxt.value.length > 19) ok = true;
    if (ok) {
        labSubHead.text = "&nbsp;";
    } else {
        labSubHead.text = "<span style='color:red'>Password must be at least 20 chars; or <br>be at least 10 chars, including one uppercase, one lowercase, one number and one special character.</span>";
    }
    return ok;
}

butNewUser.onclick = function() {
    setBusyIcon(this);
    $volt.auth.register(inpEmail.value, null, null, app.id, newUserCallback);
}

function newUserCallback(error, data) {
    clearBusyIcon();
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        labSubHead.text = "<span style='color:red'>" + data.message + "</span>";
        auth = null;
    } else {
        labSubHead.text = "<span style='color:green'>Confirmation sent to user.</span>";
        frmSignOn.hide();
        if (frmSignOn.callback != undefined) frmSignOn.callback();
    }
}

frmSignOn.onhide = function() {
    inpEmail.value = "";
    inpEmailNew.value = "";
    inpPassword.value = "";
    inpPasswordConfirm.value = "";
    chkTOS.setValue(0, false);
    if (!$volt.auth.isLoggedIn()) location.href = "https://voltcloud.io"
}

function passwordMessage(data) {
    if (data.message !== "Password too weak.") return;
    var s, i, p;
    s = "<span style='color:red'>";
    p = data.validations.password;
    for (i = 0; i < p.length; i++) {
        s += "<br>• " + p[i];
    }
    labSubHead.text += s + "</span>";
}

function signout() {
    auth = {};
    localStorage.removeItem("auth");
    $volt.auth.logout();
    console.log("Signed out");
}

function setBusyIcon(el) {
    if (busyIcon) clearBusyIcon();
    busyIcon = NSB.$(el.id + "_icon");
    busyIcon.className = "fa fa-circle-o-notch fa-spin fa-fw";
}

function clearBusyIcon() {
    if (busyIcon != null) {
        busyIcon.className = "";
        busyIcon = null;
    }
}