
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank").Navigate Parameter("Site") @@ hightlight id_;_5185452_;_script infofile_;_ZIP::ssf41.xml_;_
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Exist Then @@ script infofile_;_ZIP::ssf4.xml_;_
	Reporter.ReportEvent micPass, "Login", " Login Passed !"
	else
	Reporter.ReportEvent micFail, "Login", " Login failed" 
	ExitTest Parameter("Message")
End If
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "67f4c94d8650d36a35a2fe7fad4120f19df88a19b742abc7aed241cb" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf4.xml_;_



 @@ script infofile_;_ZIP::ssf23.xml_;_
