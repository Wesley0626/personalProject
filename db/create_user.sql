insert into users(username, password, email, phone, first_name, last_name)
values($1, $2, $3, $4, $5, $6)
returning *;