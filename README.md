# Contact Management System

A full-stack Contact Management System built using Node.js, Express.js, MongoDB, Mongoose, HTML, CSS, and JavaScript.

The application allows users to create, view, search, edit, and delete contacts through a clean and responsive web interface. Each contact has a user-defined unique Contact ID along with a name, phone number, and email address.

---

## Features

- Add new contacts
- User-defined unique Contact ID
- View all contacts
- View a single contact using Contact ID
- Edit existing contacts
- Delete contacts
- Search contacts in real time
- Search by:
  - Name
  - Phone number
  - Contact ID
  - Email
- Sort contacts by:
  - Name A-Z
  - Name Z-A
  - Most recently added
  - Oldest added
- Display total number of contacts
- Phone number validation
- Email validation
- Required field validation
- Duplicate Contact ID prevention
- Duplicate email prevention
- Responsive and user-friendly interface
- MongoDB database persistence
- REST API for contact management
- Error handling and validation responses

---

## Technologies Used

### Backend

- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv
- body-parser
- nodemon

### Frontend

- HTML5
- CSS3
- JavaScript
- SweetAlert2

### Development Tools

- VS Code / BYTEXL Workspace
- Git
- GitHub
- curl
- MongoDB Atlas

---

## Project Structure

```text
contact-management-system/
│
├── .vscode/
│
├── node_modules/
│
├── src/
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── index.js
│   │
│   ├── app.js
│   ├── db.js
│   └── index.html
│
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## Contact Data Model

Each contact contains the following fields:

| Field | Type | Validation |
|---|---|---|
| Contact ID | String | Required and unique |
| Name | String | Required |
| Phone | String | Required, exactly 10 digits |
| Email | String | Required, valid email format and unique |

Example:

```json
{
  "contactId": "CNT001",
  "name": "Akhil C",
  "phone": "9876543210",
  "email": "akhil@example.com"
}
```

---

## MongoDB Configuration

The application uses MongoDB with Mongoose.

The database name is:

```text
contact_management
```

The MongoDB connection string is stored in an environment variable instead of being written directly in the source code.

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

The `.env` file is ignored by Git using `.gitignore` so that database credentials are not uploaded to GitHub.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Akhil-coderr/contact-management-system.git
```

Move into the project directory:

```bash
cd contact-management-system
```

Install the required dependencies:

```bash
npm install
```

Create the `.env` file and add your MongoDB connection string.

---

## Running the Application

Start the application:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

For development, if the `dev` script is available:

```bash
npm run dev
```

The application connects to MongoDB when the server starts.

Expected output:

```text
Server is running on port 3000
MongoDB connected
```

---

# API Documentation

The application provides REST APIs for managing contacts.

## 1. Create a Contact

### Endpoint

```http
POST /contacts
```

### Request Body

```json
{
  "contactId": "CNT001",
  "name": "Akhil C",
  "phone": "9876543210",
  "email": "akhil@example.com"
}
```

### Successful Response

Status:

```text
201 Created
```

Example:

```json
{
  "contactId": "CNT001",
  "name": "Akhil C",
  "phone": "9876543210",
  "email": "akhil@example.com"
}
```

---

## 2. Get All Contacts

### Endpoint

```http
GET /contacts
```

### Successful Response

Status:

```text
200 OK
```

Example:

```json
[
  {
    "contactId": "CNT001",
    "name": "Akhil C",
    "phone": "9876543210",
    "email": "akhil@example.com"
  }
]
```

---

## 3. Get Contact by Contact ID

### Endpoint

```http
GET /contacts/:id
```

Example:

```http
GET /contacts/CNT001
```

### Successful Response

Status:

```text
200 OK
```

Example:

```json
{
  "contactId": "CNT001",
  "name": "Akhil C",
  "phone": "9876543210",
  "email": "akhil@example.com"
}
```

If the contact does not exist:

```text
404 Not Found
```

```json
{
  "error": "Contact not found"
}
```

---

## 4. Update a Contact

### Endpoint

```http
PUT /contacts/:id
```

Example:

```http
PUT /contacts/CNT001
```

### Request Body

```json
{
  "contactId": "CNT001",
  "name": "Akhil Kumar",
  "phone": "9876543210",
  "email": "akhil@example.com"
}
```

### Successful Response

Status:

```text
200 OK
```

The updated contact is returned in the response.

---

## 5. Delete a Contact

### Endpoint

```http
DELETE /contacts/:id
```

Example:

```http
DELETE /contacts/CNT001
```

### Successful Response

Status:

```text
200 OK
```

Example:

