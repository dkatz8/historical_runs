Browser("Home - Advantage Bank").Page("New Transfer - Advantage").Sync
Browser("Home - Advantage Bank").Navigate Parameter ("Site") @@ hightlight id_;_11410582_;_script infofile_;_ZIP::ssf7.xml_;_
if Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Exist Then @@ script infofile_;_ZIP::ssf4.xml_;_
Reporter.ReportEvent micPass, "AOB live", .Parameter ("Type") 
else
	Reporter.ReportEvent micFail, "AOB live ", .Parameter ("Type") 
	ExitTest.Parameter ("Type") 
End If @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "68405a0e1e471be4900e14bad4160fdff114e2e17ee70898d7b18dd1" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf6.xml_;_
