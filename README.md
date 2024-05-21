# Setting Up the Project

## Backend Setup

1. **Change Database Name**:
   - Navigate to `backend/appsettings.json`.
   - Update the database name in the connection string to match your desired name.

2. **Install Entity Framework Core Tools**:
   - Open your terminal.
   - Run the following command to install Entity Framework Core tools globally:
     ```bash
     dotnet tool install --global dotnet-ef
     ```

3. **Run Migrations**:
   - In the terminal, navigate to the `backend` directory.
   - Run the following command to create migrations:
     ```bash
     dotnet ef migrations add init
     ```
   - Then, apply the migrations to the database:
     ```bash
     dotnet ef database update
     ```

## Running the Application

4. **Run Backend Server**:
   - In the terminal, navigate to the `backend` directory.
   - Run the following command to start the backend server:
     ```bash
     dotnet run
     ```

5. **Access the Application**:
   - Once the server is running, you can access the application using your preferred web browser or API testing tool.
