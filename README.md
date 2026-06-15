# In-Memory Notes API

A beginner-friendly Express REST API that demonstrates CRUD operations and JSON request handling.

Notes are stored in memory and reset whenever the server restarts.

## Setup

```bash
git clone https://github.com/BhaskarJadhav/myBackendProject1.git
cd myBackendProject1
npm install
node server.js
```

The server runs at `http://localhost:3000`.

## API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/notes` | Create a note |
| `GET` | `/notes` | List all notes |
| `PATCH` | `/notes/:index` | Update a note description |
| `DELETE` | `/notes/:index` | Delete a note |

Example body:

```json
{
  "title": "First note",
  "description": "Learn Express routing"
}
```

## Built with

`Node.js` `Express`

## Limitations

This learning project does not include persistent storage, authentication, validation, or automated tests.
