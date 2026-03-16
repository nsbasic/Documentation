// Use the jquery-Validation library To check input data
// https://jqueryvalidation.org/

Sub Main()
  initValidation()
End Sub

Function Button1_onclick()
  If $("#Container1").valid() Then
    MsgBox "Form checked - all fields OK!"
  Else
    MsgBox "Please fix indicated fields."
  End If
End Function

Sub initValidation()
  Dim validateRules = { _
    rules: { _
      Input1: "required", _
      Input2: { required: True, email: True }, _
      Textarea1: "required", _
      Select1: "required", _
    }, _
    messages: { _
      Input2: "Please enter a valid email address.", _
      Select1: "Please choose one of the values.", _
      }, _
    }

    NSB.validation(Container1, validateRules)
End Sub
