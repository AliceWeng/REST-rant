# Project REST-rant

REST-rant is an app where users can review restaurants.

## Routes

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /                        | home page                                        |
| GET    | /places                  | places index page                                |
| POST   | /places                  | create new place                                 |
| GET    | /places/new              | form page for creating a new place               |
| GET    | /places/:id              | details about a particular place                 |
| PUT    | /places/:id              | update a particular place                        |
| GET    | /places/:id/edit         | form page for editing an existing place          |
| DELETE | /places/:id              | delete a particular place                        |
| POST   | /places/:id/rant         | create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above)   |

## Places

| Field    | Type   |
| -------- | ------ |
| name     | string |
| city     | string |
| state    | string |
| cuisines | string |
| pic      | string |