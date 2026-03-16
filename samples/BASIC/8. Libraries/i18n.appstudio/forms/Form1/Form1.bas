Sub Main()
  If typeof(localStorage.locale) = "undefined" Then
    rbLanguage.value = 1
  Else
    rbLanguage.value = ["de" , "en"].indexOf(localStorage.locale)
  End If
End Sub

Function rbLanguage_onchange()
  NSB.initLanguage( ["de" , "en"][rbLanguage.value] ).then(cleanup)
End Function

Function cleanup()
  Input1.placeholder = $.i18n("Enter text here")
End Function
