
Function window_onorientationchange()
  If window.orientation = 90 Then
    lblSavedWindSpeed.Top = 125
    lblSavedWindSpeed.Left = 300
    lblSavedWindDir.Top = 165
    lblSavedWindDir.Left = 300
    lblSavedCloudiness.Top = 205
    lblSavedCloudiness.Left = 300
    lblSavedWindSpeedValue.Top = 125
    lblSavedWindSpeedValue.Left = "75%"
    lblSavedWindDirValue.Top = 165
    lblSavedWindDirValue.Left = "75%"
    lblSavedCloudinessValue.Top = 205
    lblSavedCloudinessValue.Left = "75%"
    
    lblSavedTempValue.Left = "35%"
    lblSavedHumidityValue.Left = "35%"
    lblSavedPressureValue.Left = "35%"
  Else
    lblSavedWindSpeed.Top = 245
    lblSavedWindSpeed.Left = 23
    lblSavedWindDir.Top = 285
    lblSavedWindDir.Left = 23
    lblSavedCloudiness.Top = 325
    lblSavedCloudiness.Left = 23
    lblSavedWindSpeedValue.Top = 245
    lblSavedWindSpeedValue.Left = "65%"
    lblSavedWindDirValue.Top = 285
    lblSavedWindDirValue.Left = "65%"
    lblSavedCloudinessValue.Top = 325
    lblSavedCloudinessValue.Left = "65%"
    
    lblSavedTempValue.Left = "65%"
    lblSavedHumidityValue.Left = "65%"
    lblSavedPressureValue.Left = "65%"
  End If
End Function
