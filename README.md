# In-Memory Notes API

A small Express.js REST API built to demonstrate routing, JSON request handling, and basic CRUD operations.

The service stores notes in memory, making it useful as a learning project or quick API prototype. Data resets whenever the server restarts.

## Features

- Create and list notes
- Update a note description by array index
- Delete a note by array index
- JSON request and response handling with Express

## Getting started

```bash
git clone https://github.com/BhaskarJadhav/myBackendProject1.git
cd myBackendProject1
npm install
node server.js
```

The API runs at `http://localhost:3000`.

## Endpoints

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/notes` | Add a note from the JSON request body |
| `GET` | `/notes` | Return all notes |
| `PATCH` | `/notes/:index` | Update a note's `description` |
| `DELETE` | `/notes/:index` | Delete a note by array index |

Example request:

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"First note","description":"Build the API"}'
```

## Limitations

This is an introductory project, not a production service. It currently has no persistent database, validation, authentication, automated tests, or centralized error handling.
