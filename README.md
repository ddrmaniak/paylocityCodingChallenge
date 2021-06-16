# paylocityCodingChallenge
Coding challenge for my interview with paylocity.

# Setup
This project was set up with MS SQL Server in mind, please use the provided .dacpac file to seed your database and update the connection string in the appsettings.json file of the web project

# To Run
This project was written with .Net 5. The latest Visual Studio 2019 update should be able to handle it, or the most recent .net core sdk.
To run in Visual Studio, simply open the solution and run the web project.
To run in the dotnet core commandline, simply navigate to the folder with the solution and run `dotnet run --project .salaryDeductionsSalaryDeductions.csproj` in powershell or `dotnet run --project salaryDeductionsSalaryDeductions.csproj` in bash.

# To Test
In Visual Studio, run the tests using the built in test suite.
On the commandline, navigate to the solution folder and run the command `dotnet test`.