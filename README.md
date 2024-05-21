First Change the name of Datebase in backend/appsettings.json in connection string.

Second run "dotnet tool install --global dotnet-ef"

Third "dotnet ef migrations add init"    and    "dotnet ef database update"



dotnet run