```json
{
  "message": "Contact deleted successfully"
}
```

---

# Validation

The application performs validation before storing contact information.

### Contact ID

- Required
- Must be unique
- Entered by the user
- Supports letters, numbers, `_` and `-`
- Maximum length is 30 characters

Example:

```text
CNT001
FRIEND_01
CUSTOMER-100
```

### Name

- Required

### Phone

- Required
- Must contain exactly 10 digits

Valid:

```text
9876543210
```

Invalid:

```text
98765
```

### Email

- Required
- Must follow a valid email format

Valid:

```text
akhil@example.com
```

Invalid:

```text
invalid-email
```

### Duplicate Values

The application prevents duplicate:

- Contact IDs
- Email addresses

Duplicate values return an appropriate error response instead of creating another contact.

---

# Frontend Features

The frontend provides a simple interface for managing contacts.

### Add Contact

Users can enter:

- Contact ID
- Full name
- Phone number
- Email

and click **Add Contact** to save the contact.

### Search

Contacts can be searched instantly using:

- Name
- Phone number
- Contact ID
- Email

### Sorting

Contacts can be sorted using:

```text
Name A-Z
Name Z-A
Most recently added
Oldest added
```

### Contact Count

The interface displays the current number of contacts stored in the system.

### Edit

Each contact has an **Edit** button that allows the user to update the contact information.

### Delete

Each contact has a **Delete** button to remove the contact from the database.

A confirmation is displayed before deleting a contact.

---

# Error Handling

The backend handles common errors such as:

- Missing required fields
- Invalid phone numbers
- Invalid email addresses
- Duplicate Contact IDs
- Duplicate email addresses
- Contact not found
- Database errors

Example validation error:

```json
{
  "error": "Contact validation failed: phone: Path `phone` is invalid."
}
```

Example not-found error:

```json
{
  "error": "Contact not found"
}
```

---

# Testing

The API was tested using curl and the frontend was tested through the browser.

The following operations were tested:

- Create contact
- Get all contacts
- Get contact by ID
- Update contact
- Delete contact
- Search contacts
- Sort contacts
- Contact count
- Required field validation
- Phone number validation
- Email validation
- Duplicate Contact ID validation
- Duplicate email validation
- Non-existing contact handling

---

## Example curl Commands

### Get all contacts

```bash
curl http://localhost:3000/contacts
```

### Create a contact

```bash
curl -X POST http://localhost:3000/contacts ^
-H "Content-Type: application/json" ^
-d "{\"contactId\":\"CNT001\",\"name\":\"Akhil C\",\"phone\":\"9876543210\",\"email\":\"akhil@example.com\"}"
```

### Get a contact

```bash
curl http://localhost:3000/contacts/CNT001
```

### Update a contact

```bash
curl -X PUT http://localhost:3000/contacts/CNT001 ^
-H "Content-Type: application/json" ^
-d "{\"contactId\":\"CNT001\",\"name\":\"Akhil Kumar\",\"phone\":\"9876543210\",\"email\":\"akhil@example.com\"}"
```

### Delete a contact

```bash
curl -X DELETE http://localhost:3000/contacts/CNT001
```

---

# Database

MongoDB Atlas is used as the database.

Mongoose is used to:

- Connect Node.js with MongoDB
- Define the Contact schema
- Validate contact data
- Perform CRUD operations
- Enforce unique Contact IDs and emails

Database:

```text
contact_management
```

Collection:

```text
contacts
```

---

# Application Flow

The application follows this basic flow:

```text
User
  ↓
Frontend (HTML + CSS + JavaScript)
  ↓
Express.js REST API
  ↓
Mongoose
  ↓
MongoDB
```

When a user performs an operation on the website, the frontend sends a request to the Express API. The backend processes the request using Mongoose and stores or retrieves the information from MongoDB.

The result is then returned to the frontend and displayed to the user.

---

# Security

Sensitive configuration such as the MongoDB connection string is stored in `.env`.

The `.env` file is included in `.gitignore` and is not committed to GitHub.

Example:

```text
.env
node_modules/
```

---

# GitHub Repository

Repository:

```text
https://github.com/Akhil-coderr/contact-management-system
```

---

# Conclusion

The Contact Management System provides a complete CRUD-based contact management application with a Node.js and Express backend, MongoDB database, and interactive HTML/CSS/JavaScript frontend.

The project demonstrates:

- REST API development
- Express.js routing
- MongoDB database integration
- Mongoose schemas and validation
- CRUD operations
- Frontend-backend communication
- Form validation
- Search and sorting
- Error handling
- Environment variable configuration
- Git and GitHub version